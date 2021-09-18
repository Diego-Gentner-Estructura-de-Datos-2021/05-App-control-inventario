import Product from './product.js';
import List from './list.js';

class App {

    constructor() {
    this._btnAdd = document.querySelector('#btnAdd');
    this._btnSearch = document.querySelector('#btnSearch');
    this._btnDelete = document.querySelector('#btnDelete');
    this._btnInvert = document.querySelector('#btnInvert');
    this._btnDeleteHistory = document.querySelector('#btnDeleteHistory');
    
    this._btnAdd.addEventListener('click', this.readForm);
    this._btnSearch.addEventListener('click', this.searchForm);
    this._btnDelete.addEventListener('click', this.deleteForm);
    this._btnInvert.addEventListener('click', this.invertList);
    this._btnDeleteHistory.addEventListener('click', this.deleteSearchHistory);
    
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
        
        if(addProduct === null) {
            Swal.fire('ERROR', 'Este ID de producto ya esta registrado.', 'error');
            console.log(this._list.getProducts());
            inputId.value = ''
            return;
        }

        this.deleteProductList();

        Swal.fire('CORRECTO', 'El producto se ha añadido.', 'success');
        console.log(this._list.getProducts());
        inputId.value = ''
        inputName.value = ''        
        inputQuantity.value = ''
        inputPrice.value = ''
        this._list.updateHtmlProducts();
        return;

    }


    searchForm = () => {

        let inputSearchId = document.querySelector('#idSearch');

        const search = this._list._searchItem(Number(inputSearchId.value));

        if (search != false || search != 0) {
            Swal.fire(`Producto: ${search.getName()}`, `ID: ${search.getId()}, Peso: ${search.getQuantity()} kg, Precio: $${search.getPrice()}/kg Total: $${search.getTotal()}`, 'success');
        } else {
            if (inputSearchId.value <= 0 || inputSearchId.value == 0) {
                console.log(search);
                Swal.fire('ALTO', 'No puedes buscar IDs menores a 1 o nulos.', 'warning'); 
            } else {
                Swal.fire('PRODUCTO INVÁLIDO', 'Prueba buscando con otro ID/CODIGO.', 'error');   
            }
        }

    }

    deleteForm = () => {
        Swal.fire('ERROR', 'Botón sin función.', 'error');
    }

    deleteSearchHistory = () => {
        Swal.fire('Historial Borrado', '', 'success');
        const elements = document.getElementsByClassName('searchResultsIndex');
        while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
        }
    }

    deleteProductList = () => {
        const elements = document.getElementsByClassName('productsIndex');
        while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
        }
    }

    invertList = () => {
        this.deleteProductList();
        if (this._list.getLever()) {
            this._list.setLever(false);
        } else {
            this._list.setLever(true);
        }

        this._list.updateHtmlProducts();
        return true;
    }

}

new App()