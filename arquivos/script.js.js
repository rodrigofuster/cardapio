//armazenar o valor dos pedidos 
var pedido1;
var pedido2;
var pedido3;
var resposta;
// Pedidos
function escolherBacon(){
    document.getElementById("bacon").style.borderColor = "green"; 
    document.getElementById("classico").style.borderColor = "white";
    document.getElementById("paradise").style.borderColor = "white";
    pedido1 = "Bacon Burger";
}

function escolherClassico(){
    document.getElementById("classico").style.borderColor = "green";
    document.getElementById("bacon").style.borderColor = "white"; 
    document.getElementById("paradise").style.borderColor = "white"; 
    pedido1 = "Standart Burger";
}

function escolherParadise(){ 
    document.getElementById("paradise").style.borderColor = "green"; 
    document.getElementById("classico").style.borderColor = "white";
    document.getElementById("bacon").style.borderColor = "white";
    pedido1 = "Paradise Burger";
}
// Bebidas
function escolherCoca(){ 
    document.getElementById("coca").style.borderColor = "green"; 
    document.getElementById("suco").style.borderColor = "white";
    pedido2 = "Coca-Cola";
}

function escolherSuco(){ 
    document.getElementById("coca").style.borderColor = "white"; 
    document.getElementById("suco").style.borderColor = "green";
    pedido2 = "Suco de Laranja";
}
// Sobremesa 
function escolherGateau(){ 
    document.getElementById("gateau").style.borderColor = "green"; 
    document.getElementById("pudim").style.borderColor = "white";
    pedido3 = "Petit Gateau";
}

function escolherPudim(){ 
    document.getElementById("gateau").style.borderColor = "white"; 
    document.getElementById("pudim").style.borderColor = "green";
    pedido3 = "Pudim";
}
function finalizarPedido(){
    resposta = "Olá, gostaria de pedir um combo: " + pedido1 + ", " + pedido2 + " e " + pedido3 + ".";
    
    window.open("https://wa.me/+5551996062654?text=" + resposta);
}