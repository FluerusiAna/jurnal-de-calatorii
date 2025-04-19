// HELP (folosit în toate paginile)
function afiseazaHelp() {
    alert("Completează formularul și te voi contacta cât mai curând.");
}

// SCROLL SUS (folosit în toate paginile)
function scrollSus() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// CĂUTARE în tabel (folosit doar în destinatii.html)
function cautaDestinatie() {
    const inputElement = document.getElementById("searchInput");
    if (!inputElement) return; // dacă nu există câmpul, ieșim

    const input = inputElement.value.toLowerCase();
    const rows = document.querySelectorAll("#destinatiiTable tbody tr");

    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(input) ? "" : "none";
    });
}

// VALIDARE formular contact (folosit doar în contact.html)
function valideazaFormular() {
    const email = document.getElementById("email")?.value;
    const telefon = document.getElementById("telefon")?.value;

    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    const telRegex = /^[0-9]{10}$/;

    if (!email || !emailRegex.test(email)) {
        alert("Emailul nu este valid.");
        return false;
    }

    if (!telefon || !telRegex.test(telefon)) {
        alert("Numărul de telefon trebuie să aibă exact 10 cifre.");
        return false;
    }

    alert("Formular trimis cu succes!");
    return false; // simulăm trimiterea
}
