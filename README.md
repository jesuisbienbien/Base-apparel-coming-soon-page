# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![screenshot](images/screenshot.png)

### Links

- Solution URL: [View codes](https://github.com/jesuisbienbien/Base-apparel-coming-soon-page)
- Live Site URL: [View Live site](https://jesuisbienbien.github.io/Base-apparel-coming-soon-page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla Javascript

### What I learned

_styling submit button on top of the input using absolute position_

```css
.email-input-wrapper {
  position: relative;
}
button {
  position: absolute;
  top: 14px;
  right: 0;
  background: linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%));
  border: none;
  border-radius: 5rem;
  padding: 1.1rem 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
```

### Continued development

### Useful resources

- [w3resource](https://www.w3resource.com/javascript/form/email-validation.php) - This helps me understand how validate an email

## Author

- Github - [Nguyen Nguyen](https://github.com/jesuisbienbien)
- Frontend Mentor - [@jesuisbienbien](https://www.frontendmentor.io/profile/jesuisbienbien)

## Acknowledgments
