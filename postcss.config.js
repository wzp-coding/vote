module.exports = {
    plugins: {
      'postcss-pxtorem': {
        rootValue: 16, // 根据设计稿调整，表示1rem等于16px
        propList: ['*'], // 需要转换的属性，这里表示所有属性都需要转换
      },
    },
  };
  