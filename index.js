
        console.log("hello world");
        console.warn("this is warning");
        console.error("this is error");
        var number1 =100;
        var number2 =75;
        console.log(number1 + number2);
   var number1=500
   var number2=400
   var str1="this is string"
   var str2='this is also a string'
   
   var marks={
        ravi: 34,
        shubham: 45,
        harry: 56,
   }
   
   var a = true;
   var b = false;
   //console.log(a, b)//

   var arr = [1,2,"babblu",4,5,6,7,"champion",9  ]
   var a = 100;
   var b = 40;
   console.log("the value of a + b is",a+b);
   console.log("the value of a + b is",a-b);
   console.log("the value of a + b is",a*b);
   console.log("the value of a + b is",a/b);

   var c = b;
   
   c+=10;
   c-=12;




   console.log(c);

   var d = a;
   d+=20;
   console.log(d)

var e = "10 times";
console.log("apple")


var x = 34;
var y = 50;
console.log(x==y);
console.log(x+=y);
console.log(x>=y);


function avg(a, b){
     c = (a+b)/2;
     return c;
}
   c1 = avg(4, 6);
   c2 = avg(14, 16);
   console.log(c1, c2);

   var age = 20;
   if(age > 16){
     console.log('you can play circket');
   }
   else{
     console.log('you cannot play circket');
   }


    age = 25;
   if(age > 50){
     console.log("you can do busniess")};

     if (age < 43) {
         console.log("you can do job")
     } else {
      console.log("you can do ever thing")
     }




     tarket = 78;
     if(tarket > 90){
      console.log("you win")
     }
     else(tarket < 90);{
      console.log("you loss")
     }



     student = 90;
     if(student > 50){
      console.log("you pass")
     }
     else(student < 40);{
      console.log("you fail")
     }
  
     let myArr = ["fan" , "camera" , "34" , "null","true"]
     console.log(myArr.length);
     //myArr.pop();
     //myArr.push("zayan")
     //myArr.shift()
     //myArr.unshift("zayan")
     //console.log(myArr);

//console.log(Boolean(50))
//console.log(Boolean(-50))
//console.log(Boolean('string'))
//console.log(Boolean(2+6))
//false
//console.log(Boolean(0))
//console.log(Boolean(-0))
//console.log(Boolean(''))
//console.log(Boolean('null'))
let mylovelystring = "zayan is a good good";
//console.log(mylovelystring.length)
//console.log(mylovelystring.indexOf("good"))
  console.log(mylovelystring.slice(3,7)) 
     d = mylovelystring.replace("zayan","ahad");
     console.log(d , mylovelystring)


     let myDate = new Date();
     console.log(myDate.getTime());
     console.log(myDate.getFullYear());
     console.log(myDate.getDay());
     console.log(myDate.getMinutes());


     // dom manipulation

     let elem = document.getElementById('click');
     console.log(elem);
     tn = document.getElementsByTagName('button')
     console.log(tn);
     createdElement2 = document.createElement('p');
     createElement.innerText = "i am learn java"
     tn[0].appendChild(createElement); 