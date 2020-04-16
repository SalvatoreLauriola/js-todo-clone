// Todo List


// Preparo Documento
$(document).ready(function() {




// Sorgente dati


//Elementi todo da far vedere nella lista
var todoItems = [
  'Mangiare',
  'Bere',
  'Dormire',
  'Cenare'

];

var list = $('.todo');

// Iteriamo sull'array grazie al template per inserire questi dati in Html. Iteriamo sulla length

for (var i = 0; i < todoItems.length; i++) {
  // variabile che prende dal template per poi elaborare.
  //Cloniamo Template che rielaboreremo e poi reinseriremo.

  // Accediamo al template nascosto, con clone prendiamo le sue cose e le salviamo qui all'interno
  // Rendiamo il tutto una variabile
  var elementList = $('.template li').clone();


  //Aggiungiamo del testo dinamico al template, in questo caso todoItems. Agiamo su elementList.

  //Usiamo la variabile creata in precedenza che accede al template per inserire gli items dell'array al suo interno. (!!Text non va bene perchè cancella le icone che sono nel markup)
  //Usiamo prepend per non sovrascrivere le icone ed aggiungere del testo prima e non dopo con append
  elementList.prepend(todoItems[i]);

  //Aggiungere il clone nuovamente alla lista
  list.append(elementList);
  }



});