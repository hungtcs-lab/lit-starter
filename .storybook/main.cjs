
module.exports = {
  core: {
    enableCrashReports: false,
  },
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-controls',
    '@storybook/addon-postcss',
    '@storybook/addon-essentials',
  ],
  stories: [
    '../lib/**/*.stories.@(ts|mdx)',
  ],
  framework: '@storybook/web-components',
};
