const form = document.querySelector("form")


form.addEventListener('submit', (e)=>{

    e.preventDefault()

    const ht = parseInt(document.querySelector("#height").value)

    console.log(ht);

    const wt = parseInt(document.querySelector("#weight").value)

    const res = document.querySelector("#results")

    if (ht === "" || ht < 0 || isNaN(ht) ){

        window.alert("Please Enter a valid height")
    }

    else if (wt === "" || wt < 0 || isNaN(wt) ){

        window.alert("Please Enter a valid weight")
    }
    
    else {

        const bmi = (wt/((ht/100)**2))

        const bmi_str= `${bmi.toFixed(1)}`

        if (bmi < 18.6){

            res.innerHTML = `BMI: ${bmi.toFixed(1)}  <br> Underweight`
        }

        else if (bmi >= 18.6 && bmi <= 24.9){

            res.innerHTML = `BMI: ${bmi.toFixed(1)}  <br> Healthy`
        }

        else{
            
            res.innerHTML = `BMI: ${bmi.toFixed(1)} <br> Overweight`

        }


    }
})