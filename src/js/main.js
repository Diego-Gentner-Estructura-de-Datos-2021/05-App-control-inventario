import Product from './product.js';
import List from './list.js';

class App {

    constructor() {
    this._btnAdd = document.querySelector('#btnAdd');
    this._btnSearch = document.querySelector('#btnSearch');
    
    this._btnAdd.addEventListener('click', this.readForm);
    this._btnSearch.addEventListener('click', this.searchForm);
    
    this._list = new List();
    }
    

    readForm = () => {

        // Variables Read
        let inputId = document.querySelector('#id');
        let inputName = document.querySelector('#name');
        let inputQuantity = document.querySelector('#quantity');
        let inputPrice = document.querySelector('#price');
        let product = Product.readInfo()

        //Function Workflow

        if (!product) {
            Swal.fire('ESPERA', 'Hay campos vacios o con datos no correctos.', 'warning');
            console.log(this._list.getProducts());
            return;
        }

        let addProduct = this._list.addProduct(product);
        
        if(addProduct === false) {
            Swal.fire('ERROR', 'Este ID de producto ya esta registrado.', 'error');
            console.log(this._list.getProducts());
            inputId.value = ''
            return;
        }

        Swal.fire('CORRECTO', 'El producto se ha añadido.', 'success');
        console.log(this._list.getProducts());
        inputId.value = ''
        inputName.value = ''        
        inputQuantity.value = ''
        inputPrice.value = ''
        return;

    }


    searchForm = () => {

        let inputSearchId = document.querySelector('#idSearch');

        if (inputSearchId === 5) {
            
        } else {
            Swal.fire('PRODUCTO INVÁLIDO', 'Prueba buscando con otro ID/CODIGO.', 'error')
        }



    }

}

new App()