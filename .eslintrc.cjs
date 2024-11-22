module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:react/recommended"],
  parser: "@typescript-eslint/parser",
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "import", "react-hooks"],
  root: true,
  rules: {
    quotes: ["error", "double"],
    // we want to force semicolons
    semi: ["error", "always"],
    // we use 2 spaces to indent our code
    indent: ["error", 2],
    // we want to avoid extraneous spaces
    "react-hooks/rules-of-hooks": "error", // For checking rules of hooks
    "react-hooks/exhaustive-deps": "warn", // For checking hook dependencies
  },
};
