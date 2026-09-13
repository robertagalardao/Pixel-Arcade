# 🕹️ PIXEL ARCADE

### Máquina de venda de fichas para arcade

**Trabalho 01 — Linguagens Formais e Autômatos**

## Sobre o projeto

O **PIXEL ARCADE** é uma máquina de venda de fichas para arcade,
desenvolvida a partir da modelagem de um **Autômato Finito Determinístico
(AFD)**.

A máquina aceita moedas de **5, 10 e 25 centavos** e libera uma ficha
quando o valor inserido é igual ou superior a **30 centavos**.

O funcionamento da máquina foi primeiro modelado no **JFLAP** e depois
implementado em uma página web interativa.

## Funcionamento

O AFD possui os estados:

`0, 5, 10, 15, 20, 25 e 30`

O estado `0` é o estado inicial e o estado `30` é o estado final.

Cada estado representa o valor acumulado pelas moedas inseridas. As
entradas possíveis são:

- `5` centavos
- `10` centavos
- `25` centavos

Por exemplo, ao inserir:

`5 + 10 + 10 + 5 = 30 centavos`

o caminho percorrido pelo AFD é:

`0 → 5 → 15 → 25 → 30`

Ao chegar ao estado final `30`, uma ficha é liberada.

Valores maiores que 30 centavos também são aceitos. Por exemplo:

`25 + 10 = 35 centavos`

Nesse caso, uma ficha é liberada e os 5 centavos restantes permanecem
como saldo para a próxima compra. A máquina não devolve troco.

## Modelagem no JFLAP

O autômato foi desenvolvido e testado utilizando o **JFLAP**.

![AFD da máquina](imagem-afd.png)

O arquivo do autômato utilizado no JFLAP está disponível neste
repositório como `jflapfinal.jff`.

## Interface

Para a implementação, foi escolhida a ideia de uma **máquina de fichas
para arcade**, utilizando uma estética retrô.

A interface permite:

- inserir moedas de 5, 10 e 25 centavos;
- visualizar o crédito acumulado;
- visualizar as fichas liberadas;
- visualizar o saldo restante;
- finalizar a compra.

Também foi criada uma opção para **visualizar o funcionamento do AFD**.
Nessa área são mostrados o estado atual, a última moeda inserida e a
transição realizada.

## Tecnologias utilizadas

- HTML
- CSS
- JavaScript
- JFLAP
- GitHub Pages

## Acesso online

O projeto pode ser testado através do GitHub Pages:

**[Acessar o PIXEL ARCADE](LINK)**

## Autores

**Roberta Elis Galardão**

Trabalho desenvolvido para a disciplina de **Linguagens Formais e
Autômatos**.