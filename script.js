class Quiz{
    constructor(){
        this.question = document.getElementById('question');
        this.buttonContainer = document.getElementById('button-container');
    }

    request(){
        fetch('questions.json')
            .then(req => req.json())
            .then(value =>{
                const setOfQuestion = value.questions[0].question;

                const question = value.questions[0].options;

                const answer = value.questions[0].answer;

                const trivia = value.questions[0].trivia

                this.showQuestion(setOfQuestion, question, answer, trivia)
            })
    }
    showQuestion(indexQuestion, question, answer, trivia){
        this.question.innerHTML = indexQuestion;

        for(let i = 0; i<question.length; i++){
            if(question[i] === answer){
                this.buttonContainer.insertAdjacentHTML('beforeend', `<button class="choices-btn" id="correct" onclick="showNext('${question[i]}', '${answer}',  '${trivia}')"> ${question[i]}</button>`);
                continue;
            }
                this.buttonContainer.insertAdjacentHTML('beforeend', `<button class="choices-btn" onclick="showNext('${question[i]}', '${answer}',  '${trivia}')"> ${question[i]}</button>`)
        }

    }
}
function showNext(isChoice, answer, trivia){
    let score = 0;
    if(isChoice === answer){
        score += 1;
        document.getElementById('p').insertAdjacentHTML('beforeend', `<span id="result">Correct!: </span>` + trivia)
        correct.style.border = 'solid green'
        result.style.color = 'green'
    }
    else{
        document.getElementById('p').insertAdjacentHTML('beforeend', `<span id="result">Wrong!: </span>` + trivia)
        result.style.color = 'red'
    }
    next.style.display = 'block' 
}

let makeQuiz = new Quiz();

makeQuiz.request();