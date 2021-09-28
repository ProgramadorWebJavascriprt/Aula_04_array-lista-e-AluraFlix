/* Terça-feira,28/09/2021{à amanhã} das 08:30:50 as h+|-*/
var listafilmes = ["Yesterday", "A chegada", "Escola de Rock"];
// elemento            1     ,       2      ,        3
// indice               0    ,       1      ,        2
// var filme1 = "Yesterday";
// var filme2 = "A chegada";
//var filme3 = "Escola de Rock";
// experimente o h1, strong...
// adicionanado mais filmes:
listafilmes.push("Harry Potter3");
listafilmes.push("Harry Potter4");
listafilmes.push("Harry Potter5");
console.log(listafilmes.length);
// document.write("<p>" + listafilmes[0] + "</p>");
// document.write("<p>" + listafilmes[1] + "</p>");
// document.write("<p>" + listafilmes[2] + "</p>");
// document.write("<p>" + listafilmes[3] + "</p>");

for (var indice = 0; indice < listafilmes.length; indice++) {
  document.write("<p>" + listafilmes[indice] + "</p>");
  document.write("<p>" + indice + "</p>");
}
