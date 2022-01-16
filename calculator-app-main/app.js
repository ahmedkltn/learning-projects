//select everthing
//number from 0 to 9
const zero=document.querySelector(".zero");
const one=document.querySelector(".one");
const two=document.querySelector(".two");
const three=document.querySelector(".three");
const four=document.querySelector(".four");
const five=document.querySelector(".five");
const six=document.querySelector(".six");
const seven=document.querySelector(".seven");
const eight=document.querySelector(".eight");
const nine=document.querySelector(".nine");
// calculs
const point=document.querySelector(".point");
const sub=document.querySelector(".sub");
const plus=document.querySelector(".plus");
const subtract=document.querySelector(".subtract");
const multi=document.querySelector(".multi");
const scn=document.querySelector("#screen")
const del=document.querySelector(".del");
const reset=document.querySelector(".reset");
const calcul=document.querySelector(".calcul");
const topper=document.querySelector(".topper");
//////////////////////////////////////////////////////////////
let count=0;
zero.addEventListener("click",()=>{
    if(scn.innerHTML.length < 12){
    if(parseInt(scn.innerHTML)){
    scn.innerHTML+=0;
        }
    }
});
one.addEventListener("click",()=>{
    if(scn.innerHTML.length < 12){
     if(parseInt(scn.innerHTML)){
        scn.innerHTML+=1;
     }else{
        scn.innerHTML=1;
     }
    }
})
two.addEventListener("click",()=>{
    if(scn.innerHTML.length < 12){
     if(parseInt(scn.innerHTML)){
        scn.innerHTML+=2;
     }else{
        scn.innerHTML=2;
     }
    }
})
three.addEventListener("click",()=>{
    if(scn.innerHTML.length < 12){
     if(parseInt(scn.innerHTML)){
        scn.innerHTML+=3;
     }else{
        scn.innerHTML=3;
     }
    }
})
four.addEventListener("click",()=>{
    if(scn.innerHTML.length < 12){
     if(parseInt(scn.innerHTML)){
        scn.innerHTML+=4;
     }else{
        scn.innerHTML=4;
     }
    }
})
five.addEventListener("click",()=>{
    if(scn.innerHTML.length < 12){
     if(parseInt(scn.innerHTML)){
        scn.innerHTML+=5;
     }else{
        scn.innerHTML=5;
     }
    }
})
six.addEventListener("click",()=>{
    if(scn.innerHTML.length < 12){
     if(parseInt(scn.innerHTML)){
        scn.innerHTML+=6;
     }else{
        scn.innerHTML=6;
     }
    }
})
seven.addEventListener("click",()=>{
    if(scn.innerHTML.length < 12){
     if(parseInt(scn.innerHTML)){
        scn.innerHTML+=7;
     }else{
        scn.innerHTML=7;
     }
    }
})
eight.addEventListener("click",()=>{
    if(scn.innerHTML.length < 12){
     if(parseInt(scn.innerHTML)){
        scn.innerHTML+=8;
     }else{
        scn.innerHTML=8;
     }
    }
})
nine.addEventListener("click",()=>{
    if(scn.innerHTML.length < 9){
     if(parseInt(scn.innerHTML)){
        scn.innerHTML+=9;
     }else{
        scn.innerHTML=9;
     }
    }
})
del.addEventListener("click",()=>{
    if(parseInt(scn.innerHTML)){
        const myArray=scn.innerHTML.split("");
        myArray.pop()
        scn.innerHTML=myArray.join("")
        if(!scn.innerHTML){
            scn.innerHTML=0;
        }
     }
})
let val=[];
reset.addEventListener("click",()=>{
    if(parseInt(scn.innerHTML) || scn.innerHTML=="ERROR !"){
        scn.innerHTML=0;
        val=[];
     }
})
plus.addEventListener("click",()=>{
    val.push(parseInt(scn.innerHTML));
    scn.innerHTML=0;
    operator="plus";
    console.log(val)
})
multi.addEventListener("click",()=>{
    val.push(parseInt(scn.innerHTML));
    scn.innerHTML=0;
    operator="mutli";
    console.log(val)
})
subtract.addEventListener("click",()=>{
    val.push(parseInt(scn.innerHTML));
    scn.innerHTML=0;
    operator="subtract";
    console.log(val)
})
sub.addEventListener("click",()=>{
    val.push(parseInt(scn.innerHTML));
    scn.innerHTML=0;
    operator="sub";
    console.log(val)
})
calcul.addEventListener("click",()=>{
    val.push(parseInt(scn.innerHTML));
    switch (operator) {
        case "plus":
            const calPlus=(previousValue, currentValue) => previousValue + currentValue;
            console.log(val)
            console.log(val.reduce(calPlus))
            scn.innerHTML=val.reduce(calPlus);
            val=[];
            break;
        case "mutli":
            const calMulti=(previousValue, currentValue) => previousValue * currentValue;
            scn.innerHTML=val.reduce(calMulti);
            val=[];
            break;
        case "subtract":
            const calSubTract=(previousValue, currentValue) => previousValue / currentValue;
            console.log(val)
            console.log(val.reduce(calSubTract));
            const forSub=val.reduce(calSubTract);
            if(forSub!="Infinity"){
            scn.innerHTML=(forSub);
            }else{
             scn.innerHTML="ERROR !";
            }
            val=[];
        break;
        case "sub":
            const calSub=(previousValue, currentValue) => previousValue - currentValue;
            console.log(val.reduce(calSub))
            scn.innerHTML=val.reduce(calSub);
            val=[];
        break;
    }
})


