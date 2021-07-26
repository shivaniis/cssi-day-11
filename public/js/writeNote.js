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
        const noteTitle = document.querySelector("#noteTitle").value
        const noteText = document.querySelector("#noteText").value
        console.log(noteTitle, noteText)

        firebase.database().ref(`/users/${googleUser.uid}`).push({
            title: noteTitle,
            text: noteText,
            time: Date.now()            
        }).then(() => {
            console.log("database write successful")
            document.querySelector("#noteTitle").value = ""
            document.querySelector("#noteText").value = ""
        }).catch(error => {
            console.log("error writing new note: ", error)
        })

    })
}