//define functions here

$(document).ready(function(){

// call functions here
getIt();

frameIt();
<<<<<<< HEAD

sumbitIt();

pressIt();
=======
>>>>>>> 57be55686f73caf20b1b8765f8cb8c1e322b907c
});


function getIt(){
  $('p').on('click', function(clicked){
    alert("Hey!");
  });
}

function frameIt(){
  $('img').on('load',function(){
<<<<<<< HEAD
    $('img').addClass('tasty');
  });
}

function submitIt(){
  $('form').on('submit',function(){
    alert("Your form is going to be submitted now.");
  });
}

function pressIt(){
  $('input').on('keydown', function(key){
    if(key.which===71){
      alert("G!");
    }
  });
=======
    $('img').append(< class ='tasty' src='style.css'/>)
  })
>>>>>>> 57be55686f73caf20b1b8765f8cb8c1e322b907c
}