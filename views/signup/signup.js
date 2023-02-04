async function signup(e) {

    try{

        e.preventDefault();

        const signupDetails = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }

        console.log(signupDetails);

        const response = await axios.post("http://localhost:3000/user/signup", signupDetails);
        console.log(response);
        if(response.status === 200){
            window.alert(response.data.message);
        }
        else if(response.status === 404){
            window.alert("User already exist");
        }

    }
    
    catch(err){
        document.body.innerHTML += `<div style="color: white;">${err}</div>`
        window.alert("User already exist");
    }

}