



  /*
function varTest(){
var x=1;

if(true){
  var x=2;
  console.log(x);
}

console.log(x);
return 'Done';
}

console.log(varTest());
*/




  /*
function letTest(){
  let x=1;
  
  if(true){
    let x=2;
    console.log(x);
  }
  
  console.log(x);
  return 'Done';
  }
  
  console.log(letTest());
*/



  /*
 const x=1;
  
  if(true){
      const  x=2;
    console.log(x);
  }
 
  console.log(x);

*/



/* const setting =[];
  setting.push("html","css"); 
  setting= ["sara"];----erreur ,on peur pas redefinir une const
  console.log(setting);
*/


/*
  const setting ={
    'name':'sara',
    'age':3
  }

  setting.name="ahmed";   // pas d'erreur
  console.log(setting.name);
*/

/*
  const setting ={
    'name':'sara',
    'age':3
  }
  Object.freeze(setting);
  setting.name="ahmed";   // erreur car on peux change dans l'objet a cause de Object.freeze(setting);
  console.log(setting.name);
  */
/*

//regular finction with no parameters

let regularFunction = function(){
  return 2;
}

//regular finction with One parameters

let regularFunction2= function(param){
  return param*2;
}


  //arrow function with no parameters
  let arrowtestOne = () => 2;

  //arrow function with One parameters
  let arrowtest2=(param) => param*2;
  console.log(arrowtest2(2));

  //arrow function with Multiple parameters

  let arrowTest3 = (param1,param2)=>param1*param2;

  console.log(arrowTest3(2,3));





  //regular fonction

    //il donne l'objet qui a appelé la focntion test
       let test =function(){ 
       document.getElementById('show').innerHTML=this;
       } 

       window.onload=test; //ici objet c'est window donc window object apelle la fonction test

    //button object call the function ,ici this represente le button
       document.getElementById('button').addEventListener('click',test); ////ici objet c'est HTMLButtonElement donc HTMLButtonElement object apelle la fonction test
*/

/*
//arrow function
   //il n'a pas de this ,il prend le this value d'apres le contexte(li hia fih)
   let test1 = () => document.getElementById('show').innerHTML=this;

   window.onload=test1; 

   document.getElementById('button').addEventListener('click',test1); ////ici objet c'est HTMLButtonElement donc HTMLButtonElement object apelle la fonction test




[1,2,3].forEach((v,k)=> console.log(v,k))



//exemple de this dans regular(defference)
var clas ={
  eleves :['john','mark','saad'],
  nom    :'CM2',
  aficheeleves:function(){
    
    this.eleves.forEach(function(v){ //this ici est de  eleves
      console.log(this.nom);//erreur
  })}}

  

//arrow function
  var clas ={
  eleves :['john','mark','saad'],
  nom    :'CM2',
  aficheeleves:function(){ // on peut faire aficheeleves(){
    
    this.eleves.forEach(v => { //this ici est de  parent donc il connait le nom
      console.log(this.nom);//erreur
    })}}

clas.aficheeleves();
console.log(clas.eleves.map(v=>'mr'+v))


      


let a ='1';
let b='2';

console.log({a,b});//{a: "1", b: "2"}

    


  class Classe {
    
    
constructor(name='cm2', ...eleves){
        this.eleves=eleves
        this.nom =name
  }

  afficheEleves(){
  console.log(`sara ${this.nom}`)
  this.eleves.forEach((v)=>{
    console.log(v)
  })
}
  

  }
  export class fille extends Classe{ // pour exporter ce class
    constructor(name='cm2', ...eleves){
      super(name, ...eleves)
      this.nom = `la class2 ${name}`
    }
    demo(){
        console.log('demo')
        this.afficheEleves()
}


  }



 
 let tab1=['f','marc','paul']
 let tab2='azerty'

  let c =new Classe("sara",'f','marc','paul'); // donc eleves =['f','marc','paul'] et le nom = 'sara'

  let c1=new Classe("sara",...tab1)// il donne la meme chose que la premiere
  let c2=new Classe("sara",...tab2) 
  //c2.afficheEleves()


 
  
  

let f =new fille("sara",...tab1)
f.demo()




//erreur
function fn2() {
  let i = 0;
  for (let i = i; i < 10; i++) {
    console.log(i);
  }
  console.log(i);
  // 0

  for (let j = i; j < 10; j++) {}
  console.log(j);
  // j is not defined
}
fn2();

   






const MyObject={
  foo: 1,
  bar: 2,
}
const { foo, bar } = MyObject;
foo; // 1
bar; // 2
console.log(foo);
console.log(bar);



//Utiliser un nom différent de la clé
var myObject = {
  foo: 1,
  bar: 2,
};
const { foo: renamedFoo } = myObject;
renamedFoo;


//Arguments de fonctions
function myFunction({ title, text }) {
  return title + ": " + text;
}
console.log(  myFunction({ title: "foo", text: "bar" })  ); 



//Déstructuration imbriquée
var myObject = {
  foo: {
    bar: 1,
  },
};
const { foo: { bar }} = myObject;
console.log(bar);




//Valeurs par défaut dynamiques
let defaultWho = "world!";
function hello(who = defaultWho.toUpperCase()) {
  return "Hello " + who;
}

console.log(hello()); // 'Hello WORLD!'
defaultWho = "Anyone?";
console.log(hello()); // 'Hello ANYONE?'

console.log(hello("Anyone?")); //'Hello Anyone?'



//erreur
const obj = { z: 42 };
const { x = 1, y = x + 1, z, w } = obj;
w; // undefined
x; // 1
y; // 2
z; // 42


var x = obj.x === undefined ? 1 : obj.x;
var y = obj.y === undefined ? x + 1 : obj.y;
var z = obj.z;
var w = obj.w;


//objet assign
const o = { y: 0 };
const o1 = { x: 1, y: 2 };
const o2 = { x: undefined, z: 3 };
Object.assign(o, o1, o2); // { x: undefined, y: 2, z: 3 }
console.log(o); // { x: undefined, y: 2, z: 3 }


//voir la page 21
const o1 = { x: 1 };
const o2 = { y: 2 };
const o = Object.assign({}, o1, o2);
console.log(o);







//creer une promesse
let users ={id:1,name:"sara"};

let getSaraPromesse=(id:number)=>{

  return new Promise((resolve,reject)=>{
  if(id==1){
    resolve(users)
  }
  else {
    reject("erreur")
  }

})
}


/*appeler une promesse

getSaraPromesse(1).then(
  r=> console.log(r),
  err=>console.log(err));

*/
/*ou

getSaraPromesse(1)
.then(r=> console.log(r))
.catch(err=> console.log(err))




//Les template strings 
// ES5
var multiline =
  "foo \
                 bar \
                 baz";

var multiline2 = "foo";
multiline2 += "bar";
multiline2 += "baz";

// ES6
const multiline1= `foo
                   bar
                   baz`;


      
                   
 const str1 = `foo
 bar`;                  
 
const str2 = `foo  bar`;

 console .log(str1);
 console .log(String.raw`FOO\nbar`);



//Template Literals
let nom="sara";

let exHTML=`
<div> ${nom}</div>
`
document.body.innerHTML=exHTML;


 // objet literals p:28
const username='sara',lastname='bara';
const user ={
  username,
  lastname
}
console.log(user);


//p:29/28
const user ={
  mymethode(param1){
    return param1;
  }
}
console.log(user.mymethode(1));


//dynamic property p:30
const myvar='val';
const user ={
  property:'myval',
  [myvar]:'value' // add dynamic property
}
console.log(user);


//Nom de propriétés calculées p:30
function action(type, data) {
  return {
    [type]: data,
  };
}
console.log(action(1,2))



//Map

const myObject={}
myObject['10']='string';
myObject[10]='Number'; //object il transforme key en string , 
//pour lui on a deux ont le meme key donc il va prendre le dernier (Number)
console.log(myObject);



const myMap = new Map([
  [1, "foo"], 
  [window, "bar"],
  ['1',"string"],
  [1,"Number"],
  [1,"lastNumber"],// dans cette cas il va prendre la derniere(lastNumber) car 2 ont le meme key
  [{a:1,b:2},"object"],
  [function dosometing(){},"function"],
]);


//ou on peut la declarer comme ca
const myMap1 = new Map();
myMap1.set(1, "foo");
myMap1.set(window, "bar");

console.log(myMap.get(window)); // il va afficher  "bar"
console.log(myMap.has(1)); //Pour tester si une clé est présente,

//console.log(myMap);
//console.log(myMap1);



//On peut itérer sur les entrées d'une map à l'aide de forEach
const myMap2 = new Map([[1, "foo"], [window, "bar"]]);

myMap2.forEach((key,value) => {
  // do something
  console.log(key,value);
});



//ou
const myMap2 = new Map([[1, "foo"], [window, "bar"]]);

for(const [key,value] of myMap2 ){
  console.log(key,value);

}
  
//afficher les keys et valeurs
const myMap = new Map([[1, "foo"], [window, "bar"]]);
const myKeys = [...myMap.keys()];
const myValues = [...myMap.values()];
console.log(myValues);
console.log(myKeys);


//eliminer les doublons
const myMap = new Map([[1, "foo"], [window, "bar"]]);
const dedupe = array => {
  return [...new Map(array.map(item => [item, true])).keys()];
};

console .log(dedupe([1, 1, 2, 3, 4, 4]));


// size du map
const myMap = new Map([[1, "foo"], [window, "bar"]]);
console.log(myMap.size);


//spread operator p:34
const array1=[3,4,5];



//
function sum(a,b,c){
  return a+b+c;
}
console.log(sum(...array1));
console.log(...array1);
console.log(array1);

//
const array2=[1,2,...array1,6,7];
console.log(array2);



//REST Paramater

function add(...myparameter){ //on peut 
let myNbr=0;
for(let i of myparameter){
  myNbr += i;
}
  return myNbr;
}
console.log(add(1));//on peut  entrer une ou plusieurs parametres lors de l'appel de la fonction
console.log(add(1,5,9));



// for in and forEach
const food=["burger","pizza","lasagnes"];


// for in
for (const key in food){
  console.log(`for in ${food[key]}`);
}

// forEach
food.forEach(elem =>{
  console.log(`forEach ${elem}` )})


// for of
for (const key of food){
  console.log(`for of ${key}` )
}


//string

const str = "sm00th";

for (const chr of str) {
  console.log(chr); // 's', 'm', '0', '0', 't', 'h'
}




//Les Maps
const m = new Map([["foo", "hello"], ["bar", "world"]]);

for (const [name, value] of m) {
  console.log(name + "->" + value); //"foo->hello", "bar->world"
}



//Set p:39
let mySet = new Set([1,2,3,3]); // dans set on met juste unique value ,il va pas afficher (3 ) 2 fois ==>{1, 2, 3}
console.log(mySet);
console.log(mySet[1]); // ===>undefined 


// de array a Set p:40
let mySet1 = new Set([1,2,'m',3]);
let MyArray=[1,2,3,3,4,'m',5];
mySet1=new Set(MyArray);  //====> Set(5) {1, 2, 3, 4, 5} il a eliminé les doublons
console.log(mySet1);

//de Set a array
console.log(...mySet1);

// ajouter dans Set  p:42(les infos importantes)
mySet1.add('sara');
console.log(mySet1);
let mySet2=new Set('sara');
console.log(mySet2);



//  Array from (creer un array a partir de tableu ...)
const nodes = Array.from([1,2,3]);
nodes.forEach(node => console.log(node));
console.log(nodes);

const arr = Array.of("hello", "world");
console.log(arr.join(" "));




//destruction Object

const user ={
  nom:'sara',
  cin:'hgh',
  age:12,
 
}
//const {name,age}=user;// ici destruction Object

const {nom,age,theme='default'}=user;// theme n'existe pas  dans user 
//=> si n'existe pas dans user on doit l'affecter la valeur 
//(default)sinon il va prendre la valeur qui est dans object User

console.log(name); // au lieu de faire console.log(user.name)
console.log(age);

console.log(`may name is ${nom} et mon age est ${age} et my theme is:${theme}`);



//si on a dans l'objet un autre objet

const obj1={
  nom:'sara',
  age:12,
  obj2:{
    nomObj:'sayo'
  }
}

// si on veut juste obj2
//const{nomObj}=obj1.obj2;   //on peut aussi ajouter d'autre meme
// si'il n'existe pas dans objet2 et on l'affecte des valeurs par défauts

const{nom:theName,age,obj2:{nomObj,ageObj2=14}}=obj1;// on a changé le nom du (nom)
console.log(`may name is ${theName} et mon age est ${age} et my object name Two is:${nomObj} et my Object age :${ageObj2}`);
//ageObj2 n'existe pas  dans user.obj2
//=> si n'existe pas dans user.obj2 on doit l'affecter la valeur 
//(14)sinon il va prendre la valeur qui est dans object user.obj2




//destructing tableau


const [first, second, , fourth] = [1, 2, 3, 4];
first; // 1
second; // 2
fourth; // 4
*/

//destruction Array
//const array1=['burger','pizza','chicken','riz',["orange","banana",["MOngo","Fraise"]]];
//console.log(array1[0]);

//const [one,two,tree,foor='default']=array1;
//console.log(`${one} ${two} ${tree} ${foor}`);//si'il n'existe pas dans array1 et on l'affecte la valeur par défaut

//const [one,,tree]=array1;//si on supprime la virgule il va affecter tree a pizza
//console.log(`${one}  ${tree} `);

//const [one,two,tree,foor,[One,Two,[Tree,Four]]]=array1;
//console.log(`${one} ${two} ${tree} ${foor} ${One} ${Two} ${Tree} ${Four}`);

//Rest Operator (important)
//const[one,two,tree, ...OtherFood]=array1;
//console.log(`${one} ${two} ${tree} ${OtherFood}`);

// pour pour échanger les variables a travers array
//let video ="book";
//let book='video';
//[book,video]=[video,book];

/*
const user={
  username:"sara",
  lastname:"el khoulta",
  skills:{
   html:'70%',
   css:'80%',                    
   js:["vueJs","angular"]          //si on veut transfere cette array a objet  js:{frameOne:"vueJs",frameTwo:"angular"} 
  }                                // => const{username,lastname,skills:{html,css,js:{frameOne:One,frameTwo:Two}}}=user;
};

//const{username,lastname,skills:{html,css,js:[One,Two]}}=user;
//console.log(`${username} ${lastname} ${html} ${css} ${One} ${Two} `);


//Destructuring Function Parameters
//function showMyInfo({username,lastname,skills:{html,css,js:[One,Two]}}){

  //console.log(`${username} ${lastname} ${html} ${css} ${One} ${Two} `);

//}
//showMyInfo(user);

*/



