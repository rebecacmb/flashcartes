function criarCartao (categoria, pergunta, resposta){
let container = doument.getElementyByld ('container');
let cartao = document.createElement('article');
cartao.className= "cartao"
cartao.innerHTML =
<div class="conteudo-cartao">
<h3>${cartegoria}</h3>
<div class="pergunta-cartão">
<p>${pergunta}</p>
</div>
<div class="resposta-cartao"> 
<p>${resposta}</p>
</div>
</div>

container.appendChild(cartao);

}
