$(document).ready(() => {
    const loginForm = $("form")
    const loginButton = $(".login-button");

    loginForm.on("submit", (event) => {
        event.preventDefault();

        $.ajax({
            url: "http://localhost:5000/login",
            data: JSON.stringify([{
                "email": $("#email").val(),
                "str_password": $("#password").val()
            }]),
            type: "POST",
            dataType: "json",
            contentType: "application/json",
            success: function (response) {
                console.log(response);
            }
        });
    });
});