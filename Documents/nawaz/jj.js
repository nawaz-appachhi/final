var inp1=0, inp2=0, inpr="", arr_rev, arr_long, arr_long_len=[], max=0, len , i=0, oplong="", cookieArro, cookieArrs=[];
     
function checkMax(){
 inp1 = document.getElementsByName("inpMax")[0].value;
 inp2 = document.getElementsByName("inpMax")[1].value;
 if((inp1=="")||(inp2==""))
   document.getElementById("maxdiv").innerHTML= "Please enter the both values.";
 else
   Max();
}
     
function Max(){
 if (parseFloat(inp1)>parseFloat(inp2))
   document.getElementById("maxdiv").innerHTML = "The maximum number is : "+inp1;
 else
   document.getElementById("maxdiv").innerHTML = "The maximum number is : "+inp2;
}

function checkRev(){
 inpr = document.getElementById("inpRev").value;
 if(inpr=="")
   document.getElementById("revdiv").innerHTML= "Please enter the String.";
 else
   Reverse();
}
     
function Reverse(){
 arr_rev=inpr.split("");
 arr_rev.reverse();
 document.getElementById("revdiv").innerHTML= "The reversed String is : "+arr_rev.join("");
}
     
function checkLong(){
 if((document.getElementById("inpLong").value)==""){
   console.log("In checkLong");
   document.getElementById("longdiv").innerHTML= "Please enter the value.";
 }
 else
   FindLargestWord();
}

function FindLargestWord(){
 arr_long=document.getElementById("inpLong").value.split(",");
 len= arr_long.length;
 max= arr_long[0].trim().length;
 oplong = arr_long[0].trim();
 for(i=0; i<len; i++){
   arr_long_len[i]= arr_long[i].trim().length;
   if(max<arr_long_len[i]){
     max = arr_long_len[i];
     oplong = arr_long[i];
   }
 }
 document.getElementById("longdiv").innerHTML= "The longest word is : "+oplong;
}
     
function setCookie(){
 document.cookie = "cookna=" + document.getElementById("cookname").value + ";expires=Fri, 09 Jan 2018 12:00:00 UTC;path=/";
 document.cookie = "cookma=" + document.getElementById("cookmail").value + ";expires=Fri, 09 Jan 2018 12:00:00 UTC;path=/";
 document.cookie = "cooknu=" + document.getElementById("cooknum").value + ";expires=Fri, 09 Jan 2018 12:00:00 UTC;path=/";
 document.cookie = "cookad=" + document.getElementById("cookadd").value + ";expires=Fri, 09 Jan 2018 12:00:00 UTC;path=/";
console.log(document.cookie);
alert ("Data is set");
}
function checkCookie(){
   console.log(document.cookie);
 if(document.cookie != ""){
   getCookie();
 }
}

function getCookie(){
 var decodedCookie = decodeURIComponent(document.cookie);
 cookieArro = decodedCookie.split("; ")
 for(i=0; i<cookieArro.length; i++){
   cookieArrs[i] = cookieArro[i].substring(7, (cookieArro[i].length));
 }
 document.getElementById("cname").innerHTML = cookieArrs[0];
 document.getElementById("cmail").innerHTML = cookieArrs[1];
 document.getElementById("cnumber").innerHTML = cookieArrs[2];
 document.getElementById("caddress").innerHTML = cookieArrs[3];
}

function clearCookie(){
 document.cookie = "cookna=" + document.getElementById("cookname").value + ";expires=Thu, 01 Jan 1970 12:00:00 UTC;path=/";
 document.cookie = "cookma=" + document.getElementById("cookmail").value + ";expires=Thu, 01 Jan 1970 12:00:00 UTC;path=/";
 document.cookie = "cooknu=" + document.getElementById("cooknum").value + ";expires=Thu, 01 Jan 1970 12:00:00 UTC;path=/";
 document.cookie = "cookad=" + document.getElementById("cookadd").value + ";expires=Thu, 01 Jan 1970 12:00:00 UTC;path=/";
}
$(document).ready(function(){
                               
  $("body, .forum, .floating-box3, .myform, .floating-box4, .floating-box5, .floating-box6, .floating-box7, .floating-box1, .floating-box2, .box1  ").css({"background-color":"#FFFF88", "border": "3px solid #FF1A00"});
    $("body").css("color", "#CC0000");
    $(":input").css("border", "0px");
    $(".box11").html("<h3>References  </h3>"+
      "<ol><li>http://www.w3schools.com/jquery/jquery_quiz.asp</li>"+
      "<li>http://w3schools.com/js/default.asp</li>"+
       "<li>http://w3schools.com/css/default.asp</li>"+
        "<li>http://w3schools.com/css/default.asp</li>"+
      " </ol>");
    
});



