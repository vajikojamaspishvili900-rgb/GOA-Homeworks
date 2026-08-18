const url = 'https://jsonplaceholder.typicode.com/posts'

async function addTodo() {
    try {
        const newTask = todoInput.value
        const data = JSON.stringify({ task: newTask})

        const res = await fetch(url, {
            method: "POST",
            body: data
        })

        if (res.ok) {
            const jres = await res.json()
            console.log(jres)
            return jres
        }

        throw new Error("usdhfgjksedhfgkjdsfg")
    } catch (error) {
        console.log(error.message)
    }
}

