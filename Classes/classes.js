class Vector{
    constructor(array){
        this.vectorArray = array;
    }

    add(array){
        if(array.length === this.vectorArray.length){
            let addedArray = this.vectorArray.map((number,index) => number+array[index]);
            
            console.log(addedArray);
        }else{
            console.error(`The array doesn't match the same length`);
        }
    }

    subtract(array){
        if(array.length === this.vectorArray.length){
            let substractedArray = this.vectorArray.map((number,index) => number-array[index]);
            
            console.log(substractedArray);
        }else{
            console.error(`The array doesn't match the same length`);
        }
    }

    dot(array){
        if(array.length === this.vectorArray.length){
            let dotArray = this.vectorArray.reduce((sum,actualNumber,index) =>{
                return sum+= actualNumber*array[index];
            },0);
            
            console.log(dotArray);
        }else{
            console.error(`The array doesn't match the same length`);
        }
    }

    norm(array){
        if(array.length === this.vectorArray.length){
            let normArray = this.vectorArray.reduce((sum,actualNumber,index) =>{
                return sum+= Math.pow(actualNumber, array[index]);
            });
            console.log(Math.sqrt(normArray).toFixed(3));
        }else{
            console.error(`The array doesn't match the same length`);
        }
    }
}

let	a = new Vector([1,2,3]);
let	b = new	Vector([3,4,5]);
let	c = new	Vector([5,6,7,8]);

a.add(b.vectorArray);
a.subtract(b.vectorArray);
a.dot(b.vectorArray);
a.norm(b.vectorArray);

a.dot(c.vectorArray);