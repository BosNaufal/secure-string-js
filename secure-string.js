/*! Copyright (c) 2016 Naufal Rabbani (https://github.com/BosNaufal)
* Licensed Under MIT (http://opensource.org/licenses/MIT)
*
* Version 0.0.1
*
*/

(function () {
  // Password should alphabet with no space
  var secureString = function(action,unsafeString,password){


    // alphabet list

    var alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9'];

    // Password to array
    var objPassword = password.split('');

    // Decode first if decrypt action
    if(action == 'decrypt') unsafeString = unsafeString;

    // split the unsafeString to array
    var obj = unsafeString.split('');


    /**
      calculations of the password
      Make every single char of password become a number
      depend on its order on alphabet array

      then put it on number variable
    */
    var number = 0;
    for (var i = 0; i < objPassword.length; i++) {
      for (var j = 0; j < alphabet.length; j++) {
        if( objPassword[i] == alphabet[j] ) number += j;
      }
    }


    /**
      ENCRYPT function
      will convert every single char of unsafeString become a number
      depend on its order on alphabet array

      then increase them with the num (calculations of the password char)
      the total of it will decrease by alphabet.length if they are more than alphabet.length
      after meet the perfect number ( not more than alphabet.length ) find a alphabet depend on that

      then push it to secure string

    */
    // ENCRYPT IT!
    if(action == 'encrypt'){
      var encryptIt = function(alpha){
        for (var j = 0; j < alphabet.length; j++) {
          if( alpha == alphabet[j] ){
            var outOfRange = function(num){
              if(num >= alphabet.length){
                num -= alphabet.length;
                return outOfRange(num);
              } else{
                return num;
              }
            };
            return alphabet[outOfRange(j+number)]; // encrypting depend on password calculations
          }
        }
        return alpha;
      }

      var secure = [];
      for (var i = 0; i < obj.length; i++) {
        var encrypt = encryptIt(obj[i]);
        secure.push(encrypt);
      }


      // encrypted string
      return secure.join('');
    }



    /**
      DECRYPT function

      will convert every single char of unsafeString become a number
      depend on its order on alphabet array

      then decrease them with the num (calculations of the password char)
      the total of it will increase by alphabet.length if they are less than alphabet.length
      after meet the perfect number ( not less than alphabet.length ) find a alphabet depend on that

      then push it to original string

      return original string
    */
    // DECRYPT IT!
    if(action == 'decrypt'){
      var decryptIt = function(alpha){
        for (var j = 0; j < alphabet.length; j++) {
          if( alpha == alphabet[j] ){
            var minusOne = function(num){
              if(num < 0){
                num += alphabet.length;
                return minusOne(num);
              } else{
                return num;
              }
            };
            return alphabet[minusOne(j-number)];
          }
        }
        return alpha;
      }


      var original = [];
      for (var i = 0; i < obj.length; i++) {
        var decrypt = decryptIt(obj[i]);
        original.push(decrypt);
      }

      // decrypted string
      return original.join('');
    }

  };

  // If support node / ES6 module
  if( typeof module === 'object' && module.exports ){
    module.exports = secureString;
  }
  // if using require (AMD) js
  else if (typeof define === 'function' && define.amd) {
    define(function (){ return secureString; });
  }
  // if script loaded by script tag in HTML file
  else if (typeof window !== undefined) {
    window.secureString = secureString;
  }

})();
