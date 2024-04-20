let divClick = document.getElementById('myDiv');
let i = 0;

divClick.onclick = function(){
   i++;
   if(i%2){
       divClick.style.border = '3px dashed green';
   } else if(i == 2){
    divClick.style.backgroundColor = 'yellow'
    divClick.style.border ='none';
   }else if(i == 4){
    divClick.style.backgroundColor = 'red'
   }else{
    divClick.style.opacity= '0';
   }
   
}