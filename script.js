var firstName = document.getElementById('firstName')
var lastName = document.getElementById('lastName')
var emailAddress = document.getElementById('emailAddress')
var password = document.getElementById('password')
var submit = document.getElementById("submit")
var form = document.getElementById("form");
var warningIcon = document.getElementById('invalidInput_warning')


form.addEventListener('submit', function() {
    var warningIcons = document.querySelectorAll('.invalidInput_warning')
    var inputItems = document.querySelectorAll('input')
    var warningExplanation = document.querySelectorAll('.registration form .input_element span')
    //for every item with an input type
    for (let i = 0; i<inputItems.length; i++) {
        //if there is no input in the field
        if (inputItems[i].value == '' || inputItems[i].value == null) {
            //prevents the page from reloading when you click on submit
            event.preventDefault();
            //add the InvalidInput class and display the warning icon
            inputItems[i].classList.add("invalidInput");
            warningIcons[i].style.display = 'block';
            warningExplanation[i].style.display = 'block';
        } else {
            inputItems[i].classList.remove("invalidInput");
            warningIcons[i].style.display = 'none';
            warningExplanation[i].style.display = 'none';
        }
    }
})
