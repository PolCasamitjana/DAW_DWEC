document.getElementById("desar").addEventListener("click", function() {
    const nom = document.getElementById("nom").value;
    const cognom = document.getElementById("cognom").value;
    const edat = document.getElementById("edat").value;

    const usuari = {
        nom: nom,
        cognom: cognom,
        edat: edat
    };
});

document.getElementById("mostrar").addEventListener("click", function() {
    const dadesDiv = document.getElementById("dades");
    dadesDiv.innerHTML = "Nom: " + usuari.nom + "<br>" +
                         "Cognom: " + usuari.cognom + "<br>" +
                         "Edat: " + usuari.edat;
});

function Usuari(nom, cognom, edat) {
    this.nom = nom;
    this.cognom = cognom;
    this.edat = edat;
};

Usuari.prototype.mostrarInfo = function() {
    const dadesDiv = document.getElementById("dades");
    dadesDiv.innerHTML = "Nom: " + this.nom + "<br>" +
                         "Cognom: " + this.cognom + "<br>" +
                         "Edat: " + this.edat;
};

document.getElementById("mostrarFormulari").addEventListener("click", function() {
    const nom = prompt("Introdueix el teu nom:");
    const cognom = prompt("Introdueix el teu cognom:");
    const edat = prompt("Introdueix la teva edat:");

    const usuari = new Usuari(nom, cognom, edat);
    usuari.mostrarInfo();
});