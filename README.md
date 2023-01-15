# TASK DESCRIPTION

Given Endpoints
endpoint_1: "http://www.randomnumberapi.com/api/v1.0/random",
endpoint_2: "https://dog.ceo/api/breeds/image/random"

Task:

1. Write a react component "ArticleTeasers". It should be a div with classname "ab-testing". This div should contain a headline with text "article teasers" and a list with classname "article-teasers-list".
2. Write another react component "ArticleTeaser". It should be a list item with classname "article-teaser".
3. Fetch number of teasers from endpoint_1. Pass URL arguments min = 0, max = 20, count = 1.
4. Use the returned number n to render ArticleTeaser n times inside ArticleTeasers.
5. For each ArticleTeaser, fetch the image url from endpoint_2 and display the image inside the ArticleTeaser.

## Expected result in the DOM:

<div class="ab-testing">
    <h1>article teasers</h1>
    <ul class="article-teasers-list">
        <li class="article-teaser">
            <img src="imageURL_1" />
        </li>
        <li class="article-teaser">
            <img src="imageURL_2" />
        </li>
        [...]
        <li class="article-teaser">
            <img src="imageURL_n" />
        </li>
    </ul>
</div>
------------------------------

Requirements:

1. Use TypeScript
2. Make sure your code handles API failures.

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
