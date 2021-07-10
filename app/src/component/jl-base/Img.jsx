export default {
  name: 'JlImg',
  props: {
    config: { type: Object, default: () => {} }
  },
  render() {
    const { style, src } = this.config;
    const { borderRadius, borderWidth, width, height } = style;
    const resultStyle = {
      ...style,
      width: `${width}px`,
      height: `${height}px`,
      borderRadius: `${borderRadius}px`,
      borderWidth: `${borderWidth}px`
    };
    return <img style={resultStyle} src={src} alt="jl-img" />;
  }
};
