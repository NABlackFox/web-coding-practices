// create a function defined inside another funtion
// the functioni inside can access the varribale of the
// outter function, uses this to make the code shotter

// ============== Counter Example ============= //

function createCounter(){
    let count = 0;

    function increase(){ // create closure
        return count++;
    }

    function print(){
        console.log(count);
    }

    return {increase, print} // return an object that has increase() and .print() method
}

const counterMachine = createCounter(); // call the outer function

// now the couterMachine is an object that has .increase() and .print() method inside it

counterMachine.increase();
counterMachine.print();
counterMachine.increase();
counterMachine.print();
counterMachine.increase();
counterMachine.print();

// if we create new counterMachine then it will count again

const counterMachine1 = createCounter();

counterMachine1.increase();
counterMachine1.print();
counterMachine1.increase();
counterMachine1.print();
counterMachine1.increase();
counterMachine1.print();

// ============== Example 2 create prefix message =======/

// irl there are alot of message send in the terminal for dev ex:

// [Error] Function not define
// [Error] Database corrupted
// [Info] email not send 
// [Info] try send email 1 times

function logMessage(nameSpace){
    function printMessage(message){
        console.log(`[${nameSpace}] ${message}`);
    }

    return {printMessage};
}

infoMessage = logMessage("Info");
errorMessage = logMessage("Error");

infoMessage.printMessage("email not send");
infoMessage.printMessage("try send email 1 times");

errorMessage.printMessage("Function not define");
errorMessage.printMessage("try send email 1 times");