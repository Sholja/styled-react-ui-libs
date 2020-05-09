# styled-react-ui-libs

React UI Components

## Quick start:

* Install with [npm](https://www.npmjs.com/): `npm install styled-react-ui-libs`
* Install with [yarn](https://yarnpkg.com/): `yarn add styled-react-ui-libs`

* Language: Javascript

* Packet manager: Yarn


## Project implementation:

### Application parts below are flagged like this:

* 📒 Folders
* 📑 Files

### Project architecture:

* 📒 src
  * 📒 assets
  * 📒 common
    * 📑 helpers.js
  * 📒 components
    * 📒 default-input
      * 📑 default-input.js
      * 📑 default-input.test.js
      * 📑 default-input-styles.js
      * 📑 default-input.stories.js
    * 📑 index.js
  * 📒 theme
    * 📒 styles
    * 📑 theme.js
* 📑 package.json
* 📑 README.md

## Setting up project:

* Install dependencies:
  `yarn install`

* Start project:
  `yarn start`

* Create a deployable build
  `yarn build`

* To build locally and test in other app:
  - Run `yarn run build:watch`.
  - Run `yarn link` - this will set the local build of the package to resolve to.
  - In the other project directory run `yarn link "styled-react-ui-libs"`.
  - After you are done, run `yarn unlink`.

* Trigger tests
  `yarn test`

* Build storybook for deployment
  `yarn build-storybook`

## Usage

You'll need to wrap your app in the exported theme provider to be able to use any components:

```
import { DefaultTheme, ThemeProvider, Text } from 'styled-react-ui-libs';

const App = () =>
  <ThemeProvider theme={DefaultTheme}>
    <Text>Hello MOP</Text>
  </ThemeProvider>

```

You can override or replace `DefaultTheme` with your own theme.

## Prettier and ESLint

Install Visual Studio Code extensions:

* [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
* [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)


## Authors and contributors

* **Eldin Soljic** - [Sholja](https://github.com/Sholja) - **Software Developer**

See also the list of [contributors](https://github.com/Sholja/styled-react-ui-libs/graphs/contributors) who participated in this project.

# Happy coding!
