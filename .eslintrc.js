module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["plugin:react/recommended", "airbnb"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["eslint", "plugin:node/recommended", "react", "@typescript-eslint"],
  rules: {
    "new-cap": "off",
    "lines-around-comment": "off",
  },
};
