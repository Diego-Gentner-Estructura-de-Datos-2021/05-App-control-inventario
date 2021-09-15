export default class Producto {

    constructor(id, name, info) {
        this._id = Number(id);
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

    static readInfo() {
        let inputId = document.querySelector('#id');
        let inputName = document.querySelector('#name');
        let inputInfo = document.querySelector('#info');

        let id = String(inputId.value);
        let name = inputName.value;
        let info = inputInfo.value;
    
    
        if (id == '' || name == '' || info == '') {    
            return false;
        } else {
            inputId.value= ''
            inputName.value = ''
            inputInfo.value = ''
    
            return (new Product(id, name, info));
        }
    
    }

}