window.onload = function() {
};


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
        if (!(edad.value.match(age_format)) || (edad.value > 0) || (edad.value < 100))
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


    //Validacion sexo ----------------------------------------------------------
    document.formulario.onsubmit = function () {
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

    // if(this.interes[0].value==null && this.interes[1].value==null){
    //     document.getElementById('temas_de_interesInput').classList.add('invalid');
    //     errorInteres.innerHTML = 'Seleccione una opcion.'
    //     return false;
    // }
    // else{
    //     document.getElementById('temas_de_interesInput').classList.remove('invalid');
    //     errorInteres.innerHTML = "";
    // }

    if((document.getElementById('temas_de_interesInput_Deporte').checked == false)
        && (document.getElementById('temas_de_interesInput_Musica').checked == false)
        && (document.getElementById('temas_de_interesInput_Juegos').checked == false)
        && (document.getElementById('temas_de_interesInput_Tecnologia').checked == false)
        && (document.getElementById('temas_de_interesInput_Otros').checked == false)
    ){
        document.getElementById('temasInput').classList.add('invalid');
        errorTemas.innerHTML = 'Seleccione por lo menos una opcion.'
        return false;
    }
    else {
        document.getElementById('temasInput').classList.remove('invalid');
        errorTemas.innerHTML = "";
    }

    // if(document.getElementById('temas_de_interesInput_Deporte'))


}


//     //Validacion Pais ----------------------------------------------------------
//     let pais = document.getElementById('paisInput').value;

//     pais.onblur = function () {
//         if (pais.length <= 0) {
//             pais.classList.add('invalid');
//             errorPais.innerHTML = 'Seleccione una opcion.'
//         }
//     };
//     pais.onfocus = function () {
//         if (pais.classList.contains('invalid')) {
//             pais.classList.remove('invalid');
//             errorPais.innerHTML = "";
//         }



function validarInputs() {


}






