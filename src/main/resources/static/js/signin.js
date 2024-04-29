$("#signinForm").submit(function(event) {
    event.preventDefault();

    var url = '/api/auth/signin';
    var data = {
        username: $("#username").val(),
        password: $("#password").val()
    };

    $.ajax({
        type: "POST",
        url: url,
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data)
        {
            window.location.href = "userIndex.html";;

        },
        error: function(data)
        {
            alert("Username/Password incorrect. Try again");

        }
    });
});

window.onload = function() {
    var username = localStorage.getItem('username');
    if (username) {
        document.getElementById('account').textContent = username;
    }
};