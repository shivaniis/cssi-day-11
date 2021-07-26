let googleUser = null

window.onload = () => {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            console.log("logged in as", user.displayName)
            googleUser = user
            //this codes run if logged in
        } else {
            console.log("not logged in")
            // if not logged
        }
    })
    const createNoteButton = document.querySelector("#createNoteButton")
    console.log(createNoteButton)
    createNoteButton.addEventListener("click", () => {
        console.log("clicked")
    })
}