module.exports = {
  chainWebpack: (config) => {
    config.plugin('html')
      .tap((args) => {
        args[0].title = '鱼类遗传育种实验室';
        return args;
      });
  },
};
