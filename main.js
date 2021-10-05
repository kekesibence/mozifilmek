class Film {
    constructor(cim, hossz) {
        if (typeof this.cim == 'string') { this.cim = cim;}
        else { document.getElementById("hibaCim") = "Nem jó formátum"; }
        if (typeof this.hossz == 'number') {this.hossz = hossz;}
        else { document.getElementById("hibaHossz") = "Nem jó formátum"; }
    }
    toString() {
        return this.cim + "( " + this.hossz + " perc)";
    }
    elkuldes() 
}




