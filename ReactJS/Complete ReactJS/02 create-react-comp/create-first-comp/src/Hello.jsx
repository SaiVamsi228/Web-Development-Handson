function Hello(){



    let myName = "Sai Vamsi";
    let number = 456;
    let fullName = ()=>{
        return "Sai Vamsi Sirikonda"
    }

    return <h3>
        MessageNo: {number} Hello this is the future speaking. I am your friend {fullName()}
    </h3>
}

export default Hello;