/**
 * @description: 生成cid，全局唯一
 * @return: {String} 编辑区每个组件对应的cid，如：两个按钮组件，其cid不同
 */
const generateCid = () =>
  +new Date() +
  Math.random()
    .toString(36)
    .substring(2, 15);

// 各组件默认属性配置，后续需要改为class extens形式
class JlButton {
  constructor() {
    this.name = 'JlButton';
    this.cid = generateCid();
    this.text = '默认按钮';
    this.editor = 'ButtonEditor';
    this.style = {
      width: 100,
      height: 40,
      top: 20,
      left: 80,
      color: '#333333',
      backgroundColor: '#ffffff',
      borderRadius: 20,
      borderWidth: 1,
      borderColor: '#cccccc',
      borderStyle: 'solid'
    };
  }
}
class JlImg {
  constructor() {
    this.name = 'JlImg';
    this.cid = generateCid();
    this.editor = 'ImgEditor';
    this.isProportionalScale = true;
    this.src = 'http://xwxt.wostore.cn/upload/2019/06/20/1560999405954.png';
    this.style = {
      width: 200,
      height: 100,
      top: 40,
      left: 160,
      borderRadius: 4,
      borderWidth: 0,
      backgroundColor: '#ffffff',
      borderColor: '#cccccc',
      borderStyle: 'solid',
      opacity: 1
    };
  }
}
class JlText {
  constructor() {
    this.name = 'JlText';
    this.cid = generateCid();
    this.editor = 'TextEditor';
    this.text = '这是一段文字';
    this.style = {
      width: 200,
      height: 50,
      lineHeight: 24,
      top: 180,
      left: 160,
      fontSize: 18,
      fontWeight: 400,
      color: '#333',
      textAlign: 'left'
    };
  }
}
class JlBackground {
  constructor() {
    this.name = 'JlBackground';
    this.editor = 'BackgroundEditor';
    this.cid = generateCid();
    this.src =
      'http://h5test.wostore.cn/atp_resource/upload//atpweb/2020/04/27/5428ca25d261e29f45d6508cbc3765e1.png';
    this.style = {
      width: 375,
      top: 0,
      left: 0,
      borderRadius: 0,
      borderWidth: 0,
      backgroundColor: '#ffffff',
      borderColor: '#cccccc',
      borderStyle: 'solid',
      opacity: 1
    };
  }
}
export default {
  JlButton,
  JlImg,
  JlText,
  JlBackground
};
