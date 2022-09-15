let carrosvend = Number(prompt('Digite quanto carros foram vendidos: '))
let totvend = Number(prompt('Digite o valor total das vendas: '))
let salario = 3000
let valcar = 200
let comissao = totvend * 0.05
let salariototal = salario + (valcar * carrosvend) + comissao
alert('O salário desse vendedor é de: ' + salariototal + ' reais.')