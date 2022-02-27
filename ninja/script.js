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
            console.log("Le sumo 10 a salud:",this.salud);
        }
    
}

const ninja1 = new ninja("goku", 10);
ninja1.SayName(ninja1.nombre);
ninja1.showStats(ninja1);
ninja1.drinkSake(ninja1.salud);