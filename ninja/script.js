class ninja{
    constructor(nombre, salud){
        this.velocidad = 3;
        this.fuerza = 3;
        this.nombre = nombre;
        this.salud = salud;
    }
        SayName(){
            console.log(this.nombre);
        }
        showStats(){
            console.log("nombre:",this.nombre);
            console.log("fuerza:",this.fuerza);
            console.log("velocidad:",this.velocidad);
            console.log("salud:",this.salud);
        }
        drinkSake(){
            this.salud = this.salud + 10;   
        }
    
}
class sensei extends ninja{
    constructor(velocidad, fuerza, nombre, salud){
        super(velocidad, fuerza, nombre, salud);
            this.velocidad = 10;
            this.fuerza = 10;
            this.salud = 200;
            this.sabiduria = 10;
    }
    speakWisdom(){
        return this.drinkSake();
        //console.log("Lo que un padawan debe saber, es que siempre debe andar con su sable de luz");
    }
    drinkSake(){
        return "Lo que un padawan debe saber, es que siempre debe andar con su sable de luz";  
    }
}

const ninja1 = new ninja("goku", 10);
ninja1.SayName(ninja1.nombre);
ninja1.showStats(ninja1);
ninja1.drinkSake(ninja1.salud);
console.log("Le sumo 10 a salud:",ninja1.salud);

const sensei1 = new sensei("Splintter");
console.log(sensei1.nombre);
console.log(sensei1.velocidad);
console.log(sensei1.fuerza);
console.log(sensei1.salud);
console.log(sensei1.sabiduria);
let mensage;
console.log(sensei1.speakWisdom(mensage));