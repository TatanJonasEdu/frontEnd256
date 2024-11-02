function mostrarProveedores() {
    let request =sendRequest('proveedores', 'GET', '');
    let table = document.getElementById('proveedores-table');
    table.innerHTML ="";
    request.onload = function () {
        let data = request.response;
        //console.log(data);//
        data.forEach(element => {
            table.innerHTML += `
            <tr>
            
            <td>${element.nombreRazonSocial}</td>
            <td>${element.nit}</td>
            <td>${element.telefonoProveedor}</td>
            <td>${element.direccionProveedor}</td>
            <td>${element.correoProveedor}</td>
            <td>${element.nombreComercial}</td>
            <td>${element.telefonoComercial}</td>
            <td><button type="button" class="btnt1 btn-primary" onclick='window.location="/priv/formProveedores.html?id=${element._id}"'>Editar</button>
            <td><button type="button" class="btnt2 btn-danger" onclick='deleteProveedores("${element._id}")'>Eliminar</button>
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



//eliminar proveedores
function deleteProveedores(id) {
    let request = sendRequest('proveedores/'+id, 'DELETE', '');
    request.onload = function() {
        mostrarProveedores();
    }
    
}

//crear un nuevo cliente
function guardarProveedores(){
    let nom = document.getElementById('nombrers-n').value
    let nit = document.getElementById('nit-n').value
    let tel = document.getElementById('telefonop-t').value
    let dip = document.getElementById('direccionp-d').value
    let cor = document.getElementById('correo-c').value
    let noc = document.getElementById('nombre-c').value
    let tew = document.getElementById('telefonoc-w').value
    let data ={'nombreRazonSocial':nom, 'nit':nit, 'telefonoProveedor':tel, 'direccionProveedor':dip, 'correoProveedor':cor, 'nombreComercial':noc, 'telefonoComercial':tew}
    let request =sendRequest('proveedores/', 'POST', data);
    request.onload = function() {
        window.location='proveedores.html'
    }
    request.onerror = function(){
        alert("Error al guardar los datos")
    }
}

function cargarProveedores(id){
    let request = sendRequest('proveedores/'+id, 'GET', '');
    let nom = document.getElementById('nombrers-n')
    let nit = document.getElementById('nit-n')
    let tel = document.getElementById('telefonop-t')
    let dip = document.getElementById('direccionp-d')
    let cor = document.getElementById('correo-c')
    let noc = document.getElementById('nombre-c')
    let tew = document.getElementById('telefonoc-w')


    request.onload = function(){

        let data = request.response;
        nom.value = data.nombreRazonSocial
        nit.value = data.nit
        tel.value = data.telefonoProveedor
        dip.value = data.direccionProveedor
        cor.value = data.correoProveedor
        noc.value = data.nombreComercial
        tew.value = data.telefonoComercial

        
    }
    request.onerror = function(){
        alert("Error al guardar los datos");
    }
}

function modificarProveedores(id){
    let nom = document.getElementById('nombrers-n').value
    let nit = document.getElementById('nit-n').value
    let tel = document.getElementById('telefonop-t').value
    let dip = document.getElementById('direccionp-d').value
    let cor = document.getElementById('correo-c').value
    let noc = document.getElementById('nombre-c').value
    let tew = document.getElementById('telefonoc-w').value
    let data ={'nombreRazonSocial':nom, 'nit':nit, 'telefonoProveedor':tel, 'direccionProveedor':dip, 'correoProveedor':cor, 'nombreComercial':noc, 'telefonoComercial':tew}
    let request = sendRequest('proveedores/'+id, 'PUT', data);
    //console.log(request);//
    request.onload = function(){
        window.location='proveedores.html'
    }
    request.onerror = function(){
        alert("Error al modificar los datos");
    }
}
