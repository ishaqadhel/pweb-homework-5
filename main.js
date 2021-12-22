function validate() {
    if (document.forms["form"]["nama"].value == "") {
        alert("Error: Nama Masih Kosong");
        document.forms["form"]["nama"].focus();
        return false;
    }
    if (document.forms["form"]["fakultas"].selected == 0 ) {
        alert("Error: Fakultas Masih Kosong");
        document.forms["form"]["fakultas"].focus();
        return false;
    }
    if (document.forms["form"]["nrp"].value == "") {
        alert("Error: NRP Masih Kosong");
        document.forms["form"]["nrp"].focus();
        return false;
    }
    if (document.forms["form"]["email"].value == "") {
        alert("Error: Email Masih Kosong");
        document.forms["form"]["email"].focus();
        return false;
    }
    if (document.forms["form"]["vaksin"].selected == 0 ) {
        alert("Error: Status Vaksinasi Masih Kosong");
        document.forms["form"]["vaksin"].focus();
        return false;
    }
}