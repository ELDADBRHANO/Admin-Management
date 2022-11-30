const validator = require('validator');
const isEmpty = require('is-empty');

module.exports = validateRegister = (user) => {
    errors = {};
    user.name = isEmpty(user.name) ? "" : user.name;
    user.email = isEmpty(user.email) ? "" : user.email;
    user.password = isEmpty(user.password) ? "" : user.password;
    user.passwordConfirm = isEmpty(user.passwordConfirm) ? "" : user.passwordConfirm;

    if (validator.isEmpty(user.name)) errors.name = "First Name Is required";
    if (validator.isEmpty(user.email)) errors.email = "email Is required";
    if(!validator.isEmail(user.email)) errors.email = "email Is not valid";
    if (validator.isEmpty(user.password)) errors.password = "password Is required";
    if (!validator.equals(user.password, user.passwordConfirm)) errors.passwordConfirm = "Passwords not match"
    return {
        errors,
        isValid: isEmpty(errors)
    }
}