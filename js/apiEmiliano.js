self.addEventListener("load", inicio);

function inicio() {
    var menues = ["INICIO", "QUIENES SOMOS", "¿QUÉ HACEMOS?", "PRENSA", "LINKS"];
    var ids = ["inicio", "quienes", "hacemos", "prensa", "links"];
    for (var a = 0; a < menues.length; a++) {
        var btn = document.createElement("div");
        var t = document.createTextNode(menues[a]);
        btn.appendChild(t);
        btn.id = ids[a];
        btn.className = "menu";
        btn.addEventListener("mouseover", mostrarMas);
        document.body.appendChild(btn);
    }

}

function mostrarMas() {
    alert(this.id);
    var menues = ["item1", "item2", "item3", "item4", "item5"];
    var ids = ["item1", "item2", "item3", "item4", "item5"];


    for (var a = 0; a < menues.length; a++) {
        //creo la variable y le asigno el elemento
        //capturo por medio del id el elemento que quiero

        var nuevo = document.createElement("div");
        var yo = document.getElementById(this.id);

        var t = document.createTextNode(menues[a]);
        nuevo.appendChild(t);
        nuevo.id = ids[a];
        nuevo.className = "menu";

        document.body.appendChild(nuevo);
        document.body.appendChild(yo);
    }
}