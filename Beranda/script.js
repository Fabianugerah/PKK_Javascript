// Opening Loading Screen
window.addEventListener('load', function() {
    setTimeout(function() {
      document.querySelector('.loader-container').style.display = 'none';
    }, 1250); 
});

function validasi() {
    // Validasi untuk input teks
    var teks = document.forms["formku"]["teks"].value;
    if (!/^[a-zA-Z]+$/.test(teks)) {
        alert("Data yang diinput harus berupa huruf");
        document.getElementById("teks").focus();
        document.formku.teks.value = "";
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
        alert("Pertanyaan anda berhasil dikirim");
    }

    // Jika semua validasi berhasil
    return true; // Mengizinkan pengiriman form
}
