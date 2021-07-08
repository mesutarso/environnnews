module.exports = {
	setupFilesAfterEnv: ['./jest.setup.js'],
	moduleNameMapper: {
		'^@components(.*)$': '<rootDir>/components$1',
		'^@pages(.*)$': '<rootDir>/pages$1',
		'^@hooks(.*)$': '<rootDir>/hooks$1',
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/__mocks__/fileMock.js',
		'\\.(scss|sass|css)$': 'identity-obj-proxy',
	},
	testEnvironment: 'jsdom',
};
