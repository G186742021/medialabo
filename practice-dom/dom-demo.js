document.querySelector('p');
document.querySelectorAll('p'); 
document.querySelectorAll('li');
let li =document.querySelectorAll('li');
for(let l of li){
    console.log(l.textContent);
}
document.querySelector('p#definition');
document.querySelector('li#EU');
let p =document.createElement('p');
p.textContent='太洋は水圏の大部分を占める、それぞれが接続した地球上の海の主要領域である。'; 
let h2ocean=document.querySelector('h2#aboutOcean'); 
h2ocean.insertAdjacentElement('afterend',p); 

let h2s=document.querySelectorAll('h2'); 
for(let h2 of h2s){
    p=document.createElement('p');
  p.textContent='見出しの次のp要素';
  h2.insertAdjacentElement('afterend',p);
  }
  let eu=document.querySelector('li#EU'); 
  eu.remove(); 
  let ul =document.querySelector('ul');
  li=document.createElement('li');
  li.textContent='アジア大陸'; 
  ul.insertAdjacentElement('beforeend', li); 
  li=document.createElement('li'); 
  li.textContent='ヨーロッパ大陸'; 
  ul.insertAdjacentElement('beforeend', li);
  let h2sevenOcean=document.querySelector('h2#sevenOcean');
  let oceans=[
      '北極海',
      '北大西洋',
      '南大西洋',
      'インド洋',
      '北太平洋',
      '南太平洋',
      '南極海'
  ]
  ul = document.createElement('ul');
  h2ocean.insertAdjacentElement('afterend', ul);
  for(let o of h2ocean){       
      console.log(o.textContent);
  }