class Film {
    constructor(cim, rendezo, kiadasiEv) {
        if (typeof this.cim == 'string') { this.cim = cim;}
        else { document.getElementById("hibaCim") = "Nem jó formátum"; }
        if (typeof this.rendezo == 'string') { this.rendezo = rendezo;}
        else { document.getElementById("hibaRendezo") = "Nem jó formátum"; }
        if (typeof this.kiadasiEv == 'number') {this.kiadasiEv = kiadasiEv;}
        else { document.getElementById("hibaKiadasiEv") = "Nem jó formátum"; }
    }
    toString() {
        return this.cim + " " + this.rendezo+ " " +this.kiadasiEv;
    }
    elkuldes() 
}




