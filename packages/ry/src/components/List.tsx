import { defineComponent, PropType } from 'vue'
import './list.less'

const actorFilter = (str: string): string => `${str.split('|').slice(0, 2).join(' / ')}等`

export default defineComponent({
  name: 'SearchList',
  props: {
    list: { type: Array as PropType<any[]>, default: [] }
  },
  setup(props) {
    return () => (
      <div className="list">
        {props.list?.map(l => (
          <div className="list-item">
            <img src={l.cover} alt="图片走失咯" />
            <div className="right">
              <p className="title">{l.title}</p>
              <div className="tags">
                {l.author && <el-tag effect="plain">作者：{l.author}</el-tag>}
                {l.actor && (<el-tooltip content={l.actor.split('|').join(' / ')} effect="light"><el-tag effect="light">演员：{actorFilter(l.actor)}</el-tag></el-tooltip>)}
                {l.director && <el-tag effect="plain">导演：{l.director}</el-tag>}
                {l.fictionType && <el-tag effect="plain" type="success">类型：{l.fictionType}</el-tag>}
                {l.comicType && <el-tag effect="plain" type="success">类型：{l.comicType}</el-tag>}
                {l.videoType && <el-tag effect="plain" type="success">类型：{l.videoType}</el-tag>}
                {l.updateTime && <el-tag effect="plain" type="warning">更新时间：{l.updateTime.substr(0, 10)}</el-tag>}
                {l.region && <el-tag effect="light" type="info">地区：{l.region}</el-tag>}
              </div>
              <p className="desc">{l.descs}</p>
            </div>
          </div>
        ))}
      </div>
    )
  }
})