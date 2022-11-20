//-----Regular Expression-------------//

// part 1
// popular Methods are : // exec // test // match // search

// let reg = /secret/; // simple 
//let reg = /secret/i; // the last i is not care of case sensitive so output can be seen by capital or small letter

// let email = "Hey buddies I am sending you a secret letter...";

// let result = reg.exec(email);
// let result = reg.test(email);

// let result = email.match(reg);
// let result = email.search(reg);

// console.log(result);

// part 2

function check(reg,str) {
    if(reg.test(str)){
        console.log(`${reg} match ${str}`);
    }else{
        console.log(`Not match`);
    }
}

let reg1 = /^hello/i; // ^ is searching the most firstly matching of word from start
let reg2 = /hello$/i; // $ is searching the lastly matching of word from end
let reg3 = /^h.llo$/i; // . instead of (e) is the meaning of any word accepted instead of (e) word 
// hbllo is match // h2llo is match
let reg4 = /h*llo/i; // * instead of (e) is the meaning of zero or more characters instead of (e) word 
//  h34wq4tllo (or) hllo is match
let reg5 = /ha?e?llo/i; // ? is represent of the word before ? // so a, e is optional // so it is okay to have a, e or have not
// hllo (or) hallo (or) hello is match

let str1 = "Mr Hello dd hello";
let str2 = "hello Mr. Smith";
let str3 = "Hey you are";

check(reg1,str2);

// part 3 

let re1 = /h[ae]llo/i; // [a,e] is optional // so it is okay to have a, e but it not accept zero
// hallo (or) hello is match // but --> hllo is not match

let re2 = /^[h]ello/i; // ^[h] is start with h letter  is accept
// hello (or) Hello is match // gello is not match

let re3 = /[^h]ello/i; // [^h] is not start with h letter is accept
// gello (or) aello is match // hello is not match

let re4 = /[A-Z]ello/i; // [A-Z] is optional within A to Z is accept
// Aello (or) Bello (or) Tello is match // hello (or) aello is not match

let re5 = /[a-zA-Z]ello/i; // [a-z] or [A-Z] is optional within a to z or A to Z is accept
// aello / Aello / bello /Bello /hello / Hello is match

let re6 = /[a-zA-Z0-9]ello/i; // [a-z] or [A-Z] or [0 to 9] is optional within a to z or A to Z is accept
// 1ello/ 4ello/ aello / Aello / bello /Bello /hello / Hello is match

let re7 = /[h]{2}ello/i; // [h]{2} is two time of having h is accept
// hhello (or) HHello is match // but hello is not match

let re8 = /[hbc]{2}ello/i; // [hbc] is optional with two time 
// hhello / bbello / ccello is match // but hello / bello /cello is not match

let re9 = /[hbc]{2,5}ello/i; // [hbc] is optional within two time and five time
// hhello/ hhhhhello / bbello/ bbbbello / ccello is match // but hello / bello /cello is not match

let re10 = /{[h]e}{3}llo/i; // start with h and  he is three time is accept
// hehehello is match
