function Random(){

    let number = parseInt(Math.random(100)*100 + 1 )
    return <h1 >
        Random Number is {number}
    </h1>
}


export default Random;