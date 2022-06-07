window.onload = function () {

    //Llamo a la función  que realiza las validaciones onFocus/onBlur
    validacionesOnFocus();
    
    //Declaro la función  que realiza las validaciones onFocus/onBlur
    function validacionesOnFocus() {
        //Validación Nombre --------------------------------------------------------------------
        let nombre = document.getElementById('nombreInput'); // Me traigo a una variable el input ingresado por el usuario
        let name_format = /^[a-zA-Z]+$/; //Formato regex que solo acepta letras (mayúsculas incluidas)

        //Válido (cuando se pierde foco) si lo ingresado es correcto
        nombre.onblur = function () {
            if ((nombre.value.length < 3) || (!nombre.value.match(name_format))
            ) {
                nombre.classList.add('invalid'); // Si no es correcto, agrego la clase "invalid", la cual cambia el color a rojo y muestro el mensaje de error
                errorNombre.innerHTML = 'Ingrese un nombre no menor a 3 letras.'

            }
        };
        //Cuando se tiene foco nuevamente remuevo la clase "invalid" y el mensaje de error, ya que asumo que lo está corrigiendo 
        nombre.onfocus = function () {
            if (nombre.classList.contains('invalid')) {
                nombre.classList.remove('invalid');
                errorNombre.innerHTML = "&nbsp;";
            }
        };

        //Validación Apellido -------------------------------------------------------------------
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
                errorApellido.innerHTML = "&nbsp;";
            }
        };

        // Validación Mail ------------------------------------------------------------------------
        let mail = document.getElementById('emailInput');
        let mail_format = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

        mail.onblur = function () {
            if (!mail.value.match(mail_format)) {
                mail.classList.add('invalid');
                errorMail.innerHTML = 'Ingrese un email válido.'

            }
        };
        mail.onfocus = function () {
            if (mail.classList.contains('invalid')) {
                mail.classList.remove('invalid');
                errorMail.innerHTML = "&nbsp;";
            }
        };


        //Validación Edad ----------------------------------------------------------
        let edad = document.getElementById('edadInput');
        let age_format = /^-?\d*(\.\d+)?$/;

        edad.onblur = function () {
            if (!(edad.value.match(age_format)) || (edad.value < 1) || (edad.value > 99) || (edad.value == "")) {
                edad.classList.add('invalid');
                errorEdad.innerHTML = 'Ingrese un número entero entre 0 y 100.'

            }
        };
        edad.onfocus = function () {
            if (edad.classList.contains('invalid')) {
                edad.classList.remove('invalid');
                errorEdad.innerHTML = "&nbsp;";
            }
        };

    }


//Validación on Submit --------------------------------------------------------------------
    //Esta funcion se ejecuta cuando el usuario hace click en el boton "Enviar", se encarga de validar que todos los campos sean correctos.
    //Si alguno de los campos es incorrecto hace un return, no sigue avanzando y remarca el error.
    //Al llegar al final, es decir, cuando todas las validaciones son correctas llama a la funcion mostrarModal();
    document.formulario.onsubmit = function (event) {
        //Validación Nombre --------------------------------------------------------------------
        let nombre = document.getElementById('nombreInput');
        let name_format = /^[a-zA-Z]+$/;

        if ((nombre.value.length < 3) || (!nombre.value.match(name_format) || (nombre.value == ""))) {
            nombre.classList.add('invalid');
            errorNombre.innerHTML = 'Ingrese un nombre no menor a 3 letras.'
            return false; //se utiliza para abortar la funcion
        }

        //Validación Apellido --------------------------------------------------------------------
        let apellido = document.getElementById('apellidoInput');
        let surname_format = /^[a-zA-Z]+$/;

        if ((apellido.value.length < 3) || (!apellido.value.match(surname_format) || (apellido.value == ""))) {
            apellido.classList.add('invalid');
            errorApellido.innerHTML = 'Ingrese un apellido no menor a 3 letras.'
            return false;
        }

        //Validación Email --------------------------------------------------------------------
        let mail = document.getElementById('emailInput');
        let mail_format = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

        if (!mail.value.match(mail_format) || (mail.value == "")) {
            mail.classList.add('invalid');
            errorMail.innerHTML = 'Ingrese un email válido.';
            return false;
        }

        //Validación Edad ----------------------------------------------------------
        let edad = document.getElementById('edadInput');
        let age_format = /^-?\d*(\.\d+)?$/;

        if (!(edad.value.match(age_format)) || (edad.value < 1) || (edad.value > 99) || (edad.value == "")
        ) {
            edad.classList.add('invalid');
            errorEdad.innerHTML = 'Ingrese un número entero mayor a 0 y menor a 100.';
            return false;
        }

        //Validación sexo ----------------------------------------------------------
        if (formulario.sexo[0].checked == false && formulario.sexo[1].checked == false && formulario.sexo[2].checked == false) {
            document.getElementById('sexoInput').classList.add('invalid');
            errorSexo.innerHTML = 'Seleccione una opción.';
            return false;
        } 
        document.getElementById('sexoInput').classList.remove('invalid');
        errorSexo.innerHTML = "";
        

        //Validación interes ----------------------------------------------------------
        if (document.querySelector('.card__campo__input_checkbox:checked') == null) {//Me traigo todos los elementos de checkbox, ya que, con que uno este marcado (distinto de null) estaría correcta la validación
            document.getElementById('contenedorTemas').classList.add('invalid');
            errorTemas.innerHTML = 'Seleccione por lo menos una opción.';
            return false;
        }
        document.getElementById('contenedorTemas').classList.remove('invalid');
        errorTemas.innerHTML = "";
        

        //Validación Pais ----------------------------------------------------------
        if (document.getElementById('paisInput').value == "") { //Compruebo que el Input sea diferente al "país" (-- Elige un País --) que deje por defecto 
            document.getElementById('paisInput').classList.add('invalid');
            errorPais.innerHTML = 'Seleccione un país.';
            return false;
        } 
        document.getElementById('paisInput').classList.remove('invalid');
        errorSexo.innerHTML = "";

        //Llamo a la función mostrarModal()
        mostarModal();

        //Al poner esta línea impido que se envie el formulario, y así que se cierre/refresque el Modal (a su vez el modal tiene el código necesario para cerrar y finalizar el submit)
        event.preventDefault();
    }

    //Declaro la función mostrarModal()
    function mostarModal() {
        // Ejecuto modal -----------------------------------------------------------
        let modal = document.getElementById("modalRegistro");
        let span = document.getElementById("close");

        // Lo hago visible
        modal.style.display = "block";

        // Si clickea el "botón" de aceptar escondo el modal
        span.onclick = function () {
            modal.style.display = "none";
            document.getElementById("formulario").submit();
        }

        // Si clickea fuera del modal, lo escondo
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
                document.getElementById("formulario").submit();
            }
        }
    }


    
};




