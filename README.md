# Virtualized list

This is a built-from-scratch virtualized list, built by me for learning and experimentig purposes

[Demo hosted on Vercel](https://react-virtualized-list-one.vercel.app/)

## User journey

The user lands on the page where he or she sees a virtual list.
The user can scroll the list.

## Infinite load

The list has the infinite load feature: when the user scrolls near the end of the list, it triggers a function that fetches more data and appends it to the list, giving the user the possibility to scroll almost inifitely.
This feature makes possibile to render more than 100k entries incrementelly, instead of loading everything at once.

## Technologies used

Here are the technologies being used

- [Next.js](https://nextjs.org/) as the core framework
- [React](https://react.dev/) as the rendering library
- [React DOM](https://github.com/facebook/react/tree/main/packages/react-dom): this is the `React` package that acts as a bridge between `React` itself and the `DOM`, so it makes possibile to render `React` components into a web page's [DOM](https://www.w3.org/TR/WD-DOM/introduction.html) by using `React`'s own `virtual DOM` and diffing algorithm
- [Redux Tooklit](https://redux-toolkit.js.org/) as the main tool to store a global state object across the entire application
- [Typescript](https://www.typescriptlang.org/) as the safety layer above JavaScript, to ensure less errors during development
- [Css modules](https://github.com/css-modules/css-modules) as the main tool to develop modular style with unique component-centered classes
- [Jest](https://jestjs.io/) as the main unit test framework

### Run locally

1. Run `npm i`to install all the dependencies
2. Once installted, you can run `npm run dev` to start the local server on `http://localhost`. The default port used will be 3000, otherwise another if it is already occupied by another process
3. Other useful commands:
   - create a production build (useful to check for any error before creating a commit): `npm run build`
   - run unit tests (written in [Jest](https://jestjs.io/)): `npm run test`
