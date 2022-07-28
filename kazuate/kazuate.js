let kotae =Math.floor(Math.random()*10)+1;
console.log('答え:'+kotae);

let kaisu=0;

let c = document.querySelector('#print');
c.addEventListener('click',hantei)


function hantei (){
    let l=document.querySelector('input[name="seisu"]');
    let d=l.value;
    let yoso=Number(d);

    let result =document.querySelector('#result');
    let p =document.createElement('p');
     kaisu++;
    let s =document.querySelector('span#kaisu');
     s.textContent=kaisu;
    let a=document.querySelector('div#seisu');
     a.textContent=yoso;

    if(kotae==yoso){
        result.texstContent="正解です。おめでとう！";
    }else if(kaisu==3){
        result.textContent="ざんねん答えは"+kotae+"でした。";
    }else if(kaisu>3){
        result.textContent="答えは"+kotae+"でした。すでにゲームは終了しています。";
    }else if(kotae>yoso){
        result.textContent="答えはもっと小さいです。";
    }else if(kotae<yoso){
        result.textContent="答えはもっと大きいです。";
    }
}