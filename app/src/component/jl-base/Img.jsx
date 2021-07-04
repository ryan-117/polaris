export default {
  name: 'JlImg',
  props: {
    config: { type: Object, default: () => {} }
  },
  render() {
    const { style, src } = this.config;
    const { borderRadius, borderWidth } = style;
    const resultStyle = {
      ...style,
      borderRadius: `${borderRadius}px`,
      borderWidth: `${borderWidth}px`
    };
    return (
      <img style={resultStyle} src={src} alt="jl-img" style={resultStyle} />
    );
  }
};
