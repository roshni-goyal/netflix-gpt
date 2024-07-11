export const checkValidateData = (email, password,fullName) => {

    const isfullName = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(fullName);
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
   
    console.log(isfullName);

    if(!isfullName) return "Name not valid";
    if(!isEmailValid) return "Email ID is not valid";
    if(!isPasswordValid) return "Password is not valid";
    

    return null; //if email and password is valid then return null;

}