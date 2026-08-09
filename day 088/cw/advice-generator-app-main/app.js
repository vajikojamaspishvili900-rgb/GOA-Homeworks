// https://api.adviceslip.com/advice

const adviceId = document.querySelector(".advice-id");
const adviceText = document.querySelector(".advice")
const adviceBtn = document.querySelector(".dice-button");


const getAdvice = async ()=>{
    const response = await fetch("https://api.adviceslip.com/advice");
    const api = await response.json();
    // console.log(api)
    adviceId.innerHTML=`ADVICE #${api.slip.id}`;
    adviceText.innerHTML=`${api.slip.advice}`;

}

getAdvice();

adviceBtn.addEventListener("click", getAdvice);


//  169, advice: 'Do something selfless.'}

// slip
// :
// {id: 99, advice: 'Learn from your mistakes.'}