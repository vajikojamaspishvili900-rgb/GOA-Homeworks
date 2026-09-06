// 1) ამ საიტზე რაცაა POST GET მეთოდები ყველანაირ url გააგზავნეთ მოთხოვნა 

// საიტის ლინკი: https://restful-api.dev/



// "x-api-key": "7e4ea503-27cd-41ee-a20e-82f816fd7184"

// GET მეთოდი
fetch("https://restful-api.dev/api/v1/users", {
    method: "GET",
    headers: {
        "x-api-key": "7e4ea503-27cd-41ee-a20e-82f816fd7184"
    }
})
    .then(response => response.json())
    // .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error.message));

// POST მეთოდი
fetch("https://restful-api.dev/api/v1/users", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "x-api-key": "7e4ea503-27cd-41ee-a20e-82f816fd7184"
    },
    body: JSON.stringify({
        name: "John Doe",
        email: "john.doe@example.com"
    })
})
    .then(response => response.json())
    // .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error.message));




