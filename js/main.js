window.onload = function() {



    //Validacion Nombre --------------------------------------------------------------------
    let nombre = document.getElementById('nombreInput');
    let name_format = /^[a-zA-Z]+$/;

    nombre.onblur = function () {
        if ((nombre.value.length < 3) || (!nombre.value.match(name_format))
        ) {
            nombre.classList.add('invalid');
            errorNombre.innerHTML = 'Ingrese un nombre no menor a 3 letras.'
        }
    };
    nombre.onfocus = function () {
        if (nombre.classList.contains('invalid')) {
            nombre.classList.remove('invalid');
            errorNombre.innerHTML = "";
        }
    };

    //Validacion Apellido -------------------------------------------------------------------
    let apellido = document.getElementById('apellidoInput');
    let surname_format = /^[a-zA-Z]+$/;

    apellido.onblur = function () {
        if ((apellido.value.length < 3) || (!apellido.value.match(surname_format))
        ) {
            apellido.classList.add('invalid');
            errorApellido.innerHTML = 'Ingrese un apellido no menor a 3 letras.'
        }
    };
    apellido.onfocus = function () {
        if (apellido.classList.contains('invalid')) {
            apellido.classList.remove('invalid');
            errorApellido.innerHTML = "";
        }
    };

    //Validacion Mail ------------------------------------------------------------------------
    let mail = document.getElementById('mailInput');
    let mail_format = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

    mail.onblur = function () {
        if (!mail.value.match(mail_format)
        ) {
            mail.classList.add('invalid');
            errorMail.innerHTML = 'Ingrese un email valido.'
        }
    };
    mail.onfocus = function () {
        if (mail.classList.contains('invalid')) {
            mail.classList.remove('invalid');
            errorMail.innerHTML = "";
        }
    };


    //Validacion Edad ----------------------------------------------------------
    let edad = document.getElementById('edadInput');

    edad.onblur = function () {
        if ((edad.value > 0) || (edad.value < 100))
        {
            edad.classList.add('invalid');
            errorEdad.innerHTML = 'Ingrese un numero entero mayor a 0 y menor a 100.'
        }
    };
    edad.onfocus = function () {
        if (edad.classList.contains('invalid')) {
            edad.classList.remove('invalid');
            errorEdad.innerHTML = "";
        }
    };



    function validarInputs() {






    }






































};