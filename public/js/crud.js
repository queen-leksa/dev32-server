const createUser = async function(body, cb) {
    const res = await fetch("/api/users/add", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(body)
    });
    const ans = await res.json();
    console.log("create", ans);
    if (ans.msg === "ok") {
        cb(ans);
    }
};
const readUser = async function(login, cb) {
    const res = await fetch(`/api/users/alone/${login}`);
    const ans = await res.json();
    console.log("read one", ans);
    if (ans.msg === "ok") {
        cb(ans);
    }
};
const readAllUsers = async function(cb) {
    const res = await fetch("/api/users/show");
    const ans = await res.json();
    console.log("read all", ans);
    if (ans.msg === "ok") {
        cb(ans);
    }
};
const updateUser = async function(login, body, cb) {
    const res = await fetch(`/api/users/upd/${login}`, {
        method: "put",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(body)
    });
    const ans = await res.json();
    console.log("update", ans);
    if (ans.msg === "ok") {
        cb(ans);
    }
};
const deleteUser = async function(login, cb) {
    const res = await fetch(`/api/users/del/${login}`, {
        method: "delete"
    });
    const ans = await res.json();
    console.log("delete", ans);
    if (ans.msg === "ok") {
        cb(ans);
    }
};
