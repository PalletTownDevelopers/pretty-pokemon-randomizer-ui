module.exports = {
    env: {
        node: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:vue/vue3-recommended",
        "@vue/typescript/recommended"
    ],
    parserOptions: {
        ecmaVersion: 2020,
        requireConfigFile: false
    },
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        quotes: ["error", "double", {"allowTemplateLiterals": true}],
        indent: ["error", 4],
        semi: ["error", "never"]
    },
    overrides: [
        {
            files: [
                "**/__tests__/*.{j,t}s?(x)",
                "**/tests/unit/**/*.spec.{j,t}s?(x)"
            ],
            env: {
                jest: true
            },
            rules: {
                indent: ["error", 4]
            }
        },
        {
            files: [
                "**/*.vue"
            ],
            rules: {
                indent: "off",
                "vue/script-indent": ["error", 4, {
                    baseIndent: 1
                }],
                "vue/html-indent": ["error", 4, {
                    baseIndent: 1
                }]
            }
        },
        {
            files: [
                "**/*.json"
            ],
            rules: {
                indent: ["error", 4]
            }
        }
    ]
}
