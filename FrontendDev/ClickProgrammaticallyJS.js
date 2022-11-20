// Clicking Programmatically //

// 1. Programmers are lazy
// 2. Lazy Loading
// 3. CSS Attribute Selectors
// 4. Clicking a button from JS

const btnTag = document.querySelector(".btn");

btnTag.addEventListener("click", () => {
    console.log("Hello you click me. ");
})
// or
// you can click with these code in console , so you should be test
btnTag.click();

// CSS Attribute Selectors // In css
// <a> elements with title attribute 
//  a[title] {
//     color: yellow;
//  }

// Example: you can test in console,
//     document.querySelector("a[title]");

 // <a> elements with an href matching "http://example.org"
//  a[href="http://example.org"] {
//     color: green;
//  }
 // <a> elements with an href containing "example"
//  a[href*="example"] {
//     font-size: 2em;
//  }
 // <a> elements with an href ending ".org"
//  a[href$=".org"] {
//     font-style: italic;
//  }
 // <a> elements whose class attribute contain the word "logo" 
//  a[class-="logo"] {
//     padding: 2px;
//  }
