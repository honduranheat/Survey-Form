function validateForm() {
    var x = document.forms['myForm']['emptyfield']
}

function validateAge() {
    var x, text;

    x = document.getElementById('number').value;

    if (isNaN(x) || x < 1 || x > 10) {
        text = 'Input not valid';
    } else {
        text = 'Input OK';
    }
    document.getElementById('errorMsg').innerHTML = text;
}