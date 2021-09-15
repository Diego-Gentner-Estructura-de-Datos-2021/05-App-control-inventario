import Product from './product.js';

class App {

    constructor() {
    this._btnAdd = document.querySelector('#btnAdd');
    this._btnAdd.addEventListener('click', this.errorClick)
    }
    
    
    errorClick = () => {
        Swal.fire({
            title: '¡Ha ocurrido un error!',
            text: '',
            icon: 'error',
            confirmButtonText: 'OK'
          })
    }

    s



}

new App()