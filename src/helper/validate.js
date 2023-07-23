import toast from "react-hot-toast"

// validate login page username
export async function usernameValidate(values){
    const errors = usernameVerify({} , values);

    return errors;
}

export async function passwordValidate(values){
    const errors = passwordVerify({} , values);

    return errors;
}

// validate reset password
export async function resetPasswordValidate(values){
    const errors = passwordVerify({} , values);

    if(values.password !== values.confirm_pwd){
        errors.exist = toast.error("Password Not Match....!")
    }

    return errors;

}

// validate register form
export async function registerValidate(values){
    const errors = usernameVerify({} , values);
    passwordVerify(errors , values);
    emailVerify(errors , values);

    return errors;
}

// validate profile page
export async function profileValidation(values){
    const errors = emailVerify({} , values);
    return errors;
}
// *****************************************************************************************************


// validate password
function passwordVerify(error ={} , values){
    const specialChars = /[$&+,:;=?@#|'<>.-^*()%!]/ ;
    if(!values.password){
        error.password = toast.error('Password Required....!');
    }
    else if(values.password.includes(" ")){
        error.password = toast.error('Wrong Password....!');
    }
    else if(values.password.length < 4){
        error.password = toast.error('Password Must Be 4 Characters Long');
    }
    else if(!specialChars.test(values.password)){
        error.password = toast.error('Password Must Have Special Characters');
    }

    return error;
}


// validate username
function usernameVerify(error = {} , values){
    if(!values.username){
        error.username = toast.error('Username Required....!');
    }
    else if(values.username.includes(" ")){
        error.username = toast.error('Invalid Username....!');
    }

    return error;
}

// validate email
function emailVerify(error = {} , values){
    if(!values.email){
        error.email = toast.error('Email Required....!');
    }else if(values.email.includes(" ")){
        error.email = toast.error('Wrong Email')
    }else if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(values.email)){
        error.email = toast.error('Invalid Email')
    }

    return error;
}