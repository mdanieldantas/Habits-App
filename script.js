const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener('change',save)

function add() {
  const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert('Dia já incluso 🔴')
    return
  }

  alert('Adicionado com sucesso ✅')
  nlwSetup.addDay(today)
}

function save(){
  localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
}



const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {}
nlwSetup.setData(data)
nlwSetup.load()

/*
------Algoritmos e Lógica de programação----------

## O que é programar? Programação nada mais é do que ensinar o computador.
## Ensinar o computador

- Algoritmos
    
    Sequência de passos, conjunto de regras
    
- Lógica de programação
    
    Maneira de pensar
    
- Sintaxe
    
    Maneira correta de escrever
    
--------- **Executando JavaScript**----------

Podemos executar diretamente no Navegador

- Ferramenta `DevTools`
    
    Apertando o atalho `F12` no seu teclado
    
- Plataformas online
    
    [fronteditor.dev](https://fronteditor.dev)
    [codepen.io](https://codepen.io)
    
- Projeto no computador
<!-- em um arquivo index.html -->
<!-- importamos um arquivo .js no .html -->
<script src="./script.js"></script>

------# Variáveis e Tipos de dados----------------

Facilitando as informações

---

## Variáveis

Uma caixinha onde guardamos um tipo de dado para usar mais tarde.

---

#------------# Tipos de dados -------------

Informações que podem ser em `textos`, `números`, `booleanos` (valores lógicos: verdadeiro ou falso) ou dados mais `estruturados`


Variáveis e Tipos de dados
// declaro e atribuo valor
let boasVindas = 'Fala, Dev!';

// reatribuo valor
boasVindas = `Fala, Dev! Tudo beleza?!`;

// constante não pode mudar o valor
const serHumano = true;
serHumano = false // Erro!

#--------- Funções---------------

Agrupando e reutilizando o código

---

## Funções

- Agrupamento de código
- Reuso de código
- Mini programas dentro do programa maior
- Toda linguagem oferece muitas opções
// usando uma função
alert('Fala, Dev!')

// criando uma função
function alert(text) {
  return text
}

#---------- Objetos-----------------
É tudo sobre Objetos
## Tudo é objeto

- Atributos
    São as propriedades de um objeto
    
- Métodos
    São as funcionalidades de um objeto
    // criando um objeto
const celular = {
  cor: 'preto',
  ligar: function() {}
}

// usando um objeto
celular.cor // preto
celular.ligar() // executa função

------------# DOM-----------

Document Object Model

---

## Document Object Model - DOM

É a modelagem dos nossos elementos HTML em Objeto JavaScript 

---

##----------Document-------

Posso controlar minha página, meu documento HTML, pelo JavaScript, através do objeto `document`

document // objeto que existe em todo navegador
.querySelector('a') // seleciona a tag a
.click() // dá a ordem de clicar na tag a




const celular = {
  cor: 'preto',
  ligar: function () {
    const mensagem = "Ligando"
    alert(mensagem)
  }

}
celular.ligar()



*/