let B = true;




let modificarLink = function(){ 
   if(B){
        
        document.head.removeChild(form1)
        var L = document.createElement("link");
        document.head.appendChild(L);
        L.id = "form2";
        L.href = "css/ligh-mode/formulario1.css";
        L.rel = "stylesheet";

        document.head.removeChild(nav1);
        L = document.createElement("link");
        document.head.appendChild(L);
        L.id = "nav2";
        L.href = "css/ligh-mode/nav1.css";
        L.rel = "stylesheet";

        document.head.removeChild(foot1);
        L = document.createElement("link");
        document.head.appendChild(L);
        L.id = "foot2";
        L.href = "css/ligh-mode/footer1.css";
        L.rel = "stylesheet";

        document.head.removeChild(css1);
        L = document.createElement("link");
        document.head.appendChild(L);
        L.id = "css2";
        L.href = "css/ligh-mode/styles1.css";
        L.rel = "stylesheet";
       
        G.id("tel").setAttribute("src","img/TEL1.png");
        G.id("modo").setAttribute("src","img/SOL.png");

            if(G.id("atras") != null){
                G.id("atras").setAttribute("src","img/ATRAS1.png");
            }
      
        B= false;
        return;
    }
 
    else{
            if(!B){
                document.head.removeChild(form2);
                var L = document.createElement("link");
                document.head.appendChild(L);
                L.id = "form1";
                L.href="css/dark-mode/formulario.css";
                L.rel= "stylesheet";

                document.head.removeChild(nav2);
                L = document.createElement("link");
                document.head.appendChild(L);
                L.id = "nav1";
                L.href="css/dark-mode/nav.css";
                L.rel= "stylesheet";
    
                document.head.removeChild(foot2);
                L = document.createElement("link");
                document.head.appendChild(L);
                L.id = "foot1";
                L.href="css/dark-mode/footer.css";
                L.rel= "stylesheet";

                document.head.removeChild(css2);
                L = document.createElement("link");
                document.head.appendChild(L);
                L.id = "css1";
                L.href="css/dark-mode/styles.css";
                L.rel= "stylesheet";
                G.id("tel").setAttribute("src","img/TEL.png");
                G.id("modo").setAttribute("src","img/LUNA.png");

                  if(G.id("atras") != null){
                        G.id("atras").setAttribute("src","ATRAS.png");   
                   }
               
            }
            
            B=true;
            return;
        }
       
}


