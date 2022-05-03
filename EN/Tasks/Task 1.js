const A1 = 1;
let a2 = 1;
function func1(){
    // or here
}

function func2(){
    try{
        A1 = 0;
    }
    catch(e){
        console.log("You cannot change variable A1");
    }
    console.log(a2);
}

func1();
func2();