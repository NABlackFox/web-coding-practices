try{
    const dividend = window.prompt("Enter a dividend: ");
    const divisor = window.prompt("Enter a divisor: ");

    if (divisor == 0){
        throw new Error("You cant divide by zero")
    }
    const result = dividend / divisor;
    console.log(result)
}
catch(error){
    console.error(error);
}

