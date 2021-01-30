module.exports = {
  publicPath:
    process.env.DEPLOY_ENV === 'GH_PAGES' ||
    process.env.NODE_ENV === 'production'
      ? '/bakery/'
      : '/',
  transpileDependencies: ['vuetify'],
  chainWebpack: config => {
    config.resolve.extensions
      .clear()
      .add('.vue')
      .add('.tsx')
      .add('.ts')
      .add('.mjs')
      .add('.js')
      .add('.jsx')
      .add('.json')
      .add('.wasm');
  }
};
