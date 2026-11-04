const form = document.querySelector("#studentForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const data = {
        fullname: document.querySelector("#fullname"),
        group: document.querySelector("#group"),
        idcard: document.querySelector("#idcard"),
        birthdate: document.querySelector("#birthdate"),
        email: document.querySelector("#email")
    };

    Object.values(data).forEach(el => el.classList.remove("error"));

    if (data.fullname.value.length == 0) {
        alert('Поле "ПІБ" пусте');
        data.fullname.classList.add("error");
        data.fullname.value = "";
        return false;
    }

    if (!(/^[А-ЯІЇЄҐа-яіїєґ']+ [А-ЯІЇЄҐ]\.[А-ЯІЇЄҐ]\.$/u.test(data.fullname.value))) {
        alert("Введіть правильне ПІБ");
        data.fullname.classList.add("error");
        data.fullname.value = "";
        return false;
    }

    if (data.group.value.length == 0) {
        alert('Поле "Група" пусте');
        data.group.classList.add("error");
        data.group.value = "";
        return false;
    }

    if (!(/^[А-ЯІЇЄҐ]{2,4}-\d{2,3}$/u.test(data.group.value))) {
        alert("Введіть правильну групу ");
        data.group.classList.add("error");
        data.group.value = "";
        return false;
    }

    if (data.idcard.value.length == 0) {
        alert('Поле "ID-картка" пусте');
        data.idcard.classList.add("error");
        data.idcard.value = "";
        return false;
    }

    if (!(/^[А-ЯІЇЄҐ]{2} №\d{6}$/u.test(data.idcard.value))) {
        alert("Введіть правильний номер ID-картки ");
        data.idcard.classList.add("error");
        data.idcard.value = "";
        return false;
    }

    if (data.birthdate.value.length == 0) {
        alert('Поле "Дата народження" пусте');
        data.birthdate.classList.add("error");
        data.birthdate.value = "";
        return false;
    }

    if (!(/^(0[1-9]|[12]\d|3[01])\.(0[1-9]|1[0-2])\.(19|20)\d{2}$/.test(data.birthdate.value))) {
        alert("Введіть дату у форматі ДД.ММ.РРРР");
        data.birthdate.classList.add("error");
        data.birthdate.value = "";
        return false;
    }

    if (data.email.value.length == 0) {
        alert('Поле "E-Mail" пусте');
        data.email.classList.add("error");
        data.email.value = "";
        return false;
    }

    if (data.email.value.length < 6) {
        alert('Дуже малий "E-Mail"');
        data.email.classList.add("error");
        data.email.value = "";
        return false;
    }

    if (!(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.com$/.test(data.email.value))) {
        alert("Введіть правильний E-Mail");
        data.email.classList.add("error");
        data.email.value = "";
        return false;
    }

    const result = `
        ПІБ: ${data.fullname.value}
        Група: ${data.group.value}
        ID-картка: ${data.idcard.value}
        Дата народження: ${data.birthdate.value}
        Email: ${data.email.value}
    `;

    const newWindow = window.open("", "_blank");

    if (newWindow) {
        newWindow.document.write(`
            <html>
            <head><title>Дані студента</title></head>
            <body>
                <h2>Введена інформація</h2>
                <pre>${result}</pre>
            </body>
            </html>
        `);
        newWindow.document.close();
    }
});

form.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", () => input.classList.remove("error"));
});

//завдання 2
const table = document.querySelector("#myTable");
const colorPicker = document.querySelector("#colorPicker");

const variant = 8;
let number = 1;

for (let i = 0; i < 6; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < 6; j++) {
        const cell = document.createElement("td");

        cell.textContent = number;
        cell.dataset.number = number;

        
        cell.addEventListener("mouseover", function() {
            if (number === variant || Number(cell.dataset.number) === variant) {
                const randomColor = "#" + Math.floor(Math.random() * 16777215)
                    .toString(16).padStart(6, "0");

                cell.style.backgroundColor = randomColor;
            }
        });

        
        cell.addEventListener("click", function() {
            if (Number(cell.dataset.number) === variant) {
                cell.style.backgroundColor = colorPicker.value;
            }
        });

        
        cell.addEventListener("dblclick", function() {
            if (Number(cell.dataset.number) === variant) {

                const selectedColumn = j;

                for (let rowIndex = 0; rowIndex < 6; rowIndex++) {
                    for (let colIndex = selectedColumn; colIndex < 6; colIndex += 2) {

                        const currentCell = table.rows[rowIndex].cells[colIndex];

                        currentCell.style.backgroundColor = colorPicker.value;
                    }
                }
            }
        });

        row.appendChild(cell);
        number++;
    }

    table.appendChild(row);
}