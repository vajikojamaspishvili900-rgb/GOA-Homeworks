// 2) გააგზავნეთ POST მოთხოვნა https://api.restful-api.dev/collections/${collectionName}/objects (აუცილებლად გამოიყენეთ ასინქრონული ფუნქცია) 
// საიტის ლინკი: https://restful-api.dev/ 
// (image2.png, image3.png)

// "x-api-key" : "7e4ea503-27cd-41ee-a20e-82f816fd7184"



async function createObject(collectionName, data) {
    try {
        const response = await fetch(`https://api.restful-api.dev/collections/${collectionName}/objects`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "7e4ea503-27cd-41ee-a20e-82f816fd7184"
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        console.log("answer from the server:", result);
    } catch (error) {
        console.error( error.message);
    }
}

createObject("myCollection", {
    name: "Test Object",
    data: {
        description: "This is an object"
    }
});


