const num1 = Math.ceil(Math.random()*10)
const num2 = Math.ceil(Math.random()*10)
const quest = document.getElementById('question');
const formEl = document.getElementById('form')
quest.innerText = `What is ${num1} multiply by ${num2}?`;
const inputEl = document.getElementById('input')
let scoreEl = document.getElementById('score')

let score =JSON.parse(localStorage.getItem("score"));
if(!score){
    score = 0;
}

scoreEl.innerText = `score = ${score}`

const correctAns = num1 * num2;

formEl.addEventListener("submit", ()=>{
    const userAns= +inputEl.value
    if(userAns === correctAns){
        score++;
        UpdatelocalStorage();

    }else{
        score--;
        UpdatelocalStorage();
    }
});

function UpdatelocalStorage(){
    localStorage.setItem("score",JSON.stringify(score))
}
