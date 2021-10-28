React

-the only place where you can assign this.state is the constructor. Use this.setState()

// Correct
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));

Extension fo VS

-auto import (add js, jsx in preferences)
-auto rename tag
-braket pair colorizer 2
-ES lint
-JavaScript Debugger (Nightly)
-Material Icon theme
-npm Intellisense - christian kohler
-Path Intellisense
-Prettier - Code formatter

Tools & features
 node --version
v14.18.1
 npm --version
6.14.15
npx create-react-app <prj_name> --use-npm
npm install semantic-ui-react semantic-ui-css 

"semantic-ui-css": "^2.4.1",
  "semantic-ui-react": "^2.0.4",

-npm install cuid
-npm install react-router-dom (5.2.0)


Project
-open in vs by typing <<code .>>



