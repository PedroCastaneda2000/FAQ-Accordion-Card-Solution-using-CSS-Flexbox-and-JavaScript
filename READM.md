# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)

## Overview

In this challenge, the user would develope an Accordion Site with a functional dropdown menu using JavaScript.

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Links

- Solution URL: [https://github.com/pgc0004/FAQ-Accordion-Card-Solution-using-CSS-Flexbox-and-JavaScript.git]
- Live Site URL: [https://faq-accordion-card-solution-using-css.netlify.app]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

I learned so many new commands and concepts during this challenge. Most of the knowledge came from my JavaScript file as this was my second attempt with the language. I learned how to properly implement for loops to enter an array and take out the correct element inside it. Then I learned to generalize my code by creating functions that were used multiple times for various tasks.

I began to use for loops to go through the arrays (list of questions and answers) and determine which question

I am proud of this CSS because I started to use variables with numerical values to globalize a parameter.

```css
#mobile-image.active {
  transition: all 0.5s ease;
  /* bottom: calc(68.5% + 10%); */
  bottom: calc(var(--image-woman-bottom) + 2.75%);
}

#mobile-image.active:last-child {
  transition: all 0.5s ease;
  /* bottom: calc(63.5% + 10%); */
  bottom: calc(var(--image-pattern-bottom) + 2.75%);
}
```

I am proud of my entire JavaScript file but the the imageToggle function challenged me to study the arrays of the originalElement and the checkingElement to drop the image down when no question is open vice versa.

```js
function imageToggle(checkingElement, originalElement) {
  for (let k = 0; k < originalElement.length; k++) {
    for (let v = 0; v < originalElement.length; v++) {
      if (checkingElement[k] === originalElement[v]) {
        checkingElement += 1;
        openOutcome = openQuestions;
      } else if (checkingElement[k] !== originalElement[v]) {
        closedQuestions += 1;
        closedOutcome = closedQuestions;
      }
    }
  }
}
```

### Continued development

This challenge was amazing in using for loops to manipulate the DOM and get the necessary outcome. I am going to continue to study JavaScript and complete more challenged to improve my skills and ability. Great challenge to use your problem-solving skills.
