// Array Methods

let arr = [2,3,4,5,6]


arr.forEach((n)=>{
    if(n%2==0){
        console.log("Even");
    } else{
        console.log("Not Even");        
    }
});


let a = [
    {
        name: "Vamsi",
        marks : 95
    },
    {
        name: "Sai",
        marks : 95.8
    },
    {
        name: "Bombilishke",
        marks : 96.9
    },
    
]

a.forEach((student)=>{
    console.log(`${student.name} got ${student.marks} marks`);
    
})

let num = [2,2,3,4,5];

let double = num.map((ele)=>{
    return 2*ele;
})

console.log(double);

let evenNum = arr.filter((ele)=>{
    return ele%2 == 0;
});

console.log(evenNum);

let areArrEven = arr.some((el)=>el%2==0);

let areAllEven = evenNum.every((ele)=> ele%2 == 0);

console.log(areArrEven,areAllEven);

let ans = num.reduce((res,ele)=> {
    
    console.log(res);
    
    return res*ele;
});

console.log(ans);

let res = num.reduce((maxi,ele)=>{
    if(ele > maxi){
        return ele  ;
    } else{
        return maxi;
    }
})

console.log(res);


// Practice

arr = [10,20,65,20,-33,2,-222];

areMultiOf10 = arr.some((ele)=>{
    return ele%10 == 0;
})

console.log(areMultiOf10);

ans = arr.reduce((mini,ele)=>{
    if(ele < mini){
        return ele;
    } else{
        return mini;
    }
})

console.log(ans);

console.log(..."Sai Vamsi");

let obj = {
    email: "vamsi2284@gmail.com",
    paswd: "Ramuism"
};

let impNames = { ...obj, name: "rgv"};

console.log(impNames);

let newObj = {...arr};

console.log(newObj);

let names = ["tony","bruce","steve","peter"];

let [winner, runnerup,...others] = names;

console.log(winner,runnerup, others);


let student = {
    name: "Mokshith",
    age: 15,
    class: "Ist Year",
    subjects: ["Sanskrit","English","Maths","Physics","Chemistry"],
    username: "mok_siri",
    password: "Mokshith@123"
};

// let username = student.username;

let {username: usrname, password: pwd} = student;

console.log(usrname, pwd);

// Practice

let newArr = [1,3,4,6,7,9];

squaredArr = newArr.map((el)=>{
    return el * el;
});

console.log(squaredArr);


squaredAndSum = squaredArr.reduce((res,ele)=>{
    return res + ele;
});

console.log(squaredAndSum);