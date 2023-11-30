module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    // "parserOptions": {
    //     "ecmaVersion": "latest",
    //     "parser": "@typescript-eslint/parser",
    //     "sourceType": "module"
    // },
    // "plugins": [
    //     "@typescript-eslint",
    //     "vue"
    // ],
    // "rules": {
    //   "semi": ["error", "always"]
    // }
};
