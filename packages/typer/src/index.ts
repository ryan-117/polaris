interface IOptions {
  el: string | HTMLElement,
  test?: number
}
const defaultOptions: IOptions = {
  el: '#typer'
}
export default class Typer {
  private options: IOptions

  constructor(opt: IOptions = defaultOptions) {
    this.options = opt
    this.options = Object.assign({}, defaultOptions, opt)
  }

  init() {
    console.log('typer is inited: 123', this.options)
  }
}