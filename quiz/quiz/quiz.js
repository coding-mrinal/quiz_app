const questions=[
    {
        question: "Who is known as the 'Father of Computers'?",
        answers: [
            {text:"Charles Babbage",correct:true},
            {text:"Alan Turing",correct:false},
            {text:"John von Neumann",correct:false},
            {text:"Tim Berners-Lee",correct:false},
        ]
    },
    {
        question: "Which programming language is known as the 'mother of all languages'?",
        answers: [
            {text:"Java",correct:false},
            {text:"Assembly",correct:false},
            {text:"C",correct:true},
            {text:"Python",correct:false},
        ]
    },
    {
        question: "Who was the world's first computer programmer?",
        answers: [
            {text:"Charles Babbage",correct:false},
            {text:"Ada Lovelace",correct:true},
            {text:"Alan Turing",correct:false},
            {text:"James Gosling",correct:false},
        ]
    },
    {
        question: "What does HTTP stand for?",
        answers: [
            {text:"Hyper Text Transfer Protocol",correct:true},
            {text:"High Text Transfer Protocol",correct:false},
            {text:"Hyper Type Transfer Protocol",correct:false},
            {text:"Hyper Transfer Text Protocol",correct:false},
        ]
    },
    {
        question: "Which of the following is not an operating system?",
        answers: [
            {text:"Linux",correct:false},
            {text:"Windows",correct:false},
            {text:"Android",correct:false},
            {text:"Photoshop",correct:true},
        ]
    },
];
const ques=document.getElementById("ques");
const ans=document.getElementById("ans");
const next=document.getElementById("next");
let currQuesIdx=0;
let score=0;
function quizz(){
    currQuesIdx=0;
    score=0;
    next.innerHTML="Next";
    console.log("starting showQues")
    showQues();
}

function reset() {
    next.style.display="none";
    while(ans.firstChild){
        ans.removeChild(ans.firstChild);
    }
}
function showQues(){
    reset();
    let currQues=questions[currQuesIdx];
    let quesNo=currQuesIdx+1;
    ques.innerHTML=quesNo+". "+currQues.question;
    currQues.answers.forEach(answer => {
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        ans.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",select);
    });
}
function select(e){
    console.log("Button-clicked");
    const sltbtn=e.target;
    const isCorrect=sltbtn.dataset.correct=="true";
    if(isCorrect){
        sltbtn.classList.add("correct");
        score++;
    }
    else{
        sltbtn.classList.add("incorrect");
    }
    Array.from(ans.children).forEach(button=>{
        if(button.dataset.correct=="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    next.style.display="block";
}
function showScore(){
    reset();
    ques.innerHTML= `You scored ${score} out of ${questions.length}!`;
    next.innerHTML="Play Again";
    next.style.display="block";
}
function handnext(){
    currQuesIdx++;
    if(currQuesIdx<questions.length){
        showQues();
    }
    else{
        showScore();
    }
}
next.addEventListener("click",()=>{
    if(currQuesIdx<questions.length){
        handnext();
    }
    else{
        quizz();
    }
})
quizz();