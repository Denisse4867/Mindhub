/*  INTRO>
DOM> DOCUMENT OBJECT MODEL 
Objeto> variable que dentro se puede tener otras variables de otros tipos, util para representar algo de la vida real
Modelo de objetos: interacciones entre si. 
Documento de obj: Pagina web - html
ES UNA INTERFAZ DE PROGRAMACION DE APLICACIONES (API) QUE PROPORCIONA UN CONJUNTO ESTANDAR DE OBJETOS PARA REPRESENTAR DOCUMENTOS HTML Y XML, UN MODELO ESTANDAR SOBRE COMO PUEDEN COMBINARSE DICHOS OBJETOS Y UNA INTERFAZ ESTANDAR PARA ACCEDER A ELLOS Y MANIPULARLOS.
A TRAVES DEL DOM LOS PROGRAMAS PUEDEN ACCEDER Y MODIFICAR EL CONTENIDO, ESTRUCTURA Y ESTILO DE LOS DOCUMENTOS HTML Y XML.
CUANDO UNA PAGINA WEB ESTA CARGADA, EL NAVEGADOR CREA UN MODELO DE OBJETOS DEL DOCUMENTO DE LA PAGINA. EL DOM DEL HTML ES CONSTRUIDO COMO UN ARBOL DE OBJETOS.
DONDE CADA ELEMENTO DEL HTML ES RERESENTADO POR UN NODO, MIENTRAS QUE LAS FLECHAS REPRESENTAN LAS RELACIONES ENTRE CADA UNO DE ESTOS.
*/

/*  CON EL MODELO DE OBJETOS, JS PUEDE CREAR UN HTML DINAMICO

MODIFICANDO LOS ELEMENTOS HTML DE LA PAGINA
MODIFICANDO LOS ATRIBUTOS HTML DE LA PAGINA
MODIFICANDO LOS ESTILOS CSS DE LA PAGINA
REMOVIENDO LOS ELEMENTOS Y ATRIBUTOS EXISTENTES
CREANDO NUEVOS ELEMENTOS Y ATRIBUTOS
REACCIONANDO A LOS EVENTOS HTML EXISTENTES EN LA PAGINA
CREANDO NUEVOS EVENTOS HTML EN LA PAGINA 
*/

/*  DOM & JS

ENCONTRANDO ELEMENTOS HTML> !-- document.getElementById("myId")  y asi con TagName // ClassName

MODIFICANDO ELEMENTOS HTML>  elemment.innerHTML = nuevo contenido HTML  // element.attribute = nuevo valor // element.style.property = nuevo estilo

AGREGANDO Y QUITANDO ELEMENTOS HTML>  document.createElement(element) : Crea un elemento HTML  // document.removeChild(element) : Quita un elemento HTML // document.appendChild(element) : agrega un elemento HTML // document.replaceChild(new,old) reemplaza un elemento HTML

ANIADIENDO CONTROLADORES DE EVENTOS> document.getElementById(id).onclick = funcion(){code} : aniade un evento click a un elemento HTML

*/


