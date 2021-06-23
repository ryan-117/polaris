export default {
  name: 'JlButton',
  props: {
    config: { type: Object, default: () => {} }
  },
  render() {
    const { style } = this.config;
    const { width, height, borderRadius, borderWidth } = style;
    const resultStyle = {
      ...style,
      width: `${width}px`,
      height: `${height}px`,
      borderRadius: `${borderRadius}px`,
      borderWidth: `${borderWidth}px`
    };
    return <button style={resultStyle}>按钮</button>;
  }
};
