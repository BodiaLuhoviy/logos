let firstnameReg = /[a-zA-Z]{1,20}/ 
let secondnameReg = /[a-zA-Z]{1,20}/ 
let emailReg = /^([A-Za-z0-9_\-\.])+\@([a-z])+\.([a-z]{2,4})$/;
let passwordReg = /^\w{8,15}$/

let getID = id => document.getElementById(id)
let sign = document.querySelector('.btn-sign');

// getID('perevirka').addEventListener('click', ()=>{
//     console.log('clicked')
//     console.log('firstnameReg',firstnameReg.test(getID('firstName').value));
//     console.log('secondnameReg',secondnameReg.test(getID('secondName').value));
//     console.log('emailReg',emailReg.test(getID('eMail').value));
//     console.log('passwordReg',passwordReg.test(getID('passWord').value));
// })

// функціонал
let firstnameTest = false;
getID('firstName').addEventListener('blur', () => {
    // console.log(getID('firstName').value);
    firstnameTest =  firstnameReg.test(getID('firstName').value)
    if  (firstnameTest === true) {
        getID('firstName').style.border = '2px solid green'
    } else {
        getID('firstName').style.border = '2px solid red'
    }
})
let secondnameTest
getID('secondName').addEventListener('blur', () => {
    // console.log(getID('secondName').value);
    let secondnameTest = secondnameReg.test(getID('secondName').value);
    if  (secondnameTest === true) {
        console.log('true');
        getID('secondName').style.border = '2px solid green'
    } else {
        getID('secondName').style.border = '2px solid red'
    }
})
let emailTest 
getID('eMail').addEventListener('blur', () => {
    // console.log(getID('eMail').value);
    let emailTest = emailReg.test(getID('eMail').value)
    if  (emailTest === true) {
        getID('eMail').style.border = '2px solid green'
    } else {
        getID('eMail').style.border = '2px solid red'
    }
})
let passwordTest
getID('passWord').addEventListener('blur', () => {
    // console.log(getID('passWord').value);
    let passwordTest = passwordReg.test(getID('passWord').value)
    if  (passwordTest === true) {
        getID('passWord').style.border = '2px solid green'
    } else {
        getID('passWord').style.border = '2px solid red'
    }
})



let counter = 0;
getID('signCheck').addEventListener('click',function() {
    counter++
    if(counter%2 === 0){
        console.log('uncheck');
        document.querySelector('.btn-sign').disabled = true
    }
    else{
            document.querySelector('.btn-sign').disabled = false
    }
})


// modal-window & button
let f1 = document.forms.f1

getID('sign').addEventListener('click', () => {
    document.querySelector('.popup').style.display = 'block'
})

document.querySelector('.button-success').addEventListener('click', () => {
    document.querySelector('.popup').style.display = 'none'
    getID('firstName').value = ''
    firstnameTest = false
    getID('firstName').style.border = '1px solid lightgray'

    getID('secondName').value = ''
    secondnameTest = false
    getID('secondName').style.border = '1px solid lightgray'

    getID('eMail').value = ''
    emailTest = false
    getID('eMail').style.border = '1px solid lightgray'

    getID('passWord').value = ''
    passwordTest = false
    getID('passWord').style.border = '1px solid lightgray'
    document.querySelector('.btn-sign').disabled = true

    counter = 0
    finalCount = 0
    f1.chk.checked = false
});

function checkValid() {
    let firstnameTest =  firstnameReg.test(getID('firstName').value)
    let secondnameTest = secondnameReg.test(getID('secondName').value);
    let passwordTest = passwordReg.test(getID('passWord').value);
    let emailTest = emailReg.test(getID('eMail').value);
    let checkbox = document.querySelector('#signCheck').checked;
    
    //disable 
    if (firstnameTest && secondnameTest && passwordTest && emailTest &&checkbox){
        document.querySelector('.btn-sign').classList.add('blue')
        document.querySelector('.btn-sign').disabled = false
    }
}

let elements = document.querySelectorAll('.dani');
for(let i=0; i<elements.length; i++) {
    elements[i].addEventListener('keyup', checkValid);
}

document.querySelector('#signCheck').addEventListener('click', checkValid);



