const validatePassword = (password) => {
    if(!password) return "Password is required";
    if(password.length < 8) return "Password is too short";
    if(!/[a-zA-Z]/.test(password)) return "Password must contain a letter";
    if(! /[0-9]/.test(password)) return "Password must contain a digit";
    if(! /[&@#$!*^]/.test(password)) return "Password must contain a special character";

    return null;
}

const validateEmail = (email) => {
    if(!email) return "Email is required";
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!emailRegex.test(email)) return "Email is not valid";
    return null;
}


const validateName = (name) => {
    if (!name) return "Name is required";
    if (/\d/.test(name)) return "Name cannot contain numbers";
    if (!/^[a-zA-Z\s'-]+$/.test(name)) return "Name contains invalid characters";
    return null;
};


export const formValidation = (email , password , name , signUp) => {

    if(validatePassword(password)) return validatePassword(password);
    if(validateEmail(email)) return validateEmail(email);
    if(signUp && validateName(name)) return validateName(name);
    

    return null;        
};