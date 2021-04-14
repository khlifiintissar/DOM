document.getElementById("plus1").addEventListener('click',function(){ 
   let a1 = document.getElementById("input1").value++
       sum1()
       total()
})

function sum1(){
    let text1 = document.getElementById("prix1")
    let fact1 = document.getElementById("input1").value
    text1.innerHTML=fact1*1379
}


document.getElementById("min1").addEventListener('click',function(){
   var a1= document.getElementById("input1").value;
     if (a1>0){
         a1--;
         document.getElementById("input1").value=a1;
     }
     sum1()
     total()
    
})
document.getElementById("plus2").addEventListener('click',function(){ 
    let a2 = document.getElementById("input2").value++
        sum2()
        total()
 })
 
 function sum2(){
     let text2 = document.getElementById("prix2")
     let fact2 = document.getElementById("input2").value
     text2.innerHTML=fact2*176.80 
 }
 
 
 document.getElementById("min2").addEventListener('click',function(){
    var a2= document.getElementById("input2").value;
      if (a2>0){
          a2--;
          document.getElementById("input2").value=a2;
      }
      sum2()
      total()
      
 })
 document.getElementById("plus3").addEventListener('click',function(){ 
    let a3 = document.getElementById("input3").value++
        sum3()
        total()
 })
 
 function sum3(){
     let text3 = document.getElementById("prix3")
     let fact3 = document.getElementById("input3").value
     text3.innerHTML=fact3*249.00
 }
 
 
 document.getElementById("min3").addEventListener('click',function(){
    var a3= document.getElementById("input3").value;
      if (a3>0){
          a3--;
          document.getElementById("input3").value=a3;
      }
      sum3()
      total()
    })
     
document.getElementById("heart1").addEventListener('click',function(){
 var ticoeur1=document.getElementById("heart1");
 if (ticoeur1.style.color=='black'){
     ticoeur1.style.color='red';
    }else{
        ticoeur1.style.color='black';
    }

})
document.getElementById("heart2").addEventListener('click',function(){
    var ticoeur2=document.getElementById("heart2");
    if (ticoeur2.style.color=='black'){
        ticoeur2.style.color='red';
       }else{
           ticoeur2.style.color='black';
       }
   
   })
   document.getElementById("heart3").addEventListener('click',function(){
    var ticoeur3=document.getElementById("heart3");
    if (ticoeur3.style.color=='black'){
        ticoeur3.style.color='red';
       }else{
           ticoeur3.style.color='black';
       }
   
   })
  var menu1=document.getElementById("p1");
   var item1=document.getElementById("supp1");
   function remove1(){
   menu1.removeChild(item1)
   }
   document.getElementById("c1").addEventListener("click",function(){
       document.getElementById("p1").removeChild(document.getElementById("supp2"))
   })
   document.getElementById("supp3")
   function remove3(){
     document.getElementById("p1").removeChild(document.getElementById("supp3"))
   }
 
   function total(){
      let v1=parseInt(document.getElementById('prix1').innerHTML);
      let v2=parseInt (document.getElementById('prix2').innerHTML);
      let v3=parseInt (document.getElementById('prix3').innerHTML);
      let total_final=v1+v2+v3;
    document.getElementById("input").value=total_final;

   }
 