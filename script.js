const countleable = document.getElementById('countleable');
const increaseBtn = document.getElementById('increase-btn');
const decreaseBtn = document.getElementById('decrease-btn');
const reastBtn = document.getElementById('reast-btn');

let count = 0;
increaseBtn.onclick = function() {
    count++;
    countleable.textContent = count;

}
decreaseBtn.onclick=function(){
    count --;
    countleable.textContent=count;
}
reastBtn.onclick=function(){
    count=0;
    countleable.textContent=count;
}

let username;

document.getElementById('mysub').onclick = function() {
username=document.getElementById("mytext").value;
document.getElementById("myh1").textContent=`lakkofsii umma teetii 0915204925 ${username}`
}


const mycheckbox=document.getElementById('mycheckbox');
const visabtn=document.getElementById('visabtn');
const mastercardbtn=document.getElementById('mastercardbtn');
const paypalbtn=document.getElementById("paypalbtn");
const mysubmit=document.getElementById("mysubmit");
const subresalt=document.getElementById("subresalt");
const peymentresalt=document.getElementById("peymentresalt");

mysubmit.onclick=function(){
    if(mycheckbox.checked){
        subresalt.textContent="You are subscribed";
    }
    else{
        subresalt.textContent="You are not subscribed";
    }
    if(visabtn.checked){
        peymentresalt.textContent="Payment method: Visa";
    }
    else if(mastercardbtn.checked){
        peymentresalt.textContent="Payment method: MasterCard";
    }
    else if(paypalbtn.checked){
        peymentresalt.textContent="Payment method: PayPal";
    }
    else{
        peymentresalt.textContent="Payment method: Unselected";
    }
}
let day = 1;

switch(day){
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday");
        break;
    case 3:
        console.log("Today is Wednesday");
        break;
    case 4:
        console.log("Today is Thursday");
        break;
    case 5:
        console.log("Today is Friday");
        break;
    case 6:
        console.log("Today is Saturday");
        break;
    case 7:
        console.log("Today is Sunday");
        break;
    default:
        console.log("Invalid day number");
}

function happyBirthday(){
        if(happyBirthday){
            console.log("Happy birthday do you");
            console.log("Happy birthday do you");
            console.log("Happy birthday do you");
    }else{
        console.log("Today is not barithday")
    }
}

happyBirthday();

const textBox=document.getElementById("textBox");
const toFahrneheit=document.getElementById("toFahrneheit");
const toCelsius=document.getElementById("toCelsius");
const result=document.getElementById("result");

let temp;
function convert(){
if(toFahrneheit.checked){
    temp=Number(textBox.value);
    temp=temp * 9/5 + 32;
    result.textContent=temp.toFixed(1) +"°F";
}
else if(toCelsius.checked){
    temp=Number(textBox.value);
    temp=(temp-32)* (5/9);
    result.textContent=temp.toFixed(1) +"°c";
}
else{
    result.textContent="selecte a unit";
}
}
