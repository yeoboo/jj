function gambare()
{
// var name="obito";
// console.log(name);
// let nme="asdfgkj"
// console.log(nme);
let num1=Number(document.getElementById("khageban").value);
let num2=Number(document.getElementById("kages").value);
var subraction=num1-num2;
document.getElementById("jutsu").innerHTML=subraction;
}
function akamru(){
 
let num1=Number(document.getElementById("khageban").value);
let num2=Number(document.getElementById("kages").value);
var addition=num1+num2;
document.getElementById("jutsu").innerHTML=addition;


}
function yamanaka()
{
    let num1=Number(document.getElementById("khageban").value);
let num2=Number(document.getElementById("kages").value);
var multi=num1*num2;
document.getElementById("jutsu").innerHTML=multi;

}
function nara()
{
    let num1=Number(document.getElementById("khageban").value);
let num2=Number(document.getElementById("kages").value);
var check=num1>num2;
document.getElementById("jutsu").innerHTML=check;

}
 
function nara1(){
    let num1=Number(document.getElementById("khageban").value);
    var num2=Number(document.getElementById("kages").value);
    if(num1>num2){
            document.getElementById("jutsu").innerHTML="true";
    }
    else{
            document.getElementById("jutsu").innerHTML="false";
    }
    document.getElementById("p1").innerHTML="sono sharinghan umaiwa tukuma tei meiter"
}
function rel(){
    var num4=20,num5=40;
    var result=num4<num5;
    console.log( result);
    if(num4===num5){
console.log("deiiiiiiii");
    }
    else
    console.log("poda");
var price=50000,product='jimbeam';
if((price<20000)&&(product='Jackdaniels')){
    console.log("mavana maatna da yen pambara katta mandaya");

}
else
console.log("nakku chetha payale");
}
rel();
function pazham(){
    
    var x=document.getElementById("pazham").value
if(x=='apple'){
    console.log("aaaapleeeeeee");
}
else if(x=='pineapple')
{console.log('annachipalam')
}
}

// function age(){
//     age
// }

function incr()
{
    var dept="cs", exp="7"
cc
    if((dept="cs")&&(exp>"6"))
    {
        console.log("royalpass completed");

    }
    
    else
    console.log("more the salary more tha sdi");

}
incr();