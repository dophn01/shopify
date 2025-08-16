// .eslintrc.js
module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es2022: true
    },
    parser: '@typescript-eslint/parser', // Sử dụng parser dạng string thay vì require()
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        },
        project: './tsconfig.json'
    },
    plugins: [
        '@typescript-eslint',
        'react',
        'react-hooks',
        'next'
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'next/core-web-vitals', // Quan trọng cho Next.js
        'plugin:prettier/recommended' // Tích hợp Prettier
    ],
    rules: {
        // Next.js specific rules
        '@next/next/no-html-link-for-pages': 'error',
        '@next/next/no-sync-scripts': 'warn',

        // React rules
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',

        // TypeScript rules
        '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
        '@typescript-eslint/no-explicit-any': 'warn',

        // Common fixes
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',

        // Ngăn chặn lỗi serialization
        'no-restricted-syntax': [
            'error',
            {
                selector: 'Property[key.name="parse"]',
                message: 'Không sử dụng key "parse" trong objects để tránh lỗi serialization'
            }
        ]
    },
    settings: {
        react: {
            version: 'detect'
        },
        next: {
            rootDir: '.' // Đặt thư mục gốc của Next.js
        }
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                '@typescript-eslint/explicit-module-boundary-types': 'off',
                '@typescript-eslint/ban-types': [
                    'error',
                    {
                        extendDefaults: true,
                        types: {
                            '{}': false
                        }
                    }
                ]
            }
        },
        {
            files: ['app/**/*.js', 'app/**/*.ts', 'app/**/*.tsx'],
            rules: {
                // Tắt cảnh báo cho các hàm trong Route Handlers
                '@typescript-eslint/no-unused-vars': 'off',
                'no-restricted-syntax': 'off'
            }
        }
    ]
};