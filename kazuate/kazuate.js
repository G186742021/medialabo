let kotae =Math.floor(Math.random()*10)+1;
console.log('答え:'+kotae);

let c = document.querySelector('#print');
c.addEventListener('click',hantei)
let kaisu=0;

for(let i of 4){
hantei();
kaisu++;
}

function hantei (){
    let l=document.querySelector('input[name="seisu"]');
    let kazuate=l.value;
   let yoso=Number(kazuate);
let result =document.querySelector('#result')
let p=document.createElement('p');
let s =docement.querySelector('span#kaisu');
s.textContent=kaisu;
let a=document.querySelector('div#seisu');
a.textContent=yoso;

    if(kazuate==kotae){
        console.log('正解です。おめでとう！');
    }else{
        console.log('間違い');
    } 
}