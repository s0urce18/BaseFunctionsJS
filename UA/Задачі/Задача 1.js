const A1 = 1;
let a2 = 1;
function func1(){
    // або сюди
}

function func2(){
    try{
        A1 = 0;
    }
    catch(e){
        console.log("Не можна змінювати змінну A1");
    }
    console.log(a2);
}

func1();
func2();