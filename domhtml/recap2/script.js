//window is current window, all content loaded by DOMContentLoaded
//200 Ok, 404 Not Found
window.addEventListener("DOMContentLoaded", async function(){
    response = await axios.get("data.json")
    console.log(response)
    let data = response.data

    // //noob way
    // for (student of data) {
    //     list = document.querySelector("#students")
    //     list.innerHTML += `<li class="list-group-item">${student.name}</li>`
    // }

    // //better way
    // for (student of data) {
    //     listEntry = document.createElement("li")
    //     button = document.createElement("button")

    //     span = document.createElement("span")
    //     span.className = "mx-3"
    //     span.innerText = `${student.name}  `

    //     button.innerText = `Show GPA`
    //     button.className = "btn btn-primary"
    //     button.addEventListener("click", function() {
    //         alert("GPA: " + student.gpa)
    //     })
    //     listEntry.className = "list-group-item"

    //     list = document.querySelector("#students")
    //     listEntry.appendChild(span)
    //     listEntry.appendChild(button)
    //     list.appendChild(listEntry)
    // }

    //1337 way
    // for (let student of data) {
    //     element = document.createElement("li")
    //     element.innerHTML = `
    //     <span>${student.name}</span>
    //     <button>Show GPA</button>`
    //     element.className = "list-group-item";

    //     element.querySelector("button").addEventListener("click", function() {
    //         alert("GPA: " + student.gpa)})

    //     document.querySelector("#students").appendChild(element)
    // }

    //godlike way
    count = 0;
    for (let student of data) {
        element = document.createElement("li")
        element.innerHTML = `
        <span>${student.name}</span>
        <button>Show GPA</button>`
        element.className = "list-group-item";
        document.querySelector("#students").appendChild(element)

        buttons = document.querySelectorAll("button")
        buttons[count].addEventListener("click", function() {
            alert("GPA: " + student.gpa)
        })
        count++
    }



})



document.querySelector("students")