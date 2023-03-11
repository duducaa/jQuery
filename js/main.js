$(document).ready(() => {
    const loginForm = $("form");

    const copyButton = $(".copy-button");

    loginForm.on("submit", (event) => {
        event.preventDefault();

        data = JSON.stringify([
            {
                "email": $("#email").val(),
                "str_password": $("#password").val()
            }
        ]);

        $.ajax({
            type: "POST",
            url: "http://localhost:5000/login",
            data: data,
            dataType: "json",
            contentType: "application/json",
            success: (response) => $("#token").val(response['token'])
        });
    });
});