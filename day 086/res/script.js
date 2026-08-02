function downloadMap() {return new Promise(res => setTimeout(() => res("ice map"), 1500))}
function downloadCharacter() {return new Promise(res => setTimeout(() => res("ice Character"), 2000))}
function downloadAudio() {return new Promise(res => setTimeout(() => res("ice audio"), 2500))}

async function startGame() {
    const mapPromise = downloadMap()
    const charPromise = downloadCharacter()
    const audioPromise = downloadAudio()

    console.log(`თამაში მზადაა! ჩაიტვირთება: ${await mapPromise}, ${await charPromise}, და ${await audioPromise}`)
}

startGame()