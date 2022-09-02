module.exports = {
    'env': {
        'commonjs': true,
        'es2021': true,
        'node': true,
    },
    'extends': 'eslint:recommended',
    'parserOptions': {
        'ecmaVersion': 12
    },
    'rules': {
        'no-console': 1,
        'indent': [
            'warn',
            4,
            { 'SwitchCase': 1 }
        ],
        'linebreak-style': [
            'error',
            'windows'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        'eol-last': [
            'error',
            'always'
        ],
        'object-curly-spacing': [
            'error',
            'always'
        ],
        'arrow-spacing': [
            'error',
            {
                'before': true,
                'after': true
            }
        ],
        'key-spacing': [
            'warn',
            {
                'beforeColon': false,
                'afterColon': true
            }
        ],
        'no-unused-vars': [
            'warn', {
                'vars': 'all',
                'args': 'none',
                'ignoreRestSiblings': false
            }
        ],
        'keyword-spacing': [
            'error',
            {
                'after': true,
                'before': true,
            }
        ],
        'no-trailing-spaces': [
            'error',
            {
                'skipBlankLines': false,
                'ignoreComments': false
            }
        ],
        'prefer-const': [
            'error',
            {
                'destructuring': 'all',
                'ignoreReadBeforeAssign': false
            }
        ],
        'semi-spacing': [
            'error',
            {
                'before': false,
                'after': true,
            }
        ],
        'no-var': [
            'error'
        ],
        'object-shorthand': ['error', 'always'],
        'no-shadow': ['error', { 'builtinGlobals': false, 'hoist': 'functions', 'allow': [] }],
    }
};
