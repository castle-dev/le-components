exports.config = {
  namespace: 'castle',
  generateDistribution: true,
  bundles: [
    {
      components: [
        'le-mirror',
        'le-ascii-art'
      ]
    }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
