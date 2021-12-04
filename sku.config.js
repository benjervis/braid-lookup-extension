module.exports = {
  clientEntry: 'src/client.tsx',
  renderEntry: 'src/render.tsx',
  sites: [{ name: 'apac', host: 'dev.seek.com.au' }],
  publicPath: '..', // <-- Required for sku build output
  orderImports: true,
};
