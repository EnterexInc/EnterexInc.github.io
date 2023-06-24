const quizData = [
    {
        question: "What is my favorite drink?",
        a: "Caramel Macchiato",
        b: "Iced Matcha Latte",
        c: "White Mocha Frappucino",
        d: "Americano",
        correct: "b",
    },
    {
        question: "Who is my favorite artist?",
        a: "Ichika Nito",
        b: "Marcin",
        c: "Tim Henson",
        d: "Manuel Gardner Fernandes",
        correct: "c",
    },
    {
        question: "What is my favorite multiplayer game?",
        a: "Apex Legends",
        b: "Rocket League",
        c: "Runescape",
        d: "VRChat",
        correct: "c",
    },
    {
        question: "Who is my favorite legend in Apex Legends?",
        a: "Horizon",
        b: "Seer",
        c: "Wraith",
        d: "Pathfinder",
        correct: "d",
    },
    {
        question: "When is my birthday?",
        a: "March",
        b: "June",
        c: "August",
        d: "December",
        correct: "c",
    },
    {
        question: "Who is my favorite streamer?",
        a: "BoxBox",
        b: "xQc",
        c: "iiTzTimmy",
        d: "Euriece",
        correct: "b",
    },
    {
        question: "Who is my favorite champion in League of Legends",
        a: "Sett",
        b: "Nidalee",
        c: "Camille",
        d: "Riven",
        correct: "d",
    },
    {
        question: "Who is my celebrity crush?",
        a: "Kylie Jenner",
        b: "Madison Beer",
        c: "Kate Upton",
        d: "Akase Akari",
        correct: "b",
    },
    {
        question: "Which instrument do I not play?",
        a: "Piano / Keyboard",
        b: "Guitar",
        c: "Violin",
        d: "Harp",
        correct: "d",
    },
    {
        question: "What is my favorite song?",
        a: "Polyphia - Playing God",
        b: "Casey Edwards - Bury The Light",
        c: "Æther Realm - The Sun, The Moon, The Star",
        d: "Natori - Overdose",
        correct: "a",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})