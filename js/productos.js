function mostrarProductos() {
    let request =sendRequest('productos', 'GET', '');
    let table = document.getElementById('productos-table');
    table.innerHTML ="";
    request.onload = function () {
        let data = request.response;
        //console.log(data);//
        data.forEach(element => {
            table.innerHTML += `
            <tr>
            
            <td>${element.nombreItem}</td>
            <td>${element.unidades}</td>
            <td>${element.udm}</td>
            <td>${element.categoria}</td>
            <td>${element.iva}</td>
            <td>${element.valor}</td>
            <td><button type="button" class="btnt1 btn-primary" onclick='window.location="/priv/formProductos.html?id=${element._id}"'>Editar</button>
            <td><button type="button" class="btnt2 btn-danger" onclick='deleteProductos("${element._id}")'>Eliminar</button>
            </tr>
            `//botones extra 
        });
    }
    request.onerror = function(){
        table.innerHTML = `
        <tr>
        <td colspan="">Error al traer los datos</td>
        </tr>
        `
    }

}



//eliminar clientes
function deleteProductos(id) {
    let request = sendRequest('productos/'+id, 'DELETE', '');
    request.onload = function() {
        mostrarProductos();
    }
    
}

//crear un nuevo cliente
function guardarProductos(){
    let nom = document.getElementById('nombres-n').value
    let uni = document.getElementById('unidades-u').value
    let udm = document.getElementById('udm-ud').value
    let cat = document.getElementById('categoria-c').value
    let iva = document.getElementById('iva-i').value
    let val = document.getElementById('valor-v').value
    let data ={'nombreItem':nom, 'unidades':uni, 'udm':udm, 'categoria':cat, 'iva':iva, 'valor':val}
    let request =sendRequest('productos/', 'POST', data);
    request.onload = function() {
        window.location='productos.html'
    }
    request.onerror = function(){
        alert("Error al guardar los datos")
    }
}

function cargarProductos(id){
    let request = sendRequest('productos/'+id, 'GET', '');
    let nom = document.getElementById('nombres-n')
    let uni = document.getElementById('unidades-u')
    let udm = document.getElementById('udm-ud')
    let cat = document.getElementById('categoria-c')
    let iva = document.getElementById('iva-i')
    let val = document.getElementById('valor-v')

    request.onload = function(){

        let data = request.response;
        nom.value = data.nombreItem
        uni.value = data.unidades
        udm.value = data.udm
        cat.value = data.categoria
        iva.value = data.iva
        val.value = data.valor
        
    }
    request.onerror = function(){
        alert("Error al guardar los datos");
    }
}

function modificarProductos(id){
    let nom = document.getElementById('nombres-n').value
    let uni = document.getElementById('unidades-u').value
    let udm = document.getElementById('udm-ud').value
    let cat = document.getElementById('categoria-c').value
    let iva = document.getElementById('iva-i').value
    let val = document.getElementById('valor-v').value
    let data ={'nombreItem':nom, 'unidades':uni, 'udm':udm, 'categoria':cat, 'iva':iva, 'valor':val}
    let request = sendRequest('productos/'+id, 'PUT', data);
    //console.log(request);//
    request.onload = function(){
        window.location='productos.html'
    }
    request.onerror = function(){
        alert("Error al modificar los datos");
    }
}


  