function cargarPagina(id, documento){
    let xhttp;
    let elemento = document.getElementById(id);
    let documento2 = documento;
    if(documento2){
        xhttp = new XMLHttpRequest();//un XMLHTTPREQUEST es para que no se recargue la página de nuevo
         xhttp.onreadystatechange = function(){//cada que cambie el estado del objeto
            if(this.readyState==4){
                if(this.status==200){
                    elemento.innerHTML=this.responseText;
                }
                if(this.status==404){
                    elemento.innerHTML=this.responseText;
                }
            }
        } 
    }
    xhttp.open("GET", documento2, true);
    xhttp.send();
}
 