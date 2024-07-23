// Promise = An object that manages asynchronus operationis
// Wrap a Promise Object around {asynchronus code}
// PENDING => RESOLVED OR REJECTED
// new Promise((resolve, reject) =>{asynchronus code})

// do these in order

// 1. walk the dog
// 2. clean the kitchens
// 3. take out the trash

// callback

// function walkDog(callback){
//     setTimeout(() =>{
//         console.log("U walk the dog");
//         callback();
//     }, 1500);
// }

// function cleanKitchen(callback){
//     setTimeout(() =>{
//         console.log("U clean the kitchen");
//         callback();
//     }, 1000);
// }

// function takeTrash(callback){
//     setTimeout(() => {
//         console.log("U take out the trash");
//         callback();
//     }, 2000);
// }

// walkDog(() =>{
//     cleanKitchen(() =>{
//         takeTrash(() => console.log("Finish all chores"));
//     });
// });

// Promise

function walkDog1(){
    return new Promise((resolve, reject) =>{

        const walkDog = false;

        if(walkDog){
            setTimeout(() =>{
                resolve("U walk the dog");
            }, 2000);
        }else{
            reject("U didnt walk the dog");
        }
        
    });
}

function cleanKitchen1(callback){
    return new Promise((resolve, reject) =>{

        const cleanKitchen = true;
        
        if(cleanKitchen){
            setTimeout(() =>{
                resolve("U clean the kitchen");
            }, 1500);
        }else{
            reject("U didnt clean the kitchen");
        }
    });
}

function takeTrash1(callback){
    return new Promise((resolve, reject) =>{
        const takeTrash = true;
        if(takeTrash){
            setTimeout(() =>{
                resolve("U take out the trash");
            }, 3000);
        }else{
            reject("U didnt take the trash");
        }
       
    });
}

walkDog1().then(value => {
    console.log(value);
    return cleanKitchen1();
}).then(value =>{
    console.log(value);
    return takeTrash1();
}).then(value =>{
    console.log(value);
    console.log("U finish all chores");
}).catch(err =>{
    console.log(err);
})


// .then is for reslove, .catch is for reject, .final
