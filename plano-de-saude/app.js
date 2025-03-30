

function calcular(){
    var idade = document.getElementById('idade');
    var idadeDoCliente = Number(idade.value);
    var valor = document.getElementById('valorBase');
    var valorBase = Number(valor.value);
    var res = document.getElementById('resposta');
    
    if(idadeDoCliente => 0 && idadeDoCliente < 19){
        var valorMensal = valorBase * 100/100;
        res.innerHTML = ("O valor do plano é de R$" + valorMensal + " por mês") 
    }
    if(idadeDoCliente >= 19 && idadeDoCliente < 29){
        var valorMensal = valorBase * 150/100;
        res.innerHTML = ("O valor do plano é de R$" + valorMensal + " por mês")
    }
    if(idadeDoCliente >= 29 && idadeDoCliente < 39){
        var valorMensal = valorBase * 225/100;
        res.innerHTML = ("O valor do plano é de R$" + valorMensal + " por mês")
    }
    if(idadeDoCliente >= 39 && idadeDoCliente < 49){
        var valorMensal = valorBase * 240/100;
        res.innerHTML = ("O valor do plano é de R$" + valorMensal + " por mês")
    }
    if(idadeDoCliente >= 49 && idadeDoCliente < 59){
        var valorMensal = valorBase * 350/100;
        res.innerHTML = ("O valor do plano é de R$" + valorMensal + " por mês")
    }
    if(idadeDoCliente > 60){
        var valorMensal = valorBase * 600/100;
        res.innerHTML = ("O valor do plano é de R$" + valorMensal + " por mês")
    }
    if(idadeDoCliente == " "){
        alert("Todos os campos devem ser preenchidos")
    }
    
    
      
}

function clickMenu(){
    var menu = document.getElementById("navegacao")
    if(menu.style.display == "block"){
        menu.style.display = "none"
    }else{
        menu.style.display = "block"
    }
}

function cadastrar(){
    var cadastrar = document.getElementById("cadastrar");
    alert("Cadastro efetuado com sucesso");    
}