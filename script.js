// Crie um array que receba 5 itens e exiba no console.


// Utilize um método para adicionar um nome ao inicio do array.


// Utilize um método para remover o último nome do array.


// Utilize um método para adicionar dois nomes ao fim do array.


// Utilize um método para remover o primeiro nome do array.


// Utilize um método para organizar em ordem crescente o seguinte array:
// const numbers = [7,5,6,3,8,9,2,1,4]

let ex1 = ["a", "b", "c", "d", "e"]
console.log(ex1)

ex1.unshift("coloquei no começo")
console.log(ex1)

ex1.pop()
console.log(ex1)

ex1.push("beba água", "ultimo")
console.log(ex1)
//ex1.push("ultimo")
//console.log(ex1)

/*Danda, qual é o jeito certo? o das linhas 28,29 ou
 o da linha 28 com só um termo nos parenteses + linhas 30, 31?*/

 ex1.shift()
 console.log(ex1)

 const numbers = [7,5,6,3,8,9,2,1,4]
 numbers.sort()
 console.log(numbers)