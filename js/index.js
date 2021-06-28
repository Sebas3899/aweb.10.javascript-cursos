//console.log("Hola mundo");

const materia = {
    nombre: "Aplicaciones Web",
    horario: "9:00 a 10:45"
};
Object.freeze(materia);
console.log(materia.nombre);
materia.nombre = "Base de datos";
console.log(materia.nombre);

//Arrow functions
var suma = (a,b)=> {
    return a+b;
}

console.log(suma(5,8));


var unSaludo = (nombre ="Sebas",edad= "21") =>{
    console.log("Hola soy "+nombre+" y mi edad es "+edad+ " años");
    console.log(`Hola soy ${nombre} y mi edad es ${edad} años`);
}
console.log("============================")
unSaludo();
console.log("============================")
unSaludo("Juarez");
console.log("============================")
unSaludo("Ortega",22);


var num1 = 2;
var num2 = 34;
console.log(`La suma de ${num1} + ${num2} es ${num1+num2+ 'oh la la'} `);

console.log("hola lala vamos a dra un salto de linea \n ya di uno \n ya di otro")

console.log(`hola lala vamos a dra un salto de linea
 ya di uno
 ya di otro`)

/*
const nombre = "Aplicaciones Web";
if(true){
    nombre = "Base de datos";
    console.log(nombre);
}
console.log(nombre);
*/

var curso ={
    nombre:"",
    descripcion:"",
    docente:{
        nombre:"",
        cursos:0
    }
};

function actualizar(){
    curso.nombre = document.getElementById("nombre").value;
    curso.descripcion = document.getElementById("descripcion").value;
    curso.docente.nombre = document.getElementById("docente").value;
    curso.docente.cursos = document.getElementById("cursos").value;
    actualizarFicha();
   
}

function actualizarFicha(){
    document.getElementById("titulo").innerHTML = curso.nombre;
    document.getElementById("descrip").innerHTML = curso.descripcion;
    document.getElementById("nombre-docente").innerHTML = curso.docente.nombre;
    document.getElementById("total").innerHTML = curso.docente.cursos;
}

var btnCambiar = document.querySelector(".btn-cambiar");
console.log(btnCambiar);
btnCambiar.addEventListener("click",()=>{
    document.querySelector(".btn-success").innerHTML="Update"
});