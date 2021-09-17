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
        this.updateHtmlProducts();
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
        this.updateSearchResults(id, answer);
        return answer;
    }

    updateHtmlProducts(array) {
        let block_to_insert;
        let container_block;
         
        block_to_insert = document.createElement( 'div' );
        block_to_insert.innerHTML = `This demo DIV block was inserted into the page using`;
         
        container_block = document.getElementById('productosAlmacenados');
        container_block.appendChild(block_to_insert);
    }

    updateSearchResults(id, answer) {
        let block_to_insert;
        let container_block;
        let time = new Date();

        if (answer != false) {
            answer = 'y fue encontrado ✔'
        } else {
            answer = 'y no fue encontrado ❌'
        }
         
        block_to_insert = document.createElement( 'div' );
        block_to_insert.setAttribute('class', 'searchResultsIndex');
        block_to_insert.innerHTML = `<h4 class"mb-2"> ${time.getDate()}/${time.getMonth() + 1}/${time.getFullYear()} a las ${this.formatDate(time.getHours())}:${this.formatDate(time.getMinutes())} horas <br>Se busco el ID: ${id} ${answer}</h4>`;
         
        container_block = document.getElementById('historialBusqueda');
        container_block.prepend(block_to_insert);
    }

    getProducts() {
        return this._products;
    }

    formatDate(data) {
        if (data < 10) {
            return `0` + data;
        } else {
            return data;
        }
    }

}