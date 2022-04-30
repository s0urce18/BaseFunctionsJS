const A1 = 1;
let a2 = 1;
function func1(){
    // или сюда
}

function func2(){
    try{
        A1 = 0;
    }
    catch(e){
        console.log("Нельзя изменять переменную A1");
    }
    console.log(a2);
}

func1();
func2();