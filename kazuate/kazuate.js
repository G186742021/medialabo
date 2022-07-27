let kotae =Math.floor(Math.random()*10)+1;
console.log('答え:'+kotae);

let result = document.querySelector('#result');
result.addEventListener('click',hantei)
let kaisu=0;

for(let i of 4){
hantei();
kaisu++;
}

function hantei (){
    let yoso=4;
    let l=document.querySelector('input[name="kazuate"]');
    let kazuate=l.value;
   
    if(kazuate==kotae){
        
    }else{
        console.log('')
    }


    
}