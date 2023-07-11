export const Validation = (values) => {

    const errors = {}


    const email_pattern = /^[^\s@]+\.[^\s@]{2,6}$/;
    const password_pattern = /^(?= .*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
    if (values.username === "") {
        errors.username ="Name is Required"
    }
    if (values.email === "") {
        errors.email = "Email is Required"
    }
    else if (!email_pattern.test(values.email)) {
        errors.email = "Email Not Valid"
    }
    if (values.password === "") {
        errors.password = "Password Required"
    } else if (!password_pattern.test(values.password)) {
        errors.password = "Password does not Match"
    }
    if (values.confirmpassword === "") {
        errors.confirmpassword = "Password Required"
    } else if (!values.confirmpassword.test(values.password)) {
        errors.confirmpassword = "Password does not Match"
    }
    return errors;
  
}
