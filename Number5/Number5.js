
function TrianglePascal( niv){
    var i, k;
    var Result = new Array();
    
    //-- Création tableau multidimensionnel
    for( i =0; i< niv; i++){
      Result[i] = new Array();
      Result[i][0]= 1; // 1st colonne à 1
    }
    //-- Calcul des Valeurs
    for( i=1; i< niv; i++){
      for( k =1; k < i; k++){
        Result[i][k] = Result[i-1][k-1] + Result[i-1][k];
      }
      //-- Dernière colonne à 1
      Result[i][k] = 1;
    }
    return( Result);
  }
  //-----------------------------
  // Entrée : Tableau des valeurs
  // Sortie : Affichage Ecran
  //-----------------------------
  function ShowTriangle( tab){
    var i, k;
    var Niv  = tab.length;
    var html = 'Triangle de Pascal à ' +Niv +' niveaux...';
    //-- Affichage des Valeurs
    html += '<TABLE BORDER=0 CELLSPACING =4>';
    for( i in tab){
      html += '<tr>';
      for( k in tab[i]){
        html += '<td>' +tab[i][k] +'</td>';
      }
      html += '</tr>';
    }
    document.write( html);
  }

  var Pascal = new Array();
Pascal = TrianglePascal( 5);
ShowTriangle( Pascal);