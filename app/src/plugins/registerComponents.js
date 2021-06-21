import Vue from 'vue';
import JlButton from '@/component/jl-base/Button';
import JlImg from '@/component/jl-base/Img';
import JlText from '@/component/jl-base/Text';
import JlBackground from '@/component/jl-base/Background';

const baseComponentsList = [JlButton, JlImg, JlText, JlBackground];

export default {
  init() {
    baseComponentsList.map(c => {
      Vue.component(c.name, c);
    });
  }
};
