window.onload = function () {

    validacionesOnFocus();

    function validacionesOnFocus() {
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

        // Validacion Mail ------------------------------------------------------------------------
        let mail = document.getElementById('emailInput');
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
        let age_format = /^-?\d*(\.\d+)?$/;

        edad.onblur = function () {
            if (!(edad.value.match(age_format)) || (edad.value < 1) || (edad.value > 99) || (edad.value == "")) {
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
    }


    //Validaciones on summit --------------------------------------------------------------------
    document.formulario.onsubmit = function () {


        //Validacion Nombre --------------------------------------------------------------------
        let nombre = document.getElementById('nombreInput');
        let name_format = /^[a-zA-Z]+$/;

        if ((nombre.value.length < 3) || (!nombre.value.match(name_format) || (nombre.value == ""))
        ) {
            nombre.classList.add('invalid');
            errorNombre.innerHTML = 'Ingrese un nombre no menor a 3 letras.'
            return false;
        }

        //Validacion Apellido --------------------------------------------------------------------
        let apellido = document.getElementById('apellidoInput');
        let surname_format = /^[a-zA-Z]+$/;

        if ((apellido.value.length < 3) || (!apellido.value.match(surname_format) || (apellido.value == ""))
        ) {
            apellido.classList.add('invalid');
            errorApellido.innerHTML = 'Ingrese un apellido no menor a 3 letras.'
            return false;
        }

        //Validacion Email --------------------------------------------------------------------
        let mail = document.getElementById('emailInput');
        let mail_format = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

        if (!mail.value.match(mail_format) || (mail.value == "")
        ) {
            mail.classList.add('invalid');
            errorMail.innerHTML = 'Ingrese un email valido.';
            return false;
        }

        //Validacion Edad ----------------------------------------------------------
        let edad = document.getElementById('edadInput');
        let age_format = /^-?\d*(\.\d+)?$/;

        if (!(edad.value.match(age_format)) || (edad.value < 1) || (edad.value > 99) || (edad.value == "")
        ) {
            edad.classList.add('invalid');
            errorEdad.innerHTML = 'Ingrese un numero entero mayor a 0 y menor a 100.';
            return false;
        }

        //Validacion sexo ----------------------------------------------------------
        if (this.sexo[0].checked == false && this.sexo[1].checked == false && this.sexo[2].checked == false) {
            document.getElementById('sexoInput').classList.add('invalid');
            errorSexo.innerHTML = 'Seleccione una opcion.'
            return false;
        }
        else {
            document.getElementById('sexoInput').classList.remove('invalid');
            errorSexo.innerHTML = "";
        }

        //Validacion interes ----------------------------------------------------------
        if ((document.getElementById('temas_de_interesInput_Deporte').checked == false)
            && (document.getElementById('temas_de_interesInput_Musica').checked == false)
            && (document.getElementById('temas_de_interesInput_Juegos').checked == false)
            && (document.getElementById('temas_de_interesInput_Tecnologia').checked == false)
            && (document.getElementById('temas_de_interesInput_Otros').checked == false)
        ) {
            document.getElementById('contenedorTemas').classList.add('invalid');
            errorTemas.innerHTML = 'Seleccione por lo menos una opcion.'
            return false;
        }
        else {
            document.getElementById('contenedorTemas').classList.remove('invalid');
            errorTemas.innerHTML = "";
        }

        //Validacion Pais ----------------------------------------------------------
        if (document.getElementById('paisInput').value == "") {
            document.getElementById('paisInput').classList.add('invalid');
            errorPais.innerHTML = 'Seleccione un país.'
            return false;
        }
        else {
            document.getElementById('paisInput').classList.remove('invalid');
            errorSexo.innerHTML = "";
        }

    }



};




