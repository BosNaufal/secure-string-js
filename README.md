# Secure String js
Simple Javascript Encryptor / Decryptor to make your string or variable become secure. It will encrypt or Decrypt depend on your password.

[DEMO](http://codepen.io/BosNaufal/pen/YqZWvm) (Codepen)

[DEMO](http://jsbin.com/cahuqa/edit?html,css,js,output) (JSBin)

## Install
Include the [secure-string.js](./secure-string.js) to your HTML or import it to your module (es6/node), Then it's ready to run.

## Usage
```javascript
/**
  secureString()

  @param {String} action -> 'encrypt' or 'decrypt'

  @param {String} unsafeString -> String you want to encrypt/decrypt

  @param {String} password -> password. using pure alphabet / number without whitespace or special character

  @return {String}

*/


// Encrypt your string depend on your password
secureString('encrypt',"I'm a unsafeString",'yourPassword');
// return "q'K%208%20SLQ8DC0RPGLE"

// Decrypt your string depend on your password
secureString('decrypt',"q'K%208%20SLQ8DC0RPGLE",'yourPassword');
// return "I'm a unsafeString"

// When the password is wrong, it will not decrypt correctly
secureString('decrypt',"q'K%208%20SLQ8DC0RPGLE",'wrongPassword');
// return "v'P D XQVDIH5WULQJ"
```

## Hopefully it can be useful~

## Let's talk about some projects
Just Contact Me At:
- Email: [bosnaufalemail@gmail.com](mailto:bosnaufalemail@gmail.com)
- Skype Id: bosnaufal254
- twitter: [@BosNaufal](https://twitter.com/BosNaufal)

## License
[MIT](http://opensource.org/licenses/MIT)
Copyright (c) 2016 - forever Naufal Rabbani
