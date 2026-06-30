// # Classwork 

// 1) მომხმარებელს ინფუთ თეგის საშუალებით შემოაყვანინეთ რაიმე ფერი და ღილაკზე დაკლიკების შემდეგ მთლიანი საიტის ფერი უნდა შეიცვალოს იმ ფერით რასაც მომხმარებელი შემოიყვანს.

// 2) html ში შექმენით ერთი პარაგრაფი და 2 ღილაკი "+" და "-" პლიუსზე დაჭერისას უნდა უნდა გაიზარდოს პარაგრაფის ფონტ საიზი და - ზე დაჭერისას უნდა დააკლდეს თან რანდომულად უნდა ცვლიდეს ტექსტის ფერს.

// const colors = ["red", "blue", "black", "green", "yellow", "purple", "pink", "white", "orange", "gray", "cyan", "brown", "magenta", "aqua"]
// const randomIndex = Math.floor(Math.random() * colors.length)



// 1)

const form = document.getElementById("form")
const button = document.getElementById("button")
const input = document.getElementById("input")
const body = document.querySelector("body")

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const color = document.getElementById("input").value
    console.log(color)
    body.style.backgroundColor = `${color}`
    if(color === "#000000"){
        p.style.color = "white"
    }else{
        p.style.color = "black"
    }
    form.reset()
})



// 2)

const p = document.getElementById("p")
const minus = document.getElementById("minus")
const plus = document.getElementById("plus")

let size = 16

minus.addEventListener("click", function(){
    size--
    p.style.fontSize = `${size}px`
})
plus.addEventListener("click", function(){
    size++
    p.style.fontSize = `${size}px`
})


