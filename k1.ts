export class isikukood{
    constructor(protected kood:string) {}
    sugu() {
        return parseInt(this.kood[0]) % 2 === 0 ? "n" : "m";
    }
    synniaasta() {
        const aasta = parseInt(this.kood.slice(1, 3));
        return aasta < 20 ? 2000 + aasta : 1900 + aasta;
    }
}
