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
var newInput = $('.add-element');

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



  // Rimozione todo item

  // Creiamo referenza nel cestino, si aspetts un click

  //cancelliamo questo todo perchè non funzionale con i nuovi elementi 


  // $('.todo li i').click()(function() {

    // il click è una versione abbreviata di .on

    // on prende il metodo click ed accetta anche un altro parametro: su chi vuoi effettuare clicK?
    // Il body è il padre piu generico che contiene la nuova informazione inserita quindi diventa lui recettore mentre il todo li i si sposta nell'on per targetizzare precisamente il click, eventi click su elementi i di todo.FUnge con elementi che sono al caricamento della pagina ma anche dopo. Binding su body dopo seleziona solo alcuni elementi con selettore css, sul tipo di click per la funzione, ovunque essi vengano inseriti. 
    $('body').on('click', '.todo li i',function(){
      $(this).parent().remove();
    })
// per captare quale dei cestini usiamo this e rimuoviamo tutto il padre per eliminare tutta la linea.
  // Il this rileva quale dei cestini, il parente riimuove tutto il li partendo dall'icona e quindi tutto il ciò che gli sta sopra per eliminare l'intera riga.
  //   $(this).parent().remove()
  // });


  // Aggiunta di un nuovo elemento nella lista

  // Creiamo una referenza perchè lo useremo piu volte.
  // Useremo un keyup che ci restituirà immediatamente il value ; 
  // si usa la e per capire quale carattere è stato cliccato facendo console.log(e.which, e.keyCode);
  // entrambi servono x rilevare il tasto

  newInput.keyup(function(e){  
    console.log(e.which, e.keyCode);

    // se almeno uno dei due è true, cioe se viene premuto il tasto invio corrispondente al 13

    if(e.which == 13 || e.keyCode == 13){
      // allora prendi valore dell'input

      // che storiamo in una variabile, prendi il valore di newInput e con val() siamo in lettura del valore 
      var text = newInput.val().trim();
      // validare che non sia stringa vuota
      // se questo valore non è vuoto allora aggiungilo al Dom
      if(text !== ''){
        var elementNew = $('.template li').clone();
        elementNew.prepend(text);

        //aggiungere allora l'elemento clonato con i nuovi dati alla lista todo 
        list.append(elementNew)
        // assegniamo attributo direttamente con .attr all'html nel data element vuoto.
        elementList.attr('data-element', i);
        // puliamo l'input con stringa vuota  
        // in questo modo quando andremo a cliccare sul cestino dell'elemento che noi aggiungiamo non verrà cancellato perchè la funzione remove è gia partita sugli elementi che c'erano gia in precedenza nel ciclo
        
        // newInput.val('');
      }
    }
  });

  // Rendi todo item completo / da terminare
$('body').on('click', '.todo li', function(){
  //Quando cliccheremo sulla riga della lista toggliamo direttamente la classe completed che crea la linea sul testo, recependo quale riga clicchiamo
  $(this).toggleClass('completed');
})

}); // Fine doc ready

// COn attr possiamo assegnare un attributo data element con valore visited direttamente al valore cliccato della lista.



// $(this).parent().attr('data-element', 'visited');

// oppure solo prendere un valore

// var id = $(this).parent().attr('data-element');
//console.log(id);


//  si usa data- come sintassi