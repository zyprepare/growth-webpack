module.exports = {
  root: true,
  parser: 'babel-eslint',
  "plugins": [
    // "react"
  ],
  "env": {
    "browser": true,
    "node": true
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "globals": {
    "$": true,
  },
  // "extends": "eslint-config-airbnb",
  "extends": "eslint:recommended",
  "rules": {
    "camelcase": 2,
    "curly": 2,
    "brace-style": [2, "1tbs"],
    "quotes": [2, "single"],
    "jsx-quotes": 0,
    "semi": "off",
    "no-plusplus": 0,
    "func-names": 0,
    "prefer-arrow-callback": 0,
    "class-methods-use-this": "off"
  }
}
