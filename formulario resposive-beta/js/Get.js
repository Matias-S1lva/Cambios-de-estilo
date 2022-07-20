var Gets = function(){
    this.id = function (id){
        return document.getElementById(id);
    }
    this.name= function(name){
        return document.getElementsByName(name)[0];
    }
    this.tag= function(tag){
        return document.getElementsByTagName(tag)[0];
        
    }
   
};
var G =new Gets();