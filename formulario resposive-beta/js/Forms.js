var Forms = function(){
    //METODOS
    this.paginaInicial=function(){
         var text = "<img src='img/FONDO2.webp'  class='portada'/>";
         G.tag("section").innerHTML = text;
           
    };
    
    this.altaAlumno = function(){
       makeForm("ALTA ALUMNOS");
       if(G.id("form2") != null)
       {
         var img = 'src="img/ATRAS1.png"';
       }
       else img = 'src="img/ATRAS.png"';
       var text =   
       '<form class="form">'+
        '<div class="form__container">'+ '<label id="titulo">' +
        '<img '+ img +'id="atras" class="form__icon" onclick="F.paginaInicial();"/> ALTA ALUMNOS' +  
       " </label> "+
       '<div class="form__group">'+
       '<input type="text" autocomplete="off" name="Nombre" required class="form__input" placeholder=" ">'+
       '<label  class="form__label">Nombre:</label>'+
       '<span class="form__line"></span>'+
        '</div>'+
    '<div class="form__group">'+
       '<input type="text" id="name" autocomplete="off" name="Direccion" required class="form__input" placeholder=" ">'+
       '<label  class="form__label">Direccion:</label>'+
       '<span class="form__line"></span>'+
     '</div>'+ '<div class="form__group">'+
       '<input type="number" autocomplete="off" required  name="Dni" class="form__input" placeholder=" ">'+
       '<label for="user" class="form__label">Dni:</label>'+
       '<span class="form__line"></span>'+
   '</div>'+
   '<div class="form__group">'+
       '<input type="email" autocomplete="off" required  name="Correo" class="form__input" placeholder=" ">'+
       '<label class="form__label">Correo:</label>'+
       '<span class="form__line"></span>'+
   '</div>'+
   '<input type="submit" class="form__submit" value="Ingresar"/> '+
   '<input type="reset" class="form__reset" value="Cancelar"/> '+
   '</div>'+ '</form>';
       G.tag("section").innerHTML= text;
        makeEvent();    
    };
    this.listarAlumnos = function(){
        if(ALUMNOS.length == 0) alert("no hay alumnos registrados")
        makeListAlumnos();
    }
//FUNCIONES
var makeEvent = function(){
    G.tag("form").onsubmit = function(){
        var Alumno = new Object();
        Alumno.Nombre =  G.name("Nombre").value;
        Alumno.Dni =  G.name("Dni").value;
        Alumno.Direccion =  G.name("Direccion").value;
        Alumno.Correo =  G.name("Correo").value;
       
        ALUMNOS.push(Alumno);
        alert("Alumno ingresado correctamente");
        G.tag("form").reset();
    
        return false;
    }
};
var makeForm = function(){

       var text =  ''
       
      
       G.tag("section").innerHTML=text;
   }
};

var makeListAlumnos = function(){
   if(ALUMNOS.length === 0 ) return ;
   var text = '<div class="tabla__contenedor"><h3 class="tabla__titulo">LISTADO DE ALUMNOS <img src="img/BORRAR.png" class="tabla__icono" onclick="F.paginaInicial();"/></h3>'+
                    '<table class="tabla">'+
                        '<tr><th>NOMBRE</th> <th>DNI</th> <th>DIRECCION</th> <th>CORREO </th></tr>';
    for(var i = 0; i<ALUMNOS.length;i++){
        text += '<tr class="tabla__datos">'+
                    '<td>'+ ALUMNOS[i].Nombre+ '</td>'+ '<td>'+ ALUMNOS[i].Dni+ '</td>'+
                    '<td>'+ ALUMNOS[i].Direccion+ '</td>' + '<td>'+ ALUMNOS[i].Correo+ '</td>'+
                '</tr>';    
    }                    
        text+= '</table></div>';
        G.tag("section").innerHTML=text;                     
};
var ALUMNOS = new Array();
var F = new Forms();