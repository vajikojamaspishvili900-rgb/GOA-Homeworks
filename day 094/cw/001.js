// 1) გააგზავნეთ POST მოთხოვნა "https://api.restful-api.dev/objects" ზე
// (image1.png)


async function sendPostRequest() {
    const data = {
        name: "my object",
        data: {
            id: 68,
            name: "Apple iPad Air",
            data: {
                generation: "6th",
                price: "519.99$",
                Capacity: "256 GB"
            }
        }
    };

    try {
        const response = await fetch("https://api.restful-api.dev/objects", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        console.log("server's answer:", result);
    } catch(error) {
        console.error("error appeared: ", error);
    }
}

sendPostRequest();