let element = document.getElementById( "choice" ) ;
element.onchange = function(){
  let techacademy = this.value ;
  document.getElementById('box').textContent = techacademy;
}