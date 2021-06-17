import Vue from 'vue';
import JlButton from '@/component/jl/Button';
import JlImg from '@/component/jl/Img';
import JlText from '@/component/jl/Text';
import JlBackground from '@/component/jl/Background';

const baseComponentsList = [JlButton, JlImg, JlText, JlBackground];

export default {
  init() {
    baseComponentsList.map(c => {
      Vue.component(c.name, c);
    });
  }
};
