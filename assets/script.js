var generateBtn = document.querySelector("#generate");


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword(){
    // length prompt
    var lengthChoice = window.prompt(" Please choose a length between 8 and 128 characters.");
        if  (lengthChoice < 8 || lengthChoice > 128) {
            NaN (window.prompt("The length must be a value between 8 and 128"));
        } else if (!lengthChoice) {
            window.prompt(" Please choose a length between 8 and 128 characters.");
        } else {
    // lower letters confirm
    var lowerChoice = confirm("would you like to include lower case letters?");
    // upper letters confirm
    var upperChoice = confirm("would you like to include upper case letters?");
    // numbers confirm
    var numsChoice = confirm("would you like to include numbers?");
    // special characters confirm
    var SpcChoice = confirm("would you like to include special characters?");
        }

    // Input Validation
    if (!(upperChoice || lowerChoice || numsChoice || SpcChoice)) {
    alert("Please select at least one option for your new password!");
    
     lowerChoice = confirm("would you like to include lower Case letters?");
     upperChoice = confirm("would you like to include upper case letters?");
     numsChoice = confirm("would you like to include numbers?");
     SpcChoice = confirm("would you like to include special characters?");
    }

    // arrays of lower, upper, nums, and special
    var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var nums = ["1","2","3","4","5","6","7","8","9","0"];
    var special = ["!","@","#","$","%","^","&","*","<","-",">",",","."]

        //Concat if-statements for arrays 
        // Source for if-statement and math.random format: https://github.com/TiffanyCasey/Password-Generator/blob/master/script.js
        var passconcat = [];
        
        if (upperChoice) {
            passconcat = passconcat.concat(upper)

        }
        if (lowerChoice) {
            passconcat = passconcat.concat(lower)

        }
        if (numsChoice){
            passconcat = passconcat.concat(nums)

        }
        if (SpcChoice) {
            passconcat = passconcat.concat(special)

        }
        // defines new password
        var newpassword = "";
        //taking chosen vars and creating the random password 
        for (var i= 0; i < lengthChoice; i++){
            newpassword = newpassword + passconcat [Math.floor(Math.random () * passconcat.length)];
        }
        //returns the finished product.
        return newpassword;
}

generateBtn.addEventListener("click", writePassword);