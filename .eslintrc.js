module.exports = {
    "extends": "standard",
    "env": {
        "node": true
    },
    "rules": {
        "camelcase": [0, {"properties": "always"}],
        "max-len": [2, {"code": 150} ],
        "no-var": "error",
        "prefer-const": "error",
        "semi": ["error", "always"],
        "indent": ["error", 4],
        "no-duplicate-imports":"error",
        "import/order": ["error", {"newlines-between": "ignore"}],
        "object-curly-spacing": ["error", "always"],
        "space-infix-ops": "error",
        "no-console": ["error", { "allow": ["warn", "error"] }],
        "no-unused-vars": "error",
        "no-param-reassign": "error",
        "arrow-body-style": ["error", "as-needed"],
        "no-useless-constructor": "error",
        "no-useless-return": "error",
        "import/prefer-default-export": "error",
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "impliedStrict": true
    }
};
