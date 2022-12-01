const validator = require('validator');
const isEmpty = require('is-empty');

 const validateRegister = ({user}) => {
    if(!user)return "user no"
    errors = {};
    user.name = isEmpty(user.name) ? "" : user.name;
    user.email = isEmpty(user.email) ? "" : user.email;
    user.password = isEmpty(user.password) ? "" : user.password;
    user.passwordConfirm = isEmpty(user.passwordConfirm) ? "" : user.passwordConfirm;

    if (validator.isEmpty(user.name)){return errors.name = "First Name Is required";} 
    if (validator.isEmpty(user.email)){ return errors.email = "email Is required";} 
    if(!validator.isEmail(user.email)){return errors.email = "email Is not valid";} 
    if (validator.isEmpty(user.password)){return errors.password = "password Is required";} 
    if (!validator.equals(user.password, user.passwordConfirm)){

        return errors.passwordConfirm = "Passwords not match"
    } 
    return {
        errors,
        isValid: isEmpty(errors)
    }
}

module.exports =validateRegister