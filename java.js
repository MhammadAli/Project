check = function(submit) {
    var str = document.getElementById('pass').value;
    if (str.length < 8) {
        alert("Password Must Have 8 Chars")
        return ("too_short");

    } else if (str[0].search(/[A-Z]/) == -1) {
        alert("The First Char Must Be Upper")
        return ("no_uletter");
    } else if (str.search(/[0-9]/) == -1) {
        alert("Password Must Have at Least One Digit")
        return ("no_number");

    } else if (str.search(/[a-z]/) == -1) {
        alert("Password Must have at Least 1 Small Letter")
        return ("no_sletter");

    } else if (str.search(/[-\_\&\*\#]/) == -1) {
        alert("Password Must have one special char like - _ # * &")
        return ("no_sletter");
    } else if (str.search(/[ ]/) != -1) {
        alert("White Space isn't Allowed")
        return ("no_uletter");
    }

}


ck = function(submit) {
    var str = document.getElementById('pas').value;
    if (str.length < 8) {
        alert("Password Must Have 8 Chars")
        return ("too_short");

    } else if (str[0].search(/[A-Z]/) == -1) {
        alert("The First Char Must Be Upper")
        return ("no_uletter");
    } else if (str.search(/[0-9]/) == -1) {
        alert("Password Must Have at Least One Digit")
        return ("no_number");

    } else if (str.search(/[a-z]/) == -1) {
        alert("Password Must have at Least 1 Small Letter")
        return ("no_sletter");

    } else if (str.search(/[-\_\&\*\#]/) == -1) {
        alert("Password Must have one special char like - _ # * &")
        return ("no_sletter");
    } else if (str.search(/[ ]/) != -1) {
        alert("White Space isn't Allowed")
        return ("no_uletter");
    }


}

function showpw() {
    var pw = document.getElementById('pass');
    if (pw.type == "text")
        pw.type = "password";

    else
        pw.type = "text";

}

function showpwd() {
    var pw = document.getElementById('pas');
    if (pw.type == "text")
        pw.type = "password";

    else
        pw.type = "text";

}


chk = function(submit) {
    var str = document.getElementById('tele').value;
    if (str.search(/[A-Z]/) != -1) {
        alert("Chars aren't Allowed in Phone Number")
        return ("no_uletter");
    } else if (str.search(/[a-z]/) != -1) {
        alert("Chars aren't Allowed in Phone Number")
        return ("no_sletter");

    } else if (str[0].search(/[0]/) == -1) {
        alert("you Should Enter a Valid Phone Number")
        return ("no_sletter");

    } else if (str[1].search(/[1]/) == -1) {
        alert("you Should Enter a Valid Phone Number")
        return ("no_sletter");

    }


}