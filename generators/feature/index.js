const util = require('../util');
const file = require('../util/file');

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
                {name: 'Stateless Function', value: 'function'},
                {name: 'Component Class', value: 'class'},
            ],
            default: 'class'
        },
    ],
    actions: function (data) {
        data.isFunction = data.type === 'function';

        const actions = [
            file.addFeatureIndex('../src/{{dashCase name}}/index.js'),
            file.addActions('../src/{{dashCase name}}/actions.js'),
            file.addConstants('../src/{{dashCase name}}/constants.js'),
            file.addReducer('../src/{{dashCase name}}/reducer.js'),
            file.addSelectors('../src/{{dashCase name}}/selectors.js'),
            file.addTest('../src/{{dashCase name}}/components/{{dashCase name}}.test.jsx'),
            file.addCss('../src/{{dashCase name}}/components/{{dashCase name}}.css'),
        ];

        if (data.type === 'function') {
            actions.push(
                file.addFunction('../src/{{dashCase name}}/components/{{dashCase name}}.jsx')
            );
        } else {
            actions.push(
                file.addClass('../src/{{dashCase name}}/components/{{dashCase name}}.jsx')
            );
        }

        return actions;
    }
};
