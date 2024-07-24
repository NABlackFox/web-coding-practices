function walkDog1(){
    return new Promise((resolve, reject) =>{

        const walkDog = true;

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

async function doChores(){
    try{
        const walkDogResult = await walkDog1();
        console.log(walkDogResult);
    
        const cleanKitchenResult = await cleanKitchen1();
        console.log(cleanKitchenResult);
    
        const takeTrashResult = await takeTrash1();
        console.log(takeTrashResult);
        console.log("Finish all chores");
    } catch (err){
        console.log(err);
    }
}

doChores();