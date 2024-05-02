$(document).ready(function () {
    $("#telefone").mask("(00) 00000-0000");
    $("#cpf").mask("000.000.000-00");

    $("form").validate({
        rules: {
            nome: {
                required: true,
            },
            telefone: {
                required: true,
            },
            cpf: {
                required: true,
            },
            email: {
                required: true,
            },
            adress: {
                required: true,
            },
        },

        messages: {
            nome: "Por favor, insira o seu nome!",
            telefone: "Por favor, insira seu telefone!",
            cpf: "Por favor, insira seu CPF!",
            email: "Por favor, insira seu email!",
            adress: "Por favor, insira o seu endereço!",
        },

        submitHandler: function (form) {
            console.log(form);
        },
        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();

            if (camposIncorretos) {
                alert(`Existem, ${camposIncorretos} campos incorretos!`);
            }
        },
    });
});
