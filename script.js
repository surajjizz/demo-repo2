class car {
    constructor(brand){
        this.carname=brand;
    }
    present(){
        console.log(`car name is ${this.carname}`);
        
    }
}
mycar=new car("Alto")
mycar.present()