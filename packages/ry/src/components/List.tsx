import { defineComponent, PropType, toRefs } from 'vue'

export default defineComponent({
  name: 'List',
  props: {
    list: { type: Array as PropType<any[]>, default: [] }
  },
  setup(props) {
    const list = toRefs(props.list)
    console.log(props.list, list, 2)
    return () => {
      list.value?.map(l => (
        <div>
          {/* <img src="" alt="" /> */}
          <div>
            <p>{l.title}</p>
          </div>
        </div>
      ))
    }
  }
})