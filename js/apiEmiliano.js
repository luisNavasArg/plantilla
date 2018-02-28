self.addEventListener("load", inicio);

function inicio() {
   //Inicio, quienes somos, enlaces recomendados, documentos de interés, contactos
    var menues = ["INICIO", "QUIENES SOMOS", "ENLACES", "DOCUMENTOS", "CONTACTOS"];
    var ids = ["inicio", "quienes", "enlaces", "documentos", "contactos"];
    for (var a = 0; a < menues.length; a++) {
        var btn = document.createElement("div");
        var t = document.createTextNode(menues[a]);
        btn.appendChild(t);
        btn.id = ids[a];
        btn.className = "menu";
        btn.addEventListener("mouseover", mostrarMas);
        document.body.appendChild(btn);
    }
    var til = "Somos una organización que reúne más de 20 años en la defensa y promoción de los derechos de las personas con discapacidad y otros grupos considerados cocialmente vulnerables.Creemos y trabajamos denodadamente en el marco de los derechos humanos con la convicción que la educación es la base fundamental para ls construcción de sociedades mas justas";

    var pagina = document.createElement("div");
    var text = document.createTextNode(til);
    pagina.appendChild(text);
    pagina.className = "paginas";
    pagina.id = "textoSomos";
    document.body.appendChild(pagina);




}

function mostrarMas() {
    //alert(this.id);
    var menues = ["item1", "item2", "item3", "item4", "item5"];
    var ids = ["item1", "item2", "item3", "item4", "item5"];


//creo la variable y le asigno el elemento
//capturo por medio del id el elemento que quiero

//var nuevo = document.createElement("div");
//var yo = document.getElementById(this.id);

//var t = document.createTextNode("");
//nuevo.appendChild(t);

//nuevo.className = "menu";

//document.body.appendChild(nuevo);
//document.body.appendChild(yo);

/*
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
    }*/

}
