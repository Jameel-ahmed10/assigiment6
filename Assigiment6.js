// Chapter #1
// task #1

var a=1;
    alert("Error Please Enter a valid Password")


    // task #2

var a="Welcome to JS Land.... \n Happy Coding";
message=+newline;
var lineBreak
alert(a)
    
    // task #3
    var a="Welcome to JS land";
    var b="Happy codding";
    
    alert(a);
    alert(b)


    // task #4

var msg="Hello...I can run JS through my web browser's console"
console.log(msg);


    // Chapter #2
    
    // task #1
    var userName="Jameel Ahmed";
    var myName=19;
    var msg="Hello World";

    alert(userName);
    alert(myName,"Year Old")
    alert(msg)

        // task #2
        var name = "PIZZA"
        var msg = ""
        for (var i = name.length; i >= 1; i--){
            msg += name.slice(0,i) + "\n"
        }
        alert(msg)

        // task #3
        var mail="jameelahmed.karachi@gmail.com";
        alert("my email addess",mail);


        // task #4

        var msg= "I am trying to learn from the Book A smarter\n way to learn javaScript"
        alert(msg);

        // task #5
        var msg=" Yah! I can write HTML content through JavaScript"
        document.write(msg);

        // task #6

        var msg="==========%^^%=========="
        alert(msg);

        // task #7
        var age=15;
        alert("I am",age,"year old");

        var age=1990;
        document.write("My birth year is ", age);

        // chapter #4

        // legal variable
        // 1  HelloWord
        // 2  helloWorld
        // 3  helloworld
        // 4  hello1world
        // 5  helloworld1

        // illegal varriable
        // 1   1helloworld
        // 2  .helloworld
        // 3   ,helloworld
        // 4    Helloworld
        // 5    hello world


        // chapter #5

        // task #1

        adding
        var val1 = 3;
        var val2 = 5;
        var result=val1+val2;
        document.write("Sum of" + val1 + "and" + val2 + "is" +result);

    // task#2


        subtract
       var val1 = 3;
        var val2 = 5;
        var result=val1-val2;
        document.write("Subtract of" + val1 + "and" + val2 + "is" +result);

        Multipication

         var val1 = 3;
        var val2 = 5;
        var result=val1*val2;
        document.write("Multipication of" + val1 + "and" + val2 + "is" +result);


      dividing
         var val1 = 3;
        var val2 = 5;
        var result=val1/val2;
        document.write("Dividing of" + val1 + "and" + val2 + "is" +result);


        // task #4

    var price=600;
    var ticket=5;
    var result=price*ticket
    document.write("Total cost to by" + ticket + "tickets to a movie is" + price + "PKR")


    // task #5

    for(var i=1 ; i<=10 ; i++){
        document.write("4" + "x" + i + "=" + i*4 + "<br>")
    }


        // task #6

    var c=21;
    var f=77;
    document.write((f-32)*5/9 + "C is" + f + "F" +  "<br>");
  
    document.write((c*9/5+32) + "F is" + c + "C");




    // task #7

    var priceItem1=650;
    var quantityItem1=3;
    var totalPrice1= priceItem1*quantityItem1;
    var priceItem2=100;
    var quantityItem2=7;
    var totalPrice2=priceItem2*quantityItem2;
    var shippingCharge=100;
    var totalCost=totalPrice1+totalPrice2+shippingCharge;
    document.write("Price of item 1 is " + priceItem1 + "<br>")
    document.write("Quantity of item 1 is " + quantityItem1 + "<br>")
    document.write("Price of item 2 is " + priceItem2 + "<br>")
    document.write("Quantity of item 2 is " + quantityItem2 + "<br>")
    document.write("Shipping Charges " + shippingCharge +"<br><br>")

    document.write("Total Cost of your order " + totalCost)


    // task #8


    var totalMark=980;
    var obtMark=804;
    var percentage=obtMark/totalMark*100;
    document.write("Total marks : "+ totalMark + "<br>");
    document.write("Marks obtained :" + obtMark+ "<br>");
    document.write("Percentage" + percentage)


    
    
    // task #9

    var usDoller=10;
    var pakRup1=104.80;
    var pakRup=28;
    var saudiRiyal=25;
    var total=saudiRiyal*pakRup;
    var total1=usDoller*pakRup1;
    document.write("Total Currency of PKR is =" + (total1+total))


    // task 11

    var currentYear=2016;
    var birthDay=1992;
    var yourAge=currentYear-birthDay;

    document.write("Current Year :" + currentYear+ "<br>");
    document.write("Birth Year : " + birthDay +  "<br>");
     document.write("your Age is :" + yourAge);



    // task 13

    var favSnack= "chocolate chip";
    var currentAge=15;
    var estimatemaxAge=65;
    var amountsnackDay=3;
    var need=(estimatemaxAge-currentAge)*amountsnackDay;
    document.write("Favourite Snack: " + favSnack +"<br>");
    document.write("Current Age: " + currentAge +"<br>");
    document.write("Estimated Maximum Age: " + estimatemaxAge +"<br>");
    document.write("Amount of snacks per day: " + amountsnackDay +"<br>");
    document.write("You will need" +need + favSnack+"to last you until the ripe old age of "+estimatemaxAge);




    // chapter 6-9

    // task 1


    var i=10;
    document.write("The value of a is :" + i +"<br>"+"<br>")
    document.write("------------------------------- <br>")
    document.write("The value of ++a is :" + ++i +"<br>");
    document.write("Now the value of a is :" + i +"<br>"+"<br>")
    document.write("The value of a++ is :" + i++ +"<br>");
    document.write("The value of a is :" + i +"<br>"+"<br>");
    document.write("The value of --a is :" + --i +"<br>");
    document.write("The value of a is :" + i +"<br>"+"<br>");
    document.write("The value of a-- is :" + i-- +"<br>");
    document.write("The value of a is :" + i +"<br>"+"<br>");
    

    // task 2

    var a=2;
    var b=1;

    var result = --a - --b + ++b + b--;

    --a;
    --a - --b;
    --a - --b + ++b;
    --a - --b + ++b + b--;
    document.write("a = " + a +"<BR>");
    document.write("b = "+ b + "<br>");
    document.write("result = "+ result);


    // task 3

    var a = prompt("Enter the table number");
    for(var i=1 ; i<=10 ; i++){
        document.write(a + "x" + i + "=" + a*i + "<br>");
    }
   
    // task 5
    
    var sub= "English";
    var sub2="Math";
    var sub3="Urdu";
    var totalMark= 100;
    var obtmarkEng= 54;
    var obtmarkMath=54;
    var obtmarkUrdu=48;
    var percentage1= obtmarkEng/totalMark*100;
    var percentage2= obtmarkMath/totalMark*100;
    var percentage3= obtmarkUrdu/totalMark*100;
    var total1= totalMark+totalMark+totalMark;
    var total2 = obtmarkEng+obtmarkMath+obtmarkUrdu;
    var total3 = percentage1+percentage2+percentage3;
    document.write("Subject " + " Total Mark" + " Obtained Mark " + " Percentage" + "<br>");
    document.write(sub + totalMark + obtmarkEng + percentage1 + "<br>");
    document.write(sub2 + totalMark + obtmarkMath + percentage2 + "<br>");
    document.write(sub3 + totalMark + obtmarkUrdu + percentage3 + "<br>");
    document.write(""+ total1+ total2+ total3)


    // Chapter 9 - 11

    // task 1

    var citi = prompt("Enter Your City");
    if(citi==="karachi"){
        alert("Welcome to city of lights")
    }
    else{
        alert("you are not live in karachi")
    }

    // task 2


    var gender=prompt("Enter Your Gender");
    if(gender==="male"){
        document.write("Good Morning Sir!")
    }
    else if(gender==="female"){
        document.write("good morning maam")
    }
    else{
        document.write("incorrect")
    }

    // task 3

    var traffic=prompt("Enter traffic light color");
    if(traffic==="red"){
        document.write("MUST StOP");
    }
    else if(traffic==="yellow"){
        document.write("Ready to move")
    }
    else if(traffic==="green"){
        document.write("move to now")
    }
    else{
        document.write("incorrect")
    }


    // task 4


    var fuel=prompt("Enter Your fuel in liter")
    if(fuel<=0.25){
        document.write("Please refill the fuel in your car")
    }
   

    // task 5

    var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
 var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
 var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
 if (true){
alert("True");
}
if (false){
alert("False");
}
 if("car" < "cat"){
    alert("car is smaller than cat");
    }
    

// task 6


var sub1 = +prompt("Enter Eng Mark");
var sub2 = +prompt("Enter Math Marks");
var sub3 = +prompt("Enter Urdu Mark");
var totalMark = +prompt("Enter total Marks");
var obtMark= sub1 + sub2 + sub3;
var percentage = obtMark/totalMark*100;


document.write("Total Marks = "+ totalMark +"<br>");
document.write("Obtained Mark = " + obtMark + "<br>");
document.write("Percentage = " + percentage + "<br>");
if(percentage>=80){
    document.write("Grade : A-one"+ "<br>")
}
else if(percentage>=70){
    document.write("Grade : A"+ "<br>")
}
else if(percentage>=60){
    document.write("Grade : B"+ "<br>")
}
else{
    document.write("Grade : Fail" + "<br>")
}

if(percentage>=80){
    document.write("Remark : Excellent "+ "<br>")
}
else if(percentage>=70){
    document.write("Remark : Good")
}
else if(percentage>=60){
    document.write("Remark : You need to improve")
}
else{
    document.write("Remark : Sorrrry")
}


    // task 7

    var no=6;
    var no1=+prompt("Enter Secret Number");
    if(no===no1){
        alert("Bingo Correct!")
    }
    else if(no1===7){
        alert("Close enough to the correct Answer")
    }
    else if(no1===5){
        alert("Close enough to the correct Answer")
    }
    else{
        alert("incorrect")
    }



    // task  10

    var weather=+prompt("Enter Weather");
    if(weather>40){
        alert("It is too hot outside");
    }
    else if(weather>30){
        alert("The Weather today is Normal.");
    }
    else if (weather>20){
        alert("Today's Weather is cool")
    }
    else if(weather>10){
        alert("OMG! Today weather is so cool.")
    }
    else{
        alert("Please Inser correct weather")
    }


    // task 11

    var val1 = prompt("Enter 1st value")
var val2 = prompt("Enter 2nd value")
var sign = prompt("enter Operator")
document.write(val1 + sign + val2)
if(sign === "+"){
    alert((+val1)+(+val2));
}
else if(sign=== "-"){
    alert(val1-val2);
}
else if(sign==="*"){
    alert(val1*val2);
}
else if(sign === "/"){
    alert(val1/val2);
}

