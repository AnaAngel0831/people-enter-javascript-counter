/*
var coffeFlavour = "esspreso";
var coffeTemp = "hot";
var coffeOunces = 100;
var coffeMilk = true;

var myCoffe = {
  flavour: "esspresso",
  temperature: "hot",
  ounces: 100,
  milk: true,       // nu are virgula ultima decat daca ai metoda dupa

  //metoda
  reheat: function(){
    if(myCoffe.temperature === "cold"){
      myCoffe.temperature ="hot";
      alert("yout coffe has been reheated");
    }
  }
};                //are punct si virgula

alert(myCoffe.ounces);

myCoffe.temperature = "cold";
myCoffe["temperature"] = "lukewarm";
myCoffe.reheat();


###############################################

 var Mark = {
   name:"mark",
   tshirtColor:"navy blue"
 };

 var lisa = {
   name:"lisa",
   tshirtColor: "red"
 };

 function Friend(name, tshirtColor){
   this.name = name;
   this.tshirtColor = tshirtColor;
 }

var denny = new Friend("denny","green");
var mimi = new Friend("mimi","pink");
alert(denny.name);
##########################################################


#############################
host objects are objects defined by the environment in which your code is run
a web browser is an example of a host environment.Some objects defined by the browser
include: Document/Window/Element/Event/Node/Comment/Console

core objects are objects defined by and built into Javascript :
Math/Object/Sring/Boolean/Array/Date/Number


###################################



function Friend(name){
  this.name = name;
}
 alert(this);
 #####################



function sayHello(){
  window.alert("hello");
}

window.sayHello();

function alert(){
  console.log("hello");

}

alert();

//we overwrite the alert function in window and now it alerts in Console
//be carefull

var example = 2;
var example = "example";
alert(example);
###############################################


var example = "value";  //our code is global you can overwrite
function alertExample(){
  alert(example);
  var anotherExample = "?";//local var
}
alertExample();
alert(anotherExample);//nu il vede
//we need to limit the global code as much as possible

############################################


 function alertNumber(){
   var one = "1";
   alert(one);

 }
alertNumber();//1
alert(one);//nu il vede ca e declarat local in functie

#####################################

var three ="3"
function alertNumber(){
  var one = "1";
  alert(one);
function alertAnother(){
  var two = "2";
  alert(two);
  alert(three);
  alert(one);//merge pt ca e locala pt functia de mai sus care o are pe asta
}
alertAnother();
alert(two);//nu merge
}
alertNumber();
*/
