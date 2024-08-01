function validasi() {
    // Validasi untuk input teks
    var teks = document.forms["formku"]["teks"].value;
    if (!/^[a-zA-Z]+$/.test(teks)) {
        alert("Data yang diinput harus berupa huruf");
        document.getElementById("teks").focus();
        document.formku.teks.value = "";
        return false; // Menghentikan pengiriman form
    }

    // Validasi untuk input angka
    var number = document.forms["formku"]["number"].value;
    if (!/^[0-9]+$/.test(number)) {
        alert("Data yang diinput harus berupa angka");
        document.getElementById("number").focus();
        document.formku.number.value = "";
        return false; // Menghentikan pengiriman form
    }

    // Validasi untuk input email
    var email = document.getElementById("email").value;
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email === "" || !emailRegex.test(email)) {
        alert("Email anda belum benar");
        document.getElementById("email").focus();
        return false; // Menghentikan pengiriman form
    } else {
        alert("Pendaftaran Berhasil");
    }

    // Jika semua validasi berhasil
    return true; // Mengizinkan pengiriman form
}
