function validOtp(otp) {
    if (typeof otp === "string" && otp.length == 8 && otp.startsWith("ph", 0)) {
        return true;

    }
    else if(typeof otp !=="string"){
        return "Invalid";

    }
    else {
        return false;
    }
}
console.log(validOtp("ph-10985"));