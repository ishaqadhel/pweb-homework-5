function validate() {
    if (document.forms["form"]["nama"].value == "") {
        alert("Mohon Mengisi Nama Anda");
        document.forms["form"]["nama"].focus();
        return false;
    }
    if (document.forms["form"]["fakultas"].selected == 0 ) {
        alert("Mohon Memilih Fakultas Anda");
        document.forms["form"]["fakultas"].focus();
        return false;
    }
    if (document.forms["form"]["nrp"].value == "") {
        alert("Mohon Mengisi NRP Anda");
        document.forms["form"]["nrp"].focus();
        return false;
    }
    if (document.forms["form"]["email"].value == "") {
        alert("Mohon Mengisi Email Anda");
        document.forms["form"]["email"].focus();
        return false;
    }
    if (document.forms["form"]["vaksin"].selected == 0 ) {
        alert("Mohon Memilih Status Vaksinasi Anda");
        document.forms["form"]["vaksin"].focus();
        return false;
    }
}