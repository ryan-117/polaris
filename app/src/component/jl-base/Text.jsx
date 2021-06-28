export default {
  name: 'JlText',
  props: {
    config: { type: Object, default: () => {} }
  },
  render() {
    const { style, text } = this.config;
    const { width, height, fontSize, lineHeight } = style;
    const resultStyle = {
      ...style,
      width: `${width}px`,
      height: `${height}px`,
      lineHeight: `${lineHeight}px`,
      fontSize: `${fontSize}px`
    };
    return <p style={resultStyle}>{text}</p>;
  }
};
