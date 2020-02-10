
function solution(N){
let bin =N.toString(2);
bin.split(",",0);

console.log(bin);

const len = bin.length;


//It may work by hardcoded

var binGap= bin[3]-bin[1]
console.log(binGap);

var data=[];


for(i=0;i<len;i++){
if(bin[i]==='1') {
data.push(i);
}
else{
return 0;
}

for(var i=1;i<data.length;i++){

console.log(data[i]);

}





}

}

solution(9);

