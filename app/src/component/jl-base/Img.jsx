export default {
  name: 'JlImg',
  props: {
    config: { type: Object, default: () => {} }
  },
  render() {
    const { style } = this.config;
    const { borderRadius, borderWidth } = style;
    const resultStyle = {
      ...style,
      borderRadius: `${borderRadius}px`,
      borderWidth: `${borderWidth}px`
    };
    return (
      <img
        style={resultStyle}
        src="https://gw.alipayobjects.com/mdn/prod_resource/afts/img/A*bmaOTohwV3YAAAAAAAAAAAAAARQnAQ"
        alt="jl-img"
        style={resultStyle}
      />
    );
  }
};
