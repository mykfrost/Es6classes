//Old classes

// function Circle(radius){

//     this.radius = radius;

//     this.draw = function(){
//         console.log('draw');
//     }
// }

class Circle{
constructor(radius){
    this.radius = radius;
}
//methods are defined in the body of the class
 draw(){
    console.log('Draw');
 }
}

const c  = new Circle(1);
console.log(c);

//private members using symbol

const _radius = Symbol();
const _draw = Symbol();
class Circle2 {
constructor (radius){
    this[_radius] = radius;
}
[_draw](){
    console.log('Private draw');
}
}

const  c2 = new Circle2(12);

const key = Object.getOwnPropertySymbols(c2)[0];
console.log(c2[key]);
