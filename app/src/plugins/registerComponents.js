import Vue from 'vue';
import JlButton from '@/component/jl-base/Button';
import JlImg from '@/component/jl-base/Img';
import JlText from '@/component/jl-base/Text';
import JlBackground from '@/component/jl-base/Background';

import ButtonEditor from '@/component/jl-editor/ButtonEditor';
import ImgEditor from '@/component/jl-editor/ImgEditor';
import TextEditor from '@/component/jl-editor/TextEditor';
import BackgroundEditor from '@/component/jl-editor/BackgroundEditor';

const baseComponentsList = [JlButton, JlImg, JlText, JlBackground];

const baseComponentsEditorList = [
  ButtonEditor,
  ImgEditor,
  TextEditor,
  BackgroundEditor
];

export default {
  init() {
    baseComponentsList.map(c => {
      Vue.component(c.name, c);
    });
  },
  initEditor() {
    baseComponentsEditorList.map(c => {
      Vue.component(c.name, c);
    });
  }
};
