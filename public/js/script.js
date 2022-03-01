const addRecord = document.forms.addRecord;

addRecord.addEventListener("submit", function(e) {
    e.preventDefault();
    const body = {};
    for (let i = 0; i < this.elements.length; i++) {
        const el = this.elements[i];
        if (el.name) {
            body[el.name] = el.value;
        }
    }
    console.log(body);
    createUser(body, function(data) {
        this.reset();
        readAllUsers(showAll);
    }.bind(this));
});

const userImg = {
    "young": "/img/young.svg",
    "adult": "/img/adult.svg",
    "old": "/img/old.svg"
};

const showAll = function(ans) {
    let data = ans.data;
    let el = document.querySelector(".result");
    el.innerHTML = "";
    data.forEach(function(user) {
        let card = document.createElement("div");
        card.className = "card";
        let img = "", name = "", email = "", tel = "";
        if (user.email) {
            email = `<a class="contact" href="mailto:${user.email}">${user.email}</a>`;
        }
        if (user.phone) {
            tel = `<a class="contact" href="tel:${user.phone}">${user.phone}</a>`;
        }
        if (user.name) {
            name = `<span class="card-name">${user.name}</span>`;
        }
        if (user.age > 60) {
            img = userImg.old;
        } else if (user.age > 20) {
            img = userImg.adult;
        } else {
            img = userImg.young;
        }

        card.innerHTML = `
            <img src="${img}" alt="${user.login}">
            <div class="card-info">
                <h3>${user.login}</h3>
                ${name}                    
                ${email}
                ${tel}
            </div>
        `;
        el.append(card);
    });
}

readAllUsers(showAll);