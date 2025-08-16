module.exports = {
    // Cấu hình parser mặc định (ESLint sử dụng Espree làm parser mặc định)
    // Nếu bạn dùng TypeScript, hãy cài đặt và sử dụng '@typescript-eslint/parser'
    parser: 'espree',

    parserOptions: {
        ecmaVersion: 'latest', // hoặc 2022, 2021, v.v. tùy phiên bản bạn cần
        sourceType: 'module', // 'script' hoặc 'module' tùy project
        ecmaFeatures: {
            jsx: true // Bật nếu bạn dùng JSX
        }
    },

    env: {
        browser: true, // Bật nếu chạy trong browser
        node: true,   // Bật nếu chạy trong Node.js
        es2022: true  // Tùy phiên bản ECMAScript bạn dùng
    },

    // Các rule ESLint cơ bản
    rules: {
        // Thêm các rule tùy chỉnh ở đây
        'semi': ['error', 'always'],
        'quotes': ['error', 'single']
    },

    // Nếu bạn dùng framework/library nào đó
    extends: [
        'eslint:recommended',
        // 'plugin:react/recommended', // Bỏ comment nếu dùng React
        // 'plugin:@typescript-eslint/recommended' // Bỏ comment nếu dùng TypeScript
    ]
};