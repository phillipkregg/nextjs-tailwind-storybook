module.exports = {
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  stories: [
    // Paths to the story files
    '../pages/*.stories.mdx',
    '../pages/*.stories.tsx',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
};
