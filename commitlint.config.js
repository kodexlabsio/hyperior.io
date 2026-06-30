export default {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'scope-case': [2, 'always', 'lower-case'],
        'subject-case': [2, 'always', ['sentence-case']],
        'scope-enum': [
            2,
            'always',
            [
                'api',
                'ci',
                'config',
                'deps-dev',
                'deps',
                'footer',
                'header',
                'home',
                'layout',
                'metadata',
                'style',
                'utils',
            ],
        ],
    },
};
