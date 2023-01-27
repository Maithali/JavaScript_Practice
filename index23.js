//Regular expression
let a="INEURON";
let regex = /[A_Y]INEURON/;

if(regex.test(a)){
    console.log("true");
}
else{
    console.log("false");
}

let b="9INEURON";
let regexb = /[0-8]INEURON/;
if(regexb.test(b)){
    console.log("true");
}else{
    console.log("false");
}

let c="9INEURON";
let regexc = /[^0-8]INEURON/;
if(regexc.test(c)){
    console.log("true");
}else{
    console.log("false");
}

let d="9854324873";
let regd=/^[6-9]\d{9}/;
if(regd.test(d)){
    console.log("valid");
}else{
    console.log("invalid");
}