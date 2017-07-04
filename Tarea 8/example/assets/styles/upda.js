$("#formu").on("submit",function(){
    event.preventDefault();
    var id = $("#selection").val();

    console.log(id);
    $.get('/updatUser',
    {
      id: id
    });

    window.alert("Usuario Seleccionado");
    window.location.href = "/updatUser";
  });
