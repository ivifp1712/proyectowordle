var escrita = "";
var l;
var fondo;
var cont;
var r = 1;
var repes;
let padre;
function tecla(valor) {
    for (let i = 1; i < 6; i++) {
        l = "pl"+i+r;
        if (document.getElementById(l).innerHTML == "") {
            
            document.getElementById(l).innerHTML = valor;
            padre = document.getElementById(l).parentNode;
            padre.style.border = "2px solid black";

            if (l == ("pl5"+r)) {
                for (let i = 1; i < 6; i++) {
                    escrita += document.getElementById("pl"+i+r).innerHTML 
                    }
                //console.log(escrita)
                //console.log(repes)
                //console.log(palabras)
                //console.log(palabras.includes(escrita));
                if ((dic.includes(escrita))) {
                    
                    //console.log("Si")
                    cont = 0;
                    repes = [];
                    for (let a in escrita) {
                        //console.log(a)
                        b = Number(a)+1;
                        //console.log(a)
                        //console.log(escrita[a]);
                        //console.log(psecreta[a]);
                        if (psecreta[a] == escrita[a]){
                            //console.log("SUUU")
                            fondo = `l`+b+r+``;
                            //console.log(fondo);
                            document.getElementById(fondo).style.backgroundColor = "#6aaa64";
                            //console.log("letra " + Number(b) + "adivinada");
                            repes.push(escrita[a]);
                            //console.log(repes);
                            cont += 1;
                            //console.log (repes.includes(escrita[a]))
                            if (repes.includes(escrita[a]) == true) {
                                for (let t = 1; t < 6; t++) {
                                    fondo = `l`+t+r+``;
                                    letra = `pl`+t+r+``;
                                    //console.log(fondo)
                                    //console.log(escrita[a]);
                                    //console.log(escrita[b]);
                                    if (document.getElementById(letra).innerHTML == escrita[a] && document.getElementById(letra).innerHTML != escrita[b]) {
                                        if (document.getElementById(fondo).style.backgroundColor == "orange") {
                                        document.getElementById(fondo).style.backgroundColor = "gray";
                                        break;
                                    }
                                    }
                                }
                            }
                        }else if(psecreta.includes(escrita[a]) && !(repes.includes(escrita[a]))){
                            fondo = `l`+b+r+``;
                            //console.log(fondo);
                            document.getElementById(fondo).style.backgroundColor = "orange";
                            //console.log("letra " + b + "adivinada pero no en su posicion");
                            repes.push(escrita[a]);
                            //console.log(repes);
                        }else{
                            fondo = `l`+b+r+``;
                            //console.log(fondo);
                            document.getElementById(fondo).style.backgroundColor = "gray";
                        }
                    }
                } else {
                    
                    document.getElementById("resultado").innerHTML = "<p>ESA PALABRA NO PUEDE SALIR NUNCA :((</p>";
                    document.getElementById("resultadobox").style.animation = "aparecer 2s";
                    document.getElementById("resultadobox").style.display = "inline-block";
                    document.getElementById("resultadobox").style.backgroundColor = "#ff6961";
                    document.getElementById("teclado").style.display = "none";
                    
                    function mensaje(){
                         
                        document.getElementById("resultadobox").style.display = "none";
                        document.getElementById("teclado").style.display = "grid";
                        borrar()
                        borrar()
                        borrar()
                        borrar()
                        borrar()
                      }
                      
                    setTimeout(mensaje, 1500);
                   

                }
                
                if (cont==5) {
                    //console.log("GANASTE, PALABRA ADIVINADA")
                    document.getElementById("resultado").innerHTML = "<p>ADIVINASTE LA PALABRA!</p>";
                    document.getElementById("resultadobox").style.animation = "aparecer 2s";
                    document.getElementById("resultadobox").style.display = "inline-block";
                    document.getElementById("resultadobox").style.backgroundColor = "#6AAA64";
                    document.getElementById("teclado").style.display = "none";
                    document.getElementById(`l`+b+r+``).style.animation = "aumentar 2s 1 alternate";

                } else {
                    //console.log(escrita)
                   
                   
                    //console.log(palabras.includes(escrita))
                    if (dic.includes(escrita)) {
                        r++;
                        newCasillas(r);
                    } 
                    escrita = "";

                }

                
            }
            break;
        }  
    }
}

function borrar() {
    var l;
    for (let i = 5; i > 0; i--) {
        l = "pl"+i+r;
        if (document.getElementById(l).innerHTML != "") {
            document.getElementById(l).innerHTML = "";
            padre = document.getElementById(l).parentNode;
            padre.style.border = "2px solid grey";
            break;
        }  
    }
    
}
var filas = 0;

function newCasillas(r) {
    if (filas != 5) {
        for (let i = 1; i < 6; i++) {
            i = String(i);
            r = String(r);
            document.getElementById("tabla").innerHTML += `<div class="letrau l`+i+`" id="l`+i+r+`" style="grid-column:`+i+`; grid-row:`+r+`;">
            <p id="pl`+i+r+`"></p>
            </div>`;
            document.getElementById("l"+i+r+"").style.gridColumn = r+"!important";
            document.getElementById("l"+i+r+"").style.gridRow = i+"!important";
            i = Number(i);
            r = Number(r);
            l1 = "l1"+r;

        }
        //console.log(document.getElementById("tabla").style.gridTemplateAreas)
        
        
    filas++;  
    }else{
        //console.log("GANASTE, PALABRA ADIVINADA")
        document.getElementById("resultado").innerHTML = "<p>NO HAS CONSEGUIDO ADIVINAR LA PALABRA :((</p>";
        document.getElementById("resultadobox").style.animation = "aparecer 2s";
        document.getElementById("resultado").innerHTML = "<p>La palabra era: "+ psecreta+"</p>";
        document.getElementById("resultadobox").style.display = "inline-block";
        document.getElementById("resultadobox").style.backgroundColor = "#ff6961";
        document.getElementById("teclado").style.display = "none";
        //console.log("HAS PERDIDO");
    }
    
}
