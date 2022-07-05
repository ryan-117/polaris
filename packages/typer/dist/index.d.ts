interface IOptions {
    el: string | HTMLElement;
    test?: number;
}
export default class Typer {
    private options;
    constructor(opt: IOptions);
    init(): void;
}
export {};
