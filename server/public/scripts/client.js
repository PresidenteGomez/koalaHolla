console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  // load existing koalas on page load
  getKoalas();

  // add koala button click
  $( '#addButton' ).on( 'click', function(){
    console.log( 'in addButton on click' );
    // get user input and put in an object
    // NOT WORKING YET :(
    // using a test object
    var objectToSend = {
      name: 'testName',
      age: 'testName',
      gender: 'testName',
      readyForTransfer: 'testName',
      notes: 'testName',
    };
    // call saveKoala with the new obejct
    saveKoala( objectToSend );
  }); //end addButton on click
}); // end doc ready

function getKoalas(){
  console.log( 'in getKoalas' );
  // ajax call to server to get koalas
  $.ajax({
    url: '/koalas',
    type: 'GET',
    success: function( data ){
      var $tBody = $('#viewKoalas');
      console.log( 'got some koalas: ', data );
      for (var i = 0; i< data.length; i++) {
        var koala = data[i];
        var $tRow = $('<tr>');

        $tRow.append('<td>' + koala.name + '</td>');
        $tRow.append('<td>' + koala.age + '</td>');
        $tRow.append('<td>' + koala.gender + '</td>');
        $tRow.append('<td>' + koala.readyForTransfer + '</td>');
        $tRow.append('<td>' + koala.notes + '</td>');

        $tBody.append($tRow);

      }

    } // end success
  }); //end ajax
  // display on DOM with buttons that allow edit of each
} // end getKoalas

function saveKoala( newKoala ){
  console.log( 'in saveKoala', newKoala );
  // ajax call to server to get koalas
  $.ajax({
    url: '/koalas',
    type: 'POST',
    data: newKoala,
    success: function( data ){
      console.log( 'got some koalas: ', data );
    } // end success
  }); //end ajax
}
