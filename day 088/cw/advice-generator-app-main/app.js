// https://api.adviceslip.com/advice

const adviceId = document.querySelector(".advice-id");
const adviceText = document.querySelector(".advice");
const adviceBtn = document.querySelector(".dice-button");
const advices = [];

const getAdvice = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const api = await response.json();

    adviceId.innerHTML = `ADVICE #${api.slip.id}`;
    adviceText.innerHTML = api.slip.advice;

    return api;
};

adviceBtn.addEventListener("click", async () => {
    const result = await getAdvice();

    const advice = {
        id: result.slip.id,
        advice: result.slip.advice
    };

    advices.push(advice);
    console.clear() // clear-s viyeneb radgan axali masivis dabewdvis dros wina masivi agar gamochndes da consoli ar gadaitvirtos
    console.log(advices);
});

//  169, advice: 'Do something selfless.'}

// slip
// :
// {id: 99, advice: 'Learn from your mistakes.'}