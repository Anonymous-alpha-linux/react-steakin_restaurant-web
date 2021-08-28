let Name, email, phone, note, people, date;
let totalInfor;


function sendifLite() {
    Name = document.getElementById("formNameLite").value;
    email = document.getElementById("formEmailLite").value;
    phone = document.getElementById("formPhoneLite").value;
    note = document.getElementById("formNoteLite").value;
    people = document.getElementById("formPeopleLite").value;
    date = document.getElementById("formDateLite").value;
    totalInfor = Name + "\n" + email + phone + note + people + date;

    postInfor();
    checkValidation();
}

function sendif() {
    Name = document.getElementById("formName").value;
    email = document.getElementById("formEmail").value;
    phone = document.getElementById("formPhone").value;
    note = document.getElementById("formNote").value;
    people = document.getElementById("formPeople").value;
    date = document.getElementById("formDate").value;
    totalInfor = Name + " / " + email + " / " + phone + " / " + note + " / " + people + " / " + date;
    postInfor();
    checkValidation();
}

function checkValidation() {
    if (Name == "" || email == "" || phone == "") {
        alert("Form is not valid");
    } else {
        $("#modelConfirm").modal('show');
    }
}


function postInfor() {
    document.getElementById('confirmName').innerHTML = Name;
    document.getElementById('confirmEmail').innerHTML = email;
    document.getElementById('confirmPhone').innerHTML = phone;
    document.getElementById('confirmNote').innerHTML = note;
    document.getElementById('confirmPeople').innerHTML = people;
    document.getElementById('confirmDate').innerHTML = date;
    document.getElementById('text').value = totalInfor;

    $("#qrcode").empty(); //funtion empty by jquery
    let qrcode = new QRCode(document.getElementById("qrcode"), {
        width: 200,
        height: 200
    });


    function makeCode() {
        let elText = document.getElementById("text");

        if (!elText.value) {
            alert("Input a text");
            elText.focus();
            return;
        }

        qrcode.makeCode(elText.value);
    }

    makeCode();

    $("#text").
    on("blur", function() {
        makeCode();
    }).
    on("keydown", function(e) {
        if (e.keyCode == 13) {
            makeCode();
        }
    });
}