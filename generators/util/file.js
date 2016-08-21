module.exports = {
    addCss: path=>templateFile(path, './component/css.hbs'),
    addIndex: path=>templateFile(path, './component/index.hbs'),
    addTest: path=>templateFile(path, './component/test.hbs'),
    addFunction: path=>templateFile(path, './component/function.hbs'),
    addClass: path=>templateFile(path, './component/class.hbs'),

    addFeatureIndex: path=>templateFile(path, './feature/index.hbs'),
    addActions: path=>templateFile(path, './feature/actions.hbs'),
    addConstants: path=>templateFile(path, './feature/constants.hbs'),
    addReducer: path=>templateFile(path, './feature/reducer.hbs'),
    addSelectors: path=>templateFile(path, './feature/selectors.hbs')
};

function templateFile(path, template) {
    return {
        type: 'add',
        path: path,
        templateFile: template
    };
}