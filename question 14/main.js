let visitor = prompt("Who's there?")
switch (visitor) {
    case "Admin":
        let password = prompt("Password?");
        if (password === "TheMaster") {
            alert("Welcome!")
        } else if (password === "" || password === null) {
            alert("canceled")
        } else {
            alert("Wrong password")
        }
        break;

    case null:
    case "":
        alert("canceled");
        break;

    default:
        alert("I don't know you");
        break;
};