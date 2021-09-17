export default class Product {

    constructor(id, name, quantity, price) {
        this._id = Math.abs(Number(id));
        this._name = name;
        this._quantity = quantity;
        this._price = price;
    }

    getId() {
        return this._id;
    }

    getName() {
        return this._name;
    }

    getQuantity() {
        return this._quantity;
    }

    getPrice() {
        return this._price;
    }

    setName(name) {
        this._name = name;
    }

    setQuantity(quantity) {
        this._quantity = quantity;
    }

    setPrice(price) {
        this._price = price;
    }

    static readInfo() {

        let inputId = document.querySelector('#id');
        let inputName = document.querySelector('#name');
        let inputQuantity = document.querySelector('#quantity');
        let inputPrice = document.querySelector('#price');

        let id = Number(inputId.value);
        let name = inputName.value;
        let quantity = inputQuantity.value;
        let price = inputPrice.value;
    
    
        if (id == '' || id < 1 || name == '' || quantity == '' || price == '' || id == undefined || name == undefined || quantity == undefined || price == undefined) {    
            return false;
        } else {
            return (new Product(id, name, quantity, price));
        }

    }

}