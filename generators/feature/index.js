const util = require('../util');

module.exports = {
    description: 'Generate a feature',
    prompts: [
        {
            type: 'input',
            name: 'name',
            message: 'What is your Feature\'s name?',
            validate: function (value) {
                if ((/.+/).test(value)) {
                    return util.featureExists(value) ? 'This feature already exists' : true;
                }

                return 'name is required';
            },
            default: 'MyFeature'
        },
        {
            type: 'list',
            name: 'type',
            message: 'What type of Component do you want?',
            choices: [
                { name: 'Stateless Function', value: 'function' },
                { name: 'Component Class', value: 'class' },
            ],
            default: 'class'
        },
    ],
    actions: function (data) {
        const actions = [
            {
                type: 'add',
                path: '../src/{{dashCase name}}/index.js',
                templateFile: './feature/index.hbs'
            },

            {
                type: 'add',
                path: '../src/{{dashCase name}}/actions.js',
                templateFile: './feature/actions.hbs'
            },

            {
                type: 'add',
                path: '../src/{{dashCase name}}/constants.js',
                templateFile: './feature/constants.hbs'
            },

            {
                type: 'add',
                path: '../src/{{dashCase name}}/reducer.js',
                templateFile: './feature/reducer.hbs'
            },

            {
                type: 'add',
                path: '../src/{{dashCase name}}/selectors.js',
                templateFile: './feature/selectors.hbs'
            },

            {
                type: 'add',
                path: '../src/{{dashCase name}}/components/{{dashCase name}}.test.jsx',
                templateFile: './component/test.hbs'
            },

            {
                type: 'add',
                path: '../src/{{dashCase name}}/components/{{dashCase name}}.css',
                templateFile: './component/css.hbs'
            }
        ];

        if (data.type === 'function') {
            actions.push({
                type: 'add',
                path: '../src/{{dashCase name}}/components/{{dashCase name}}.jsx',
                templateFile: './component/function.hbs'
            });
        } else {
            actions.push({
                type: 'add',
                path: '../src/{{dashCase name}}/components/{{dashCase name}}.jsx',
                templateFile: './component/class.hbs'
            });
        }

        return actions;
    }
};
