function calc(){
 let a = +document.getElementById("n1").value;
 let b = +document.getElementById("n2").value;
 let op = document.getElementById("op").value;
 let r;

 if(op=="+") r=a+b;
 if(op=="-") r=a-b;
 if(op=="*") r=a*b;
 if(op=="/") r=a/b;

 document.getElementById("res").innerHTML = "Result: " + r;
}