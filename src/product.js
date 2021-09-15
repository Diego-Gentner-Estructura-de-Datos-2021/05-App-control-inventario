export default class Product {

    constructor(id, name, info) {
        this._id = id;
        this._name = name;
        this._info = info;
    }

    getId() {
        return this._id;
    }

    getName() {
        return this._name;
    }

    getInfo() {
        return this._info;
    }

    setId(id) {
        this._id = id;
    }

    setName(name) {
        this._name = name;
    }

    setInfo(info) {
        this._info = info;
    }

    toString() {
        return `${this._id} ${this._name} ${this._info}`;
    }

}