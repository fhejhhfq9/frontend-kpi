const loadBtn = document.querySelector("#loadBtn");
const usersContainer = document.querySelector("#users");
const message = document.querySelector("#message");

loadBtn.addEventListener("click", function () {
    message.textContent = "";

    fetch("https://randomuser.me/api/?results=5")
        .then(function (response) {
            if (!response.ok) {
                throw new Error("Помилка запиту: " + response.status);
            }
            return response.json();
        })
        .then(function (data) {
            usersContainer.innerHTML = "";

            data.results.forEach(function (user) {
                const card = document.createElement("div");
                card.className = "card";

                const img = document.createElement("img");
                img.src = user.picture.large;
                img.alt = "Фото користувача";

                const name = document.createElement("p");
                name.innerHTML = "<b>Ім'я:</b> ";
                name.append(user.name.first + " " + user.name.last);

                const country = document.createElement("p");
                country.innerHTML = "<b>Країна:</b> ";
                country.append(user.location.country);

                const postcode = document.createElement("p");
                postcode.innerHTML = "<b>Поштовий індекс:</b> ";
                postcode.append(user.location.postcode);

                const phone = document.createElement("p");
                phone.innerHTML = "<b>Телефон:</b> ";
                phone.append(user.phone);

                card.append(img, name, country, postcode, phone);
                usersContainer.appendChild(card);
            });
        })
        .catch(function (error) {
            message.textContent = "Не вдалося отримати дані: " + error.message;
        });
});