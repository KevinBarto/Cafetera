// const cafes = ["Capuccino" ,"Mocca" ,"Cafe c/leche" , "Negro"];
const array = [];
let eleccion = 0;


class Productos{
    constructor(nombre , precio){
        this.nombre = nombre;
        this.precio = precio;
    };
    // mostrarCafe(){
    //     return this.nombre + " " + "$" + this.precio ; 
    // };
}

let cafe1 = new Productos ("Capuccino", 300);
let cafe2 = new Productos ("Mocca" , 300);
let cafe3 = new Productos ("Cafe c/leche" , 400);
let cafe4 = new Productos ("Negro", 200);


function Cafes (){
    if (eleccion === 1){
        array.push(cafe1);
    }else if(eleccion === 2){
        array.push(cafe2);
    }else if(eleccion === 3){
        array.push(cafe3);
    }else if (eleccion === 4){
        array.push(cafe4)
    }
}
let i = Number(prompt("Cuantos Cafés quieres?"));

for(i ; i > 0 ; i--){
    
    eleccion = Number(prompt`Opciones de Café:
    1.Capuccino
    2.Mocca
    3.Cafe c/leche
    4.Negro
    `);
    
eleccion = new Cafes();


}

array.forEach((Productos)=>{
    alert(`Su pedido es: ${Productos.nombre} y el precio es:$ ${Productos.precio}`)
})


    
    


