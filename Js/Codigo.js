var id = 2393551150766332;



function heroes(){
    var hero= document.getElementById("buscar").value;
    
    

    fetch("https://www.superheroapi.com/api.php/2393551150766332/"+hero)
    .then (function(response){
        return response.json();

    })
    .then(function(heros){
       
     var nom="<p> Nombre: "+heros.name+"</p>";
     var imagn="<img src='"+heros.image+"'width='100px' heigth='100px' "+"id="+"'images'"+">";
     var ocup="<p> ocupacion: "+ heros.work.occupation+"</p>"; 
     var gen= "<p> genero: "+ heros.appearance.gender+"</p>";  
     var raza= "<p> raza: "+ heros.appearance.race+"</p>"
       
        document.getElementById("Resultado").innerHTML+=nom;
        document.getElementById("Resultado").innerHTML+=ocup;
        document.getElementById("Resultado").innerHTML+=gen;
        document.getElementById("Resultado").innerHTML+=raza;
        document.getElementById("Resultado").innerHTML+=imagn;

        
    })
}

