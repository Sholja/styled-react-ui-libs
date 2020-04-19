# mop-react-ui-components

React UI Components

## Project architecture:

* Framework: React

* Language: Javascript

* Packet manager: Yarn

## Project implementation:

### Application parts below are flagged like this:

* 📒 Folders
* 📑 Files

### Project arhitecture:

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

* Start project
  `yarn start`

* Create a deployable build
  `yarn build`

* To build locally and test in other app:
  - Run `yarn run build:watch`.
  - Run `yarn link` - this will set the local build of the package to resolve to.
  - In the other project directory run `yarn link "mop-react-ui-components"`.
  - After you are done, run `yarn unlink`.

* Trigger tests
  `yarn test`

* Build storybook for deployment
  `yarn build-storyboo`

## Usage

You'll need to wrap your app in the exported theme provider to be able to use any components:

```
import { DefaultTheme, ThemeProvider, Text } from 'mop-react-ui-components';

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

Should you want to impose specific Visual Studio Code editor configuration, you can do that in [settings.json](https://github.com/SwipeStoxGmbH/naga-card/tree/master/.vscode/settings.json)

## Localization support

The application supports multiple languages. **redux-i18n** package is being used for translation purposes.
Amongst other useful features, HTML translation is supported. Check out [redux-i18n](https://github.com/APSL/redux-i18n) for possible usage examples.

## Authors and contributors

* **Eldin Soljic** - [Sholja](https://github.com/Sholja) - **Software Developer**

See also the list of [contributors](https://github.com/SwipeStoxGmbH/naga-card/graphs/contributors) who participated in this project.

# Happy coding!
