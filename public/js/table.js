let addBtn = document.querySelector(".form-add button");
let daddy = document.querySelector(".column");
let n = 0;
addBtn.addEventListener("click", function() {
    let newLine = document.querySelector(".form-line").cloneNode(true);
    n++;
    for (let i = 0; i < newLine.children.length; i++) {
        let label = newLine.children[i].children[0];
        let el = newLine.children[i].children[1];
        let id = el.id.split("-")[0];
        label.setAttribute("for", id + "-" + n);
        el.id = `${id}-${n}`;
        el.name = `${id}-${n}`;
        el.value = el.nodeName === "INPUT" ? "" : "string";
    }
    let del = document.createElement("button");
    del.className = "btn btn-del";
    del.innerText = "✖";
    newLine.append(del);
    del.addEventListener("click", function() {
        this.parentElement.remove();
    });
    daddy.insertBefore(newLine, addBtn.parentElement);
});

let addForm = document.forms.addTable;

addForm.addEventListener("submit", function(e) {
    e.preventDefault();
    let body = {
        fields: []
    };
    for (let i = 0; i < this.elements.length; i++) {
        let child = this.elements[i];
        if (child.name === "name") {
            body.name = child.value;
        } else if (child.name) {
            let title = child.name.split("-");
            if (!body.fields[title[1]]) {
                body.fields[title[1]] = {};
            }
            body.fields[title[1]][title[0]] = child.value;
        }
    }
    console.log(body);
    fetch("http://localhost:3002/api/tables/add", {
        method: "post",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
});