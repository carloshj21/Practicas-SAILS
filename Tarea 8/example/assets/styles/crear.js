$("#formu").on("submit",function(){
    event.preventDefault();
    var name = $("#nom").val();
    var age = $("#age").val();
    var password = $("#cont").val();

    console.log(name);
    console.log(age);
    console.log(password);
    console.log("Hola");
    $.post('/createUser',
    {
      nombre: name,
      password: password,
      edad: age
    });

    window.alert("Usuario Registrado");
    window.location.href = "/readUsers";
  });
