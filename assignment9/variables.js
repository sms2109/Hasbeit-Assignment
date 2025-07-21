function scopeExample() {
    if (true) {
        var varVariable = "I am var";
        let letVariable = "I am let";
        const constVariable = "I am const";

        console.log("Inside block:");
        console.log(varVariable);   
        console.log(letVariable);   
        console.log(constVariable); 
    }

    console.log("Outside block:");
    console.log(varVariable);   
    try{
        console.log(letVariable);   
        console.log(constVariable); 
    }
    catch{
        console.log("there is error");
    }
}

scopeExample();
