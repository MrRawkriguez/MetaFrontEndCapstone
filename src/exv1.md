# Introduction to Jest

At this stage, you might be familiar with the concept of testing your code to make sure it's working as you intend it. You might also have come across some syntax of testing frameworks. But what about a language like JavaScript that has no built-in testing functionality? For JavaScript, you can use testing frameworks like Jest. Over the next few minutes, I am going to introduce you to the features of the Jest framework, code coverage, mocking, and snapshot testing. It is quite a mouthful. Let's get started.

JavaScript doesn't have built-in objects or methods that would allow for tests to be written. Therefore, many different libraries have been built to tackle the issue of testing. Some examples of these libraries include **Jasmine, Mocha, Karma, and qUnit**. Then there is the one that you will cover now, namely the **Jest testing framework**.

## What is Jest?

**Jest** is a JavaScript testing framework. It's often used for testing code like React, a JavaScript library maintained by Meta and a community of individual developers and companies. Besides plain JavaScript and React code, Jest allows you to test **Babel, TypeScript, Node, Angular, Vue, and various other frameworks**.

## Code Coverage

Jest also supports **code coverage**. Code coverage is a measure of what percentage of my code is covered by tests. If I say that I have an 80 percent code coverage, that means that only one-fifth of my entire code base is not covered by tests. But even 100 percent code coverage doesn't mean that you have tested for every conceivable expectation. It just means that there are some expectations tested for each line of my code. 

Still, code coverage is a handy tool to gauge the amount of my code base that's included in tests. The higher the code coverage, the lower the chance of having unidentified bugs. As a rule, the higher the percentage of code coverage, the lower the amount of time required to write new tests. This, however, depends on whether there are incomplete software requirements pending or if you are going to receive more requirements in the future.

## Mocking

Next, let's cover the concept of **mocking**. Mocking allows you to separate the code that you are testing from its related dependencies. In other words, you can use the mocking features to make sure that your unit testing is stand-alone. 

For example, you can test the front-end functionality of your web app by mocking the data as if it came back from a server when in fact it came from the client. Mocking is especially helpful because very often web applications are built by teams of developers. Some developers work on the backend of a feature and others work on the front end. This could result in bottlenecks.

Take an example where the team decides to build a new feature that lists the address book of users of the app on the front end. The actual user-related data for this feature would come from the server. But what if a back-end developer was a bit late in developing their part of the feature? Then a front-end developer would be stuck waiting for the back-end developer to complete their work before the front-end code can be built.

With mocking, you can avoid this bottleneck. **Mocks** allow you to pretend that the users are already there. The needed data comes from the mock rather than from the backend. This allows the front-end developers to finish their side of the new feature independently. In certain cases, developers can use mocking to ship features faster. Some libraries, such as **Sinon**, focus specifically on mocking. But the great thing about Jest is that you use its mock functions without any additional installations. In Jest, you use mocking by employing **Jest mock functions**.

## Testing Asynchronous Code

It's also easy to test asynchronous code in Jest. There are no difficult setups and tests are relatively easy to code even for newcomers to the framework.

## Snapshot Testing

Finally, Jest allows you to perform **snapshot testing**. Snapshot testing is used by developers to verify that there are no regressions in the DOM of our apps after some changes to the code base are made.

You're now familiar with the concept of testing your JavaScript code using the Jest testing framework. Great work.

# Writing Tests with Jest

## Installing and Setting Up Jest

In this guide, you'll explore how to install the necessary packages to test your JavaScript code using the Jest framework, as well as how to set up a test.

### Step 1: Create a Function to Test

First, you'll need a function to test. Let's say you want to write a function that takes a value and adds five to it. Start by creating a new file named `addFive.js`. The code for the `addFive` function will look like this:

```javascript
function addFive(value) {
    return value + 5;
}

module.exports = addFive;
```

This simple function returns the input value plus five. The `module.exports` line is added to export this function so that it can be used by other files in this project.

### Step 2: Check Your System for Node.js and npm

Before proceeding, ensure that Node.js and npm are installed on your system. In the terminal or command prompt, type the following commands:

```sh
node --version
```

If Node.js is installed, it will return a version number (e.g., `v16.15.0`).

Then check for npm:

```sh
npm --version
```

If npm is installed, it will return a version number (e.g., `8.5.0`).

### Step 3: Install Jest

Next, check if Jest is installed:

```sh
jest --version
```

If Jest is not installed, you'll get a message like "command jest not found." To install Jest for your project, type:

```sh
npm init -y
```

This command will create a `package.json` file. The `-y` flag automatically answers "yes" to all the questions that the `init` command asks during installation.

Then, install Jest locally:

```sh
npm install --save jest
```

After a few moments, your `package.json` file will be updated with the addition of the Jest testing library. You will also have a folder called `node_modules`, which is where the code for all the modules in this project is stored.

### Step 4: Set Up Your Test Script

In the `package.json` file, make the following changes to the script section:

```json
"scripts": {
  "test": "jest"
}
```

Now, when you run the command:

```sh
npm run test
```

it will execute the Jest command in this folder.

### Step 5: Create a Test File

To test your `addFive.js` file, create a new file named `addFive.test.js`. In the naming convention used, add `.test` just before the `.js` section of the file's name.

Import the exported `addFive` function by typing:

```javascript
const addFive = require('./addFive');
```

### Step 6: Write Your First Test

Use the Jest `test` method to define a test case. The `test` method takes two parameters: a string describing the test and a function containing the test logic.

```javascript
test('returns the number plus five', () => {
    expect(addFive(5)).toBe(10);
});
```

Save the file and run the test by executing:

```sh
npm run test
```

You should see output indicating whether the test passed or failed.

### Summary

In this guide, you learned how to:
- Install Node.js, npm, and Jest.
- Set up a JavaScript function to test.
- Write a test for that function using Jest.
- Run the test and interpret the results.

# Why React Testing Library

## Task
As the developer for Little Lemon Restaurant application, how could you guarantee that the app you created works as intended? Well, you may choose to rely on your methodical ability to manually interact with all the different parts of the application yourself, ensuring the app is fully functional. However, manually testing every new incremental change you'd like to make is likely to be tedious, error-prone, and time-consuming, especially as your app grows in complexity. That's where automation tests come in. In this video, you will learn how to write tests properly for your React components. You will achieve this by exploring why testing is important, and best practices when creating tests. Being introduced to the tools Jest and React Testing Library for structuring your tests. As well as working through a practical example of testing a component using these tools.

Just like factories perform testing of the products they build to ensure that they work as expected, developers need to do the same with their code. A well-designed suite of automation tests is particularly effective in allowing you to discover defects or bugs before delivery to the client. In doing so, testing is important for guaranteeing the quality of the software you develop. Further, by catching bugs before they find their way into a live application, testing reduces the number of user complaints, and can ultimately save an organization time and money.

Now that you have an idea of why testing is important, what are the best practices you need to keep in mind when writing your tests? The first is that your tests need to avoid including implementation details of your components. **React is just a tool, and your final users will have no notion that React exists at all. Rather than dealing with instances of rendered React components, your tests should work with actual DOM nodes.** Secondly, the more you test resembles the way your software is used, the more confidence they can give you. Finally, you also want your tests to be maintainable in the long term. As long as you're not changing functionality, any changes in the implementation of the component won't break your tests and slow you and your team down.

Now, let's explore the two tools that React endorses to structure your tests, **Jest and the React Testing Library**.

### Jest
Jest is a JavaScript test runner that lets you access an artificial DOM called JSDOM. While JSDOM is only an approximation of how the browser works, it is often good enough for testing React components. Jest provides a good iteration speed combined with powerful features like mocking modules, so you can have more control over how the code executes. Recall that mocking refers to something made as an imitation, and enables you to replace complex functions from your code with others that are simpler and simulate the same behavior. Mocking features can be used to make sure that your unit testing is standalone. If you'd like to revisit the concept of mocking in greater depth, you can check out the additional resources at the end of this lesson.

### React Testing Library
The second tool is React Testing Library, which is a set of utilities that let you test React components without relying on their implementation details. **React Testing Library has been designed to fulfill all the best practices highlighted before**, so that you get a well-configured testing environment out of the box, and are able to focus on the business logic your tests need to run assertions on.

With the theory covered, let's go ahead and implement a test from scratch using **Jest and React Testing Library**. When you start a new project with Create React app, you already get both Jest and React testing library pre-installed by default. Plus, both tools are already pre-configured, and there's an example test file in your root folder called `app.test.js`.

Imagine that Little Lemon has made an agreement with a popular restaurant aggregator to have its webpage included as a new URL in its listing. In the `app.js` file, the app component renders a link in the page that points to Little Lemon's webpage. Let's go through the test I created to automatically verify that the link is always present.

### Test Example

```javascript
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders a link that points to Little Lemon webpage', () => {
  render(<App />);
  const linkElement = screen.getByText('Little Lemon Restaurant');
  expect(linkElement).toBeInTheDocument();
});
```

The first thing I need to do is to import both `render` and `screen` from the React Testing Library. The `render` function is used to render the component you would like to test and perform assertions against. Because querying the entire `document.body` is very common, **React Testing Library also exports a `screen` object, which is a reference to that object, and has every query prebound to it**, meaning that it will automatically ask the whole document when running a search.

Now, to wrap the test scenario, **Jest provides the global `test` function**, which takes a text description as the first argument, and a function to compose all the steps your test needs to go through as a second argument. This function does not need to be imported since Jest injects it automatically in all your test files.

The first step is to render the app component in the artificial DOM environment. Secondly, I used the `screen` object to create a query against the `document.body`. In this case, I am using the `getByText` utility to ask the body tag of the document if it can find an element inside with a string called "Little Lemon Restaurant," and store the result of that finding in the `linkElement` object. If the search is successful, `getByText` will return the found element. Otherwise, it will return null.

Finally, to complete the test, I perform an assertion asking whether the `linkElement` from the query above is present in the document, meaning whether it's currently visible on the screen. For that, the global `expect` function is used. This is another utility that Jest incorporates globally without the need for an explicit import. The `expect` function receives the result of a query and appends the specific matcher. In this example, the matcher refers to an element visible in the whole document.

### Output Example
```bash
PASS src/App.test.js
✓ renders a link that points to Little Lemon webpage (100ms)
```

If I run the test, it fails. Let's check the output logs to try to understand what has gone wrong. It states that it was unable to find an element with a text, "Little Lemon Restaurant." Interesting. Let's go ahead and check the `app.js` component again. I had made a mistake and typed **orange** instead of **lemon**, something that the test was able to catch. That's exactly where you want to see when a failure occurs.

Also, you might have noticed how straightforward it is to write your test assertions. **Everything you see in code translates nicely to how a real user would interact with your app and responds with the behavior that you would expect.**

Let's run the test again now that the issue is fixed.

Great. The test passes and **Little Lemon's online exposure is about to grow even more.** 

In addition to the importance of testing and testing best practices, you have now learned how to test your React components using **Jest and the React Testing Library**. Stay tuned, because soon you will discover how easy it is to write more complex tests.

# Writing the First Test for Your Form

## Task

Imagine that The Little Lemon Restaurant started receiving a few bad reviews from its customers. The problem is that they could not figure out what was wrong and act accordingly. Since users only provided a low numerical score, they skipped the part of providing additional feedback, which prevented them from passing critical information to the chefs. 

In order to solve that, they've decided to make the comment text box mandatory whenever the score provided by users is lower than five on a scale of ten. Additionally, they would like to shield this new logic with automated tests so whenever any changes are performed, the test suite will run and catch any potential errors.

The application consists of a feedback form containing a range input for a numerical score ranging from zero to ten and a text box for additional comments. To satisfy the requirements, the submit button will be disabled if the score is lower than five, forcing users to add a comment of at least ten characters.

Now let's examine the code.

## Step 1

The entry point is the `App.js` component where a `FeedbackForm` component is rendered. This component receives an `onSubmit` prop, which is a function that contains the form values as parameters so that the parent `App` component can perform the submission.

```javascript
// App.js

import "./App.css";
import FeedbackForm from "./FeedbackForm";

function App() {
  const handleSubmit = () => {
    console.log("Form submitted!");
  };

  return (
    <div className="App">
      <FeedbackForm onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
```

## Step 2

The `FeedbackForm` represents an HTML form and includes two controlled components via local state: a range input and a text area. There are two key pieces to highlight in this component:

1. **Button disabled logic**: `isDisabled` is the variable that controls whether the submit button is disabled. It is set to `true` if the score is lower than five and the comment has fewer than ten characters.

2. **Handle submit function**: This function is hooked into the form's `onSubmit` attribute. When the submit button is clicked, the `handleSubmit` function is called, which in turn calls the prop function provided by the parent with the corresponding form values.

```javascript
// FeedbackForm.js

import { useState } from "react";

function FeedbackForm({ onSubmit }) {
  const [score, setScore] = useState("10");
  const [comment, setComment] = useState("");

  const isDisabled = Number(score) < 5 && comment.length <= 10;

  const textAreaPlaceholder = isDisabled
    ? "Please provide a comment explaining why the experience was not good. Minimum length is 10 characters."
    : "Optional feedback";

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ score, comment });
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Feedback form</h2>
          <div className="Field">
            <label>Score: {score} ⭐</label>
            <input
              value={score}
              onChange={(e) => setScore(e.target.value)}
              type="range"
              min="0"
              max="10"
            />
          </div>
          <div className="Field">
            <label>Comments:</label>
            <textarea
              placeholder={textAreaPlaceholder}
              name="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
          <button disabled={isDisabled} type="submit">
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default FeedbackForm;
```

## Step 3: Writing the Test

The `FeedbackForm` component contains all the business logic of interest. Let's go ahead and write a test for the submission logic. The convention for test files is to name them with the `.test.js` extension so that Jest, the test runner, automatically picks them up.

The test scenario checks that users are prevented from submitting the form if the score is lower than five and the comment is either missing or too short.

```javascript
// App.test.js

import { fireEvent, render, screen } from "@testing-library/react";
import FeedbackForm from "./FeedbackForm";

describe("Feedback Form", () => {
  test("Submission is disabled if score is lower than 5 and there is no feedback", () => {
    const handleSubmit = jest.fn();

    render(<FeedbackForm onSubmit={handleSubmit} />);

    const rangeInput = screen.getByLabelText(/Score:/);
    fireEvent.change(rangeInput, { target: { value: "4" } });

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    expect(handleSubmit).not.toHaveBeenCalled();
    expect(submitButton).toHaveAttribute("disabled");
  });
});
```

### Explanation of the Test

1. **Mock Function**: The test begins by creating a new mock function using `jest.fn()`. A mock function allows you to track how a particular function is called by external code. In this case, it tracks when the `FeedbackForm` calls the `onSubmit` prop.

2. **Render the Component**: The `FeedbackForm` is rendered with the mock function passed as the `onSubmit` prop.

3. **Locate and Update Input**: The range input is located using `screen.getByLabelText`, which searches for a label tag containing the text "Score" and returns the input element associated with that label. The `fireEvent.change` method is then used to simulate updating the input with a new value of `4`.

4. **Button Click Simulation**: The submit button is located using `screen.getByRole("button")`, which queries for the button role. The `fireEvent.click` method simulates the button click.

5. **Assertions**: The final two assertions check that:
   - The `handleSubmit` function has **not** been called.
   - The submit button is disabled, using the `toHaveAttribute` matcher.

## Conclusion

With the test in place, you have ensured that the form behaves correctly by preventing submission unless users provide the necessary feedback. By running this test as part of the test suite, you can catch any potential errors in future updates and ensure the business logic remains intact. 