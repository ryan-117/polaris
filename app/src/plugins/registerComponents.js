import Vue from 'vue';
import JlButton from '@/component/jl/Button';
import JlImg from '@/component/jl/Img';
import JlText from '@/component/jl/Text';

const baseComponentsList = [JlButton, JlImg, JlText];

export default {
  init() {
    baseComponentsList.map(c => {
      Vue.component(c.name, c);
    });
  }
};
