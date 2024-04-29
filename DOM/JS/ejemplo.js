// declaracion de la funcion
const unaFuncion = (parametro)=>{
    console.log(parametro);
}
// llamado a la funcion
unaFuncion("Hola");


// declaracion de la funcion, es la funcionalidad en si, es el bloque de codigo que hace algo y espera ser llamado
const funcionSinParametro = ()=>{console.log("hola mundo")};

// llamado de la funcion que hace que se ejecute
funcionSinParametro();


// cuando estamos agregando funcionalidad como parametro, literalmente le tenemos que pasar una funcion, es la funcion, NUNCA EL LLLAMADO DE UNA FUNCION, ESTO ES UNA CALLBACK, Y TIENE QUE RESIVIR SI O SI LA FUNCION, siempre tengo que pasar la funcion como referencia
button.addEventListener("click", funcionSinParametro);

//const funcionSinParametroQueRetornaUnaFuncion =() => unaFuncion("chau");
const funcionx = () =>{unaFuncion("CHAU");}
button.addEventListener("click", funcionx);// aca no estoy haciendo un llamado
//button.addEventListener("click",funcionSinParametroQueRetornaUnaFuncion)

button.addEventListener("click", (parametro)=>{
    console.log(parametro);
});