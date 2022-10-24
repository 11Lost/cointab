form.addEventListener("submit", () => {
    const signup = {
        username: username.value,
        email: email.value,
        password: password.value
    }
    fetch("/api/signup", {
        method: "POST",
        body: JSON.stringify(signup),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json())
        .then(data => {
            if (data.status == "error") {
                success.style.display = "none"
                error.style.display = "block";
                error.innerText = data.error
            } else {
                success.style.display = "block"
                error.style.display = "none";
                success.innerText = data.success
            }
        })
})