const questionBtn = document.querySelectorAll("#question-btn")
const answerList = document.querySelectorAll("#answer-list")
const arrowDown = document.querySelectorAll("#arrow-down")
const questionCont = document.querySelectorAll("#question-container") 

let currentQuestion
let checkingQuestion

let currentAnswer
let checkingAnswer

let currentArrow
let checkingArrow

let currentCont
let checkingCont

let mobileImage = document.querySelectorAll("#mobile-image")

let openQuestions = 0
let closedQuestions = 0
let openOutcome
let closedOutcome




document.addEventListener("click", e => {
  // QUESTION
  for (let i = 0; i < mobileImage.length; i++ ) {
    mobileImage[i].classList.add("active")
  }

  currentQuestion = e.target.closest("#question-btn");
  currentQuestion.classList.toggle("active");

  checkingQuestion = document.querySelectorAll("#question-btn.active")

  imageToggle(checkingQuestion, questionBtn)
  
  elementChecker(checkingQuestion, questionBtn, currentQuestion)

  for (let j = 0; j < questionBtn.length; j++) {
    if (currentQuestion === questionBtn[j]) {
      // ANSWER
      currentAnswer = answerList[j]
      currentAnswer.classList.toggle("active")

      checkingAnswer = document.querySelectorAll("#answer-list.active")

      elementChecker(checkingAnswer, answerList, currentAnswer)
      
      // ARROW
      currentArrow = arrowDown[j]
      currentArrow.classList.toggle("active")

      checkingArrow = document.querySelectorAll("#arrow-down.active")

      elementChecker(checkingArrow, arrowDown, currentArrow)

      // CONTAINER
      currentCont = questionCont[j]
      currentCont.classList.toggle("active")

      checkingCont = document.querySelectorAll("#question-container.active")

      elementChecker(checkingCont, questionCont, currentCont)
    }  
  }
})

// The elementChecker function will make sure that only one question/answer element is open at a time. 
function elementChecker (checkingElement, originalElement, currentElement) {
  checkingElement.forEach(originalElement => {
    if (originalElement === currentElement ) {
      return
    }

    else {
      originalElement.classList.remove("active")
    }
  })
}

// The imageToggle function will toggle (go up and down) the mobileImage base on the status of the questions. 
function imageToggle (checkingElement, originalElement) {
  for (let k = 0; k < originalElement.length; k++) {
    for (let v = 0; v < originalElement.length; v++) {
      if (checkingElement[k] === originalElement[v]){
        checkingElement += 1
        openOutcome = openQuestions
      }
      else if (checkingElement[k] !== originalElement[v]) {
        closedQuestions +=1;
        closedOutcome = closedQuestions
      }
    }
  }

  openQuestions = 0
  closedQuestions = 0
  // console.log(openQuestions)
  // console.log(openOutcome)
  // console.log(closedQuestions)
  // console.log(closedOutcome)

  if (closedOutcome === 25) {
    for (let u = 0; u < mobileImage.length; u++ ) {
      mobileImage[u].classList.remove("active")
    }
    return
  }
}