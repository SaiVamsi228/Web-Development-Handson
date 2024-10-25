function CurrentTime(){

    let date = new Date()

    let curDate = date.toLocaleDateString()
    let curTime = date.toLocaleTimeString()

    return <h4>{curDate} -{curTime}</h4>

    
}

export default CurrentTime;