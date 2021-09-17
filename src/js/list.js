export default class List {
   
    constructor() {
        this._products = new Array();  
    }
  
    addProduct(product) {
        let pos = this._validateDuplicate(product);
  
        if (pos == true) {
                return false;
        } else {
            this._products[product.getId() - 1] = (product);
            return true;
        }
    }
  

    _validateDuplicate(product) {
        let x = 0;
        let pos = false;
        while (this._products.length > 0 && x < this._products.length && pos == false) {
        
            if (product.getId() === this._products[x].getId()) {
            pos = true;
            console.log('validation process...');
        } else {
            pos = false;
            console.log('validation process...');
        }
        x++;
    }
        return pos;
    }

    _searchItem(id) {
        let answer = false;
        this._products.forEach(element => {

            console.log(`${element.getId()} y ${Number(id)}`)

            if (element.getId() == Number(id)) {
                return answer = element;
            }
        });
        return answer;
    }

    getProducts() {
        return this._products;
    }

}