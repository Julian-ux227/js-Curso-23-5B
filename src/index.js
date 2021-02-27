
// Julian Ureña #23 5B

const saludar = (nombre) => {

     console.log ('creando etiqueta h1, en el HTML');

     // Comentario de una sola linea.
     // El codigo comentado no lo lee el interprete de JS.

     /*
         Comentario de varias lineas.
         Uso Basico del DOCUMENTO OBJECT MODEL (DOM).
         Permite a JS modificar el HTML.
     */

    const h1 = document.createElement ('h1');
    h1.innerText = 'Hola, ${nombre}';

    document.body.append (h1);

}

const user = "Juancho";
saludar (user);