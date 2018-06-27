module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "amd" : true
  },
  "globals": {
    "app": true,
    "resolve": true,
    "log": true,
    "__": true
  },
  "extends": ["eslint:recommended", "plugin:react/recommended", "plugin:jsx-a11y/recommended", "airbnb"],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "settings": {
    "import/resolver": {
      "webpack": {},
      "babel-module": {}
    },
    "import/core-modules": [
      "/lib/tine/riversand",
      "/lib/tine/youtube",
      "/lib/tineikt/freemarker",
      "/lib/util/*",
      "/lib/util",
      "/lib/enonic/util",
      "/lib/xp/io",
      "/lib/xp/http-client",
      "/lib/xp/portal",
      "/lib/xp/content",
      "/lib/solidum/post",
      "/lib/riversand/products",
      "/lib/cache"
    ],
    "import/external-module-folders": [
      "./src/main/resources/lib",
      "/lib/xp/*"
    ]
  },
  "plugins": [
    "react",
    "jsx-a11y"
  ],
  "rules": {
    "linebreak-style": [0],
    "complexity": ["warn", 10],
    "max-len": [
      1,
      150
    ],
    "indent": [
      "error",
      "tab",
      {
        "SwitchCase": 1
      }
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "semi": [
      "error",
      "always"
    ],
    "no-plusplus": [
      "error",
      {
        "allowForLoopAfterthoughts": true
      }
    ],
    "no-restricted-syntax": [
      "error",
      "ForInStatement",
      "LabeledStatement",
      "WithStatement"
    ],
    "no-shadow": [
      0
    ],
    "no-use-before-define": [
      "error",
      "nofunc"
    ],
    "jsx-a11y/no-marquee": [
      0
    ],
    "react/jsx-uses-vars": [
      2
    ],
    "no-tabs": [
      0
    ],
    "jsx-sort-props": [
      0
    ],
    "react/jsx-filename-extension": [
      0
    ],
    "class-methods-use-this": [
      0
    ],
    "comma-dangle": [
      "error",
      "never"
    ],
    "react/jsx-indent": [
      2,
      "tab"
    ],
    "react/jsx-indent-props": [
      2,
      "tab"
    ],
    "react/prefer-stateless-function": [
      0
    ],
    "react/require-default-props": [
      0
    ],
    "react/forbid-prop-types": [
      0
    ],
    "import/extensions": [0, {
      "json": "always",
      "ftl": "always",
      "html": "always"
    }],
    "import/no-absolute-path": [2, { esmodule: false, commonjs: false, amd: false }],
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": [
          "**/*.spec.js",
          "**/test/setup.js",
          "**/test/utils.js"
        ]
      }
    ],
    "no-underscore-dangle": [
      0
    ]
  }
};
