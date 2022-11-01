module.exports = {
    root: true,
    env: {
      node: true,
    },
    extends: ['plugin:vue/essential', 'eslint:recommended'],
    parserOptions: {
      parser: '@babel/eslint-parser',
    },
    rules:{
        semi: ['warn', 'never'],
        
        'no-useless-escape':0
    },
    globals: {
        $: false,
        jQuery: false,
    },
}