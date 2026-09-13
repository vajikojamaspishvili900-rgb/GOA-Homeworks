// 1) გააგზავნეთ POST მოთხოვნა "https://api.restful-api.dev/objects" ზე



// fetch("https://api.restful-api.dev/objects", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//         name: "telefoni",
//         data: {
//             brand: "Samsung",
//             model: "Galaxy A55"
//         }
//     })
// }).then(response => response.json()).then(data => console.log(data)).catch(error => console.error(error.message));



async function addPhone() {
    try {
        const response = await fetch("https://api.restful-api.dev/objects", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "telefoni",
                data: {
                    brand: "Samsung",
                    model: "Galaxy A55"
                }
            })
        });

        const data = await response.json();
        console.log(data);

    } catch (error) {
        console.error(error.message);
    }
}

addPhone();


