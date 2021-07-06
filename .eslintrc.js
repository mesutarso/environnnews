module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'airbnb',
		'prettier',
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: false,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint'],
	rules: {
		'new-cap': 'off',
		'lines-around-comment': 'off',
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
	},
};
