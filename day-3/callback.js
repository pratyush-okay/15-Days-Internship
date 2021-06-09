function greet(name , callback){
    console.log('hi'+ ' '+ name);
    callback();
}
//callback function
function callme(){
    console.log('I am callback function');
}
//parsing function as a argument
greet('Hardik',callme);