export default class List {
   
    constructor() {
        this._products = new Array();
        this._lever = false;
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

            if (this._products[x] != undefined) {
                if (product.getId() === this._products[x].getId()) {
                    pos = true;
                    console.log('validation process...');
                } else {
                    pos = false;
                    console.log('validation process...');
                }
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
        this.updateSearchResults(id, answer);
        return answer;
    }

    updateHtmlProducts() {
        let block_to_insert;
        let container_block;
         
        this._products.forEach(element => {
            if (element != undefined) {
                block_to_insert = document.createElement( 'div' );
                block_to_insert.classList.add("productsIndex");
                block_to_insert.classList.add("mb-2");
                block_to_insert.innerHTML = `${element.getName()}, ID: ${element.getId()}, Peso: ${element.getQuantity()} kg, Precio: $${element.getPrice()}/kg Total: $${element.getTotal()}`;
                 
                container_block = document.getElementById('productosAlmacenados');
                if (this._lever === false) {
                    container_block.appendChild(block_to_insert);
                } else {
                    container_block.prepend(block_to_insert);
                }
            }
        });
    }

    updateSearchResults(id, search) {

        if (id == 0 || id < 1) {
            return;
        }

        let block_to_insert;
        let container_block;
        let time = new Date();
        let message;

        if (search != false) {
            message = `y fue encontrado ✔<br>▶ ${search.getName()}, ID: ${search.getId()}, Peso: ${search.getQuantity()} kg, Precio: $${search.getPrice()}/kg Total: $${search.getTotal()}`
        } else {
            message = 'y no fue encontrado ❌'
        }
         
        block_to_insert = document.createElement( 'div' );
        block_to_insert.setAttribute('class', 'searchResultsIndex');
        block_to_insert.innerHTML = `<h4 class"mb-2"> ${time.getDate()}/${time.getMonth() + 1}/${time.getFullYear()} a las ${this.formatDate(time.getHours())}:${this.formatDate(time.getMinutes())} horas <br>Se busco el ID: ${id} ${message}</h4>`;
         
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