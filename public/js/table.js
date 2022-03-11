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