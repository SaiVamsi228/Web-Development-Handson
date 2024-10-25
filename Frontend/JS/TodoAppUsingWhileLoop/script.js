let todo = [];

req = prompt("Please enter your request: ")

console.log(req);

while (true){

    if (req == "quit"){
        console.log("Ending the services!");

        break;      
    }

    if (req == "list"){
        console.log("---------");
        
        for (task of todo){
            console.log(task);
            
        }
        console.log("---------");
    }

    else if (req == "add"){
        let task = prompt("Please enter the task you want to add: ");

        todo.push(task);

        console.log("task added");
    }

    else if (req == "delete"){

        task = prompt("Enter the task you want to delete");

        if (todo.includes(task)){

            let ind = todo.indexOf(task);

            todo.splice(ind,1);

            console.log("task deleted");
        }

        else{
            console.log("The entered task does not exist!");            
        }
    }

    else{
        console.log("Enter valid request ! ");
        
    }


    
    req = prompt("Please enter your request: ")
}

