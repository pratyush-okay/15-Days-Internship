function greet (){
    console.log('hi i will not wait');
}
function wait(time){
    console.log('i will wait for ' +time+ ' miliseconds');
}
setTimeout(greet,2000);
wait(2000);