module.exports = {
    "env": {
      "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
      "ecmaFeatures": {
        "experimentalObjectRestSpread": true,
        "jsx": true
      },
      "sourceType": "module"
    },
    "plugins": [
      "react"
    ],
    "settings": {
      "react": {
        "pragma": "React",  // Pragma to use, default to "React"
      },
      "propWrapperFunctions": ["forbidExtraProps"] // The names of any functions used to wrap the propTypes object, such as `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
    },
    "rules": {
      "indent": ["error", 2, { "SwitchCase": 1 }],
      "linebreak-style": ["error", "unix"],
      "quotes": ["error", "single"],
      "semi": ["error", "never"],
      "react/jsx-uses-react": 2,
      "react/jsx-uses-vars": 2,
      "react/react-in-jsx-scope": 2,
      'no-console': 'off'
    },
    "globals": {
      "fetch": true,
      "__DEV__": true,
      "setInterval": true,
      "clearInterval": true,
      "console": true,
      "setTimeout": true,
      "setImmediate": true,
      "alert": true,
    },
    "parser": "babel-eslint"
  };