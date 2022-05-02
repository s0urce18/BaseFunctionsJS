function camelCase(s, sep){
    let words = s.split(sep);
    for(let i = 1; i < words.length; i ++){
        words[i] = words[i][0].toUpperCase() + words[i].slice(1, words[i].length);
    }
    return words.join("");
}