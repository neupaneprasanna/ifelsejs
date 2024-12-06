# JavaScript Conditional Statements Practice Set

Welcome to the **JavaScript Conditional Statements Practice Set**, a hands-on exercise platform designed to enhance your understanding of JavaScript's conditional logic. This project introduces progressively challenging questions, focusing on essential concepts. The solutions for each question dynamically appear on the main page (**home.html**) for seamless practice and review.

## Structure

- **Daily Updates**: Every day, a new question will be added until the set includes a total of **10 questions**.
- **Questions Page**: Each question links to a dedicated HTML file with the problem statement and an interactive JavaScript environment for testing your solutions.
- **Main Page (home.html)**: Displays the entire question set and integrates search functionality for ease of navigation.

## Current Question Topics

1. Equality check between two integers.
2. Determine if a number is even or odd.
3. Check whether a number is positive or negative.
4. Identify leap years.
5. Verify voting eligibility based on age.
6. Categorize numbers based on magnitude (positive, negative, or zero).
7. Classify height ranges.
8. Find the largest of three numbers.
9. Determine the quadrant of a point in the XY coordinate system.
10. Temperature conversion (Celsius to Fahrenheit or vice versa).

## Features

- **Search Functionality**: Quickly find questions by entering keywords in the search bar. The list dynamically updates as you type.
- **Interactive Practice**: Each question has an accompanying interactive environment to test your JavaScript code.
- **Beginner-Friendly**: Focuses on simple and practical scenarios to build a strong foundation in conditional statements.
- **Progression**: Once you complete these 10 questions, you can move on to more advanced concepts, such as the **ternary operator**.

## Code Examples

### Example 1: Check if a Number is Even or Odd
```javascript
function checkEvenOdd(number) {
  if (number % 2 === 0) {
    console.log(`${number} is even.`);
  } else {
    console.log(`${number} is odd.`);
  }
}

checkEvenOdd(5); // Output: 5 is odd.
checkEvenOdd(10); // Output: 10 is even.
```

### Example 2: Determine Leap Year
```javascript
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`${year} is a leap year.`);
  } else {
    console.log(`${year} is not a leap year.`);
  }
}

isLeapYear(2024); // Output: 2024 is a leap year.
isLeapYear(2023); // Output: 2023 is not a leap year.
```

### Example 3: Search Functionality Code
The following code powers the search functionality in **home.html**:
```javascript
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search");
  const questionItems = document.querySelectorAll(".question-item");

  searchInput.addEventListener("input", function () {
    const searchText = searchInput.value.toLowerCase();

    questionItems.forEach((item) => {
      const questionText = item.textContent.toLowerCase();

      if (questionText.includes(searchText)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});
```

## Getting Started

1. Clone or download this repository.
2. Open the `home.html` file in your browser to explore the question set.
3. Navigate to individual questions to solve them and see the results dynamically on the main page.

## Future Enhancements

- **Ternary Operator Practice**: After mastering these conditional statement questions, a new section on ternary operators will be introduced.
- **Intermediate Challenges**: Additional problem sets covering nested conditionals and complex logical scenarios.
- **Responsive Design**: Improved UI for mobile and tablet users.

## Contribution

We welcome contributions! If you have ideas for new questions or enhancements, feel free to submit a pull request or open an issue.

---

Happy coding, and enjoy sharpening your JavaScript skills!


