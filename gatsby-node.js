exports.modifyWebpackConfig = ({config}) => {
  // prevent url-loader from hi-jacking svgs from other loaders
  config.loader(`url-loader`, {
    test: /\.(jpg|jpeg|png|gif|mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
    loader: `url`,
    query: {
      limit: 10000,
      name: `static/[name].[hash:8].[ext]`,
    },
  });

  config.loader(`svg-sprite`, {
    test: /\.svg$/,
    loader:
      'svg-sprite-loader?' +
      JSON.stringify({
        symbolId: 'icon-[name]',
      }),
  });

  return config;
};
