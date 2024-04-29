const toggleDarkMode = (color) => {
    let body = document.body;
    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        body.style.backgroundColor = "#ffffff"; // Color para el modo claro
    } else {
        body.classList.add("dark-mode");
        body.style.backgroundColor = color; // Color para el modo oscuro
    }
};

const otraFuncionFlechaQueRecibeUnColor = (color) => {
    console.log(color);
}

// creo la funcion flecha
const darkModeButtonClick = (parametroFuncion) => {
    parametroFuncion("#1a1a1a"); // Ejemplo de color: negro
};

// Obtener referencia al botón
let button = document.getElementById("darkModeButton");

// Agregar un evento de clic al botón
button.addEventListener("click", () => darkModeButtonClick(toggleDarkMode));
//button.addEventListener("click", function(){darkModeButtonClick(toggleDarkMode)});
//button.addEventListener("click", () => darkModeButtonClick(otraFuncionFlechaQueRecibeUnColor));
//button.addEventListener("click",darkModeButtonClick(toggleDarkMode)); // esto no pasa como referencia a una funcion sino que directamente estamos llamando a la funcion es decir se va a ejecutar en el momento que se cargue el js

//darkModeButtonClick(toggleDarkMode);

// FUNCIONALIDAD QUE AGREGA O ELIMINA ELEMENTOS A UNA LISTA 

let articulos = [];

// Función para agregar un artículo a la lista
/*function agregarArt() {

}*/
const agregarArticulo = () => {
    const inputArticulo = document.getElementById("inputArticulo");
    console.log(inputArticulo);// 
    const nombreArticulo = inputArticulo.value;
    console.log(nombreArticulo);
  
    
    if (nombreArticulo !== "") {
        console.log("entro al if de nombreArticulo diferente de vacio");
        const listaArticulos = document.getElementById("listaArticulos");
        console.log(listaArticulos);
        // Generar automáticamente el número de artículo
        const numeroArticulo = articulos.length + 1;
        
        // Crear un nuevo elemento de lista
        const nuevoArticulo = document.createElement("li");
        
        // Crear el contenido del artículo con número, nombre y descripción
        nuevoArticulo.innerHTML = `<b>${numeroArticulo}-</b> ${nombreArticulo}`; // alt+96
        
        // Agregar el nuevo artículo a la lista
        listaArticulos.appendChild(nuevoArticulo);
        
        // Limpiar los valores de los inputs
        inputArticulo.value = "";
       
         // Crear el objeto artículo
         const nuevoArticuloOb = {
            numero: numeroArticulo,
            nombre: nombreArticulo
        };
        
        // Agregar el nuevo artículo al arreglo
        articulos.push(nuevoArticuloOb);
    }
};


// Función para eliminar un artículo de la lista
const eliminarArticulo = () => {
    const inputNumero = document.getElementById("inputNumero");
    const numeroArticulo = parseInt(inputNumero.value);
    
    const listaArticulos = document.getElementById("listaArticulos");
    
    // Verificar si el número de artículo existe en la lista
    const index = articulos.findIndex(articulo => articulo.numero === numeroArticulo);
    console.log(index);
    if (index !== -1) {
        // Obtener el artículo del arreglo
        const articulo = articulos[index];
        
        // Eliminar el artículo de la lista
        listaArticulos.removeChild(listaArticulos.childNodes[index+1]);
        
        // Actualizar el arreglo de artículos
        articulos.splice(index, 1);
        console.log(articulos);
    } else {
        alert("El número de artículo no existe.");
        
    }
    
    // Limpiar el valor del input
    inputNumero.value = "";
};
// Obtener referencia a los botones
const btnAgregar = document.getElementById("btnAgregar");
const btnEliminar = document.getElementById("btnEliminar");

// Agregar evento de clic al botón Agregar
btnAgregar.addEventListener("click", agregarArticulo);

// Agregar evento de clic al botón Eliminar
btnEliminar.addEventListener("click", eliminarArticulo);
