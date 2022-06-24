import { init } from './in'
interface IOptions {
  el: string | HTMLElement,
  test?: number
}
export default class Typer {
  private options: IOptions

  constructor(opt: IOptions) {
    // this.options = options
    opt.test = 12
    const defaultOptions: IOptions = {
      el: '#typer'
    }

    init()
    this.options = Object.assign({}, defaultOptions, opt)
  }

  init() {
    console.log('typer is inited: 123', this.options)
  }
}