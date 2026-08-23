const form = document.getElementById("url-form");
const input = document.getElementById("url-input");
const resultsList = document.getElementById("results-list");

let savedLinks = JSON.parse(localStorage.getItem("shortLinks")) || [];
savedLinks.forEach(item => renderLink(item.original, item.shortened));

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const url = input.value.trim();

    if (!url) {
        input.classList.add("error");
        return;
    } else {
        input.classList.remove("error");
    }

    try {
        const response = await fetch("https://corsproxy.io/?" + encodeURIComponent("https://cleanuri.com/api/v1/shorten"), {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({ url: url })
        });

        const data = await response.json();

        if (data.result_url) {
            const linkData = { original: url, shortened: data.result_url };

            renderLink(linkData.original, linkData.shortened);
            savedLinks.push(linkData);
            localStorage.setItem("shortLinks", JSON.stringify(savedLinks));

            input.value = "";
        } else {
            alert("Please enter a valid URL");
        }
    } catch (err) {
        alert("Something went wrong. Please try again.");
    }
});


function renderLink(original, shortened) {
    const div = document.createElement("div");
    div.className = "result-item";
    div.innerHTML = `
    <span class="original-url">${original}</span>
    <div class="short-url-box">
        <span class="short-url">${shortened}</span>
        <button class="btn btn-copy">Copy</button>
    </div>
`;

    const copyBtn = div.querySelector(".btn-copy");
    copyBtn.addEventListener("click", () => {
        navigator.clipboard.writeText(shortened);
        copyBtn.textContent = "Copied!";
        copyBtn.classList.add("copied");

        setTimeout(() => {
            copyBtn.textContent = "Copy";
            copyBtn.classList.remove("copied");
        }, 2000);
    });

    resultsList.appendChild(div);
}