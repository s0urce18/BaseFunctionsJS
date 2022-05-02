let s = "abcdef";
let a = s.split("");

for(let i = 0; i < a.length; i ++){
    a[i] = String.fromCharCode(a[i].charCodeAt() + 2);
}

s = a.join("");