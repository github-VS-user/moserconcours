function loginEleve() {
    window.location.href = "dashboard.html";
}

function loginAdmin() {
    let password = prompt("Entrez le mot de passe admin :");
    if (password === "admin123") {
        window.location.href = "admin.html";
    } else {
        alert("Mot de passe incorrect !");
    }
}
