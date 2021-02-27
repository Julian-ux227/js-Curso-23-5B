// Julian Rafael Ureña Marte #23

function repetir(nombre, veces) {

    /**
        *Imprimimos el nombre el nummero de vsc que indique veces
        *Estos son unos comentarios especiales para indicar 
        *a otros programadores que hace nuestra funcion.
        *@author Julian Ureña
        *@version 0.1.0
        *@param {string} nombre
        *@param {number} veces
        *@return {none}
    */

     //creamos un ciclo for.
     for (let index = 1; index <= veces; index++) {
        //La variable index se va incrementando en 1
        //hasta que index < veces deje de ser cierto.
        //mientras vamos agregando elementos P con el nombre
        //a nuestro documento HTML.
        let element = document.createElement ('p');
        element.innerText = nombre;
        document.body.appendChild(element);


     }

}

const nom = prompt("Escribe tu nombre");
const vcs = parseInt(prompt("Escribe las veces que lo mostraras"));
repetir(nom, vcs);