var Typer = function() {
  function Typer2(opt) {
    opt.test = 12;
    var defaultOptions = {
      el: "#typer"
    };
    this.options = Object.assign({}, defaultOptions, opt);
  }
  Typer2.prototype.init = function() {
    console.log("typer is inited: 123", this.options);
  };
  return Typer2;
}();
export { Typer as default };
//# sourceMappingURL=typer.es.js.map
