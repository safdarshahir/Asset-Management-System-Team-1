
window.onload = init;

let maxAttemptCount;
let currentAttemptCount;


let  errorElement;
let signInElement;
function init(){

    document.getElementById("userLoginForm").onsubmit = validateUserEntry
    errorElement = document.getElementById("errorMessage");
    signInElement = document.getElementById("signInBtn")
    maxAttemptCount = 3;
}

function validateUserEntry(userForm){

    with(userForm){

        return (isNotEmpty(userName,"Username cant be empty.") &&
                isNotEmpty(password,"Password cant be empty.") &&
                isNotChecked(userType,"Specify user type."));
    }
}


function postValidation(isValid,errorMessage){

    maxAttemptCount--;
    //not valid
    if(!isValid){

        
        if(maxAttemptCount !== 0){
                if(errorElement!== undefined && errorElement !== null && errorMessage !== undefined && errorMessage !== null ){

                
                errorElement.innerHTML = errorMessage +"<br>" + "remaining attempts :"+maxAttemptCount;
    
            }
        }else{


            errorElement.innerHTML = "Maximum attempt!!! User Disabled";
            signInElement.disabled = true;


        }
 

    }    
    //valid
    else{
        if(errorElement!== undefined && errorElement !== null && errorMessage !== undefined && errorMessage !== null ){

            errorElement.innerHTML = "";

        }
    }

}

function isNotEmpty(inputElement,errorMessage){

    var isValid = (inputElement.value.trim() !== "");
    postValidation(isValid,errorMessage);
    return isValid;

}

function isNotChecked(userType,errorMessage){
    array.forEach(element => {
        console.log(element);
        
    });
}