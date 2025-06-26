# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathmatical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference
- **Bonus**: Have their initial theme preference checked using `prefers-color-scheme` and have any additional changes saved in the browser

### Screenshot

![](./images/Screenshot.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
  -Tailwindcss

## 📚 What I Learned

### 1. ♻️ Structuring Reusable CSS Layouts with TailwindCSS

I learned how to build modular and themeable layouts using utility-first classes. CSS custom properties made it easy to switch between themes by changing a single class on the `<body>`.

**Example:**

```html
<body class="theme1">
  <div class="h-screen w-full bg-[var(--bg-main)]"></div>
</body>
```

```css
.theme1 {
  --bg-main: hsl(223, 23%, 15%);
}
```

✂️ JavaScript Regex Methods for Input Handling
I used JavaScript regular expressions to validate and manipulate input expressions. This includes:

.replace() — for converting symbols like 'x' to '\*'

.split() — for breaking expressions into number-only parts

.test() — for input validation

```js
let expr = '234x456+45'

// Replace 'x' with '*'
let replaceExpr = expr.replace(/x/gi, '*') // "234*456+45"

// Split into numeric parts
let parts = expr.split(/[+\-*/]/) // ["234", "456", "45"]
```

### Continued development

🧭 Areas for Improvement
While building this project, I realized that writing code is only part of the process—thinking clearly, anticipating edge cases, and structuring logic is just as important. In future projects, I want to focus on improving both my technical implementation and problem-solving mindset.

### Useful resources

📚 Resources I Found Helpful
Throughout this project, I relied on several great resources to deepen my understanding and clarify confusing concepts. These tools helped me move faster and build smarter:

W3Schools – JavaScript RegExp
This helped me understand how to use .replace(), .test(), and .split() with regular expressions. The examples were beginner-friendly and practical.

Traversy Media – CSS Layout Crash Course
Brad Traversy's tutorials made flexbox, grid, and responsive layouts easier to understand. His clear visual explanations really helped me grasp layout structure better.

TailwindCSS Official Documentation
The official docs were extremely helpful for learning utility classes, theming, and best practices. I especially found the responsive and theming sections useful.

ChatGPT (OpenAI)
I used ChatGPT as a thinking and learning partner throughout this project. It helped clarify tricky logic, improve my code structure, and provide instant guidance with examples.

💡 I plan to keep revisiting these resources as I continue to grow—they helped me not just learn what to write, but also how to think about writing it well.

## Author

- Frontend Mentor - [@Boyutife](https://www.frontendmentor.io/profile/Boyutife)
- Twitter - [@Boluwatife_ven](https://www.twitter.com/boluwatife_ven)

## Acknowledgments

JMJ
