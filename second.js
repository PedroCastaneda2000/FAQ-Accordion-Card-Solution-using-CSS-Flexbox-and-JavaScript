// const detailsCont = document.querySelectorAll("#details-container")
// const questionSum = document.querySelectorAll("#question-summary") 
// const questionContent = document.querySelectorAll("#question-content")
// const arrowDown = document.querySelectorAll("#arrow-down")

const detailsCont = document.querySelectorAll("[data-details-container]")
const questionSum = document.querySelectorAll("[data-question-summary]") 
const questionContent = document.querySelectorAll("[data-question-content]")
const arrowDown = document.querySelectorAll("[data-arrow-down]")

let currentDetails
let checkingDetails

let currentSum
let checkingSum

let currentQuestion
let checkingQuestion

let mobileImage = document.querySelectorAll("[data-mobile-image]")

let openQuestions = 0
let closedQuestions = 0
let openOutcome
let closedOutcome

document.addEventListener("click", e => {
  for (let i = 0; i < mobileImage.length; i++ ) {
    mobileImage[i].classList.add("active")
  }
  // Details
  currentDetails = e.target.closest("[data-details-container]");
  currentDetails.classList.toggle("active");
  checkingDetails = document.querySelectorAll("[data-details-container].active")

  elementChecker(checkingDetails, detailsCont, currentDetails)
  

  for (let j = 0; j < detailsCont.length; j++) {
    if (currentDetails === detailsCont[j]) {
      //SUMMARY
      currentSum = questionSum[j]
      currentSum.classList.add("active")
      checkingSum = document.querySelectorAll("[data-question-summary].active")

      elementChecker(checkingSum, questionSum, currentSum)
      
      // QUESTIONS
      currentQuestion = questionContent[j]
      currentQuestion.classList.add("active")
      checkingQuestion = document.querySelectorAll("[data-question-content].active")

      elementChecker(checkingQuestion, questionSum, currentQuestion)

      // ARROW
      currentArrow = arrowDown[j]
      currentArrow.classList.add("active")
      checkingArrow = document.querySelectorAll("[data-arrow-down].active")

      elementChecker(checkingArrow, arrowDown, currentArrow)

      elementToggle(checkingDetails, detailsCont, currentDetails)
    }
  }
})

// The elementChecker function will make sure that only one question/answer element is open at a time. 
function elementChecker (checkingElement, originalElement, currentElement) {
  checkingElement.forEach(originalElement => {
    if (originalElement === currentElement) {
      return
    }

    else {
      originalElement.classList.remove("active")
      originalElement.open = false

    }
  })
}

// The elementToggle function will toggle (go up and down) the mobileImage and other elements base on the status of the questions. 
function elementToggle (checkingElement, originalElement, currentElement) {
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
      currentSum.classList.remove("active")
      currentQuestion.classList.remove("active")
      currentArrow.classList.remove("active")

      currentElement.classList.remove("active")
      currentElement.open = false
    }
    return
  }
}