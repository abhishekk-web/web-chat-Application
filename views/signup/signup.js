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
            window.alert("User successfully created");
        }
        else{
            console.log(err);
        }

    }
    
    catch(err){
        console.log(err);
    }

}