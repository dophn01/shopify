module.exports = {
    env: {
        browser: true,
        es2020: true
    },
    parser: 'babel-eslint',
    extends: [
        'plugin:react/recommended',
        'airbnb'
    ],
    parserOptions: {
        ecmaFeartures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: [
        'react'
    ],
    rules: {
    }
}