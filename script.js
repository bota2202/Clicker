gemas=0;
moedas=0;

//Mutiplicadores

dois=false;
tres=false;
quatro=false;
cinco=false;
dez=false;
cinquenta=false;
cem=false;

function atualizardados(){
    document.getElementById("gemas-principal").innerHTML=gemas + ' <i class="fa-solid fa-gem" style="color: #b938ff;"></i>';
    document.getElementById("moedas-principal").innerHTML = moedas +' <i class="fa-solid fa-coins" style="color: #ffc800;"></i>';
}

function clicar(){
    if(dois==true){
        moedas+=2;
    }else if(tres==true){
        moedas+=3;
    }else if(quatro==true){
        moedas+=4;
    }else if(cinco==true){
        moedas+=5;
    }else if(dez==true){
        moedas+=10;
    }else if(cinquenta==true){
        moedas+=50;
    }else if(cem==true){
        moedas+=100;
    }else{
        moedas+=1
    }
    atualizardados();
}

function resetar(){
    document.getElementById("overlay").classList.remove("dhidden")
    document.getElementById("tela-resetar").classList.remove("dhidden")
}