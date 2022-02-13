let btn = document.querySelector("#btn")
btn.addEventListener("click", function() {
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    // let rating = document.querySelector('.rating:checked').value;
    // alternative
    let rating = null;
    let rb = document.querySelectorAll('.rating');
    for (let eachRating of rb) {
        if (eachRating.checked == true) {
            rating = eachRating.value;
        }
    }
    // let selectedCheckboxes = document.querySelectorAll(".hear-about:checked")
    // console.log(selectedCheckboxes)
    // let hearAbout = [];
    // for (i of selectedCheckboxes) {
    //     hearAbout.push(i.value)
    // }

    let allCheckboxes = document.getElementsByClassName('.hear-about')
    let hearAbout = [];
    for (i of allCheckboxes) {
        if (i.checked == true) {
        hearAbout.push(i.value) }
    }

    console.log(name, email, rating)
    console.log(hearAbout)
})

document.querySelector('#btn').addEventListener("click", function() {
    let nameNotProvided = false;
    let nameTooShort = false;
    let emailNotValid = false;
    let name = document.querySelector("#name").value
    if (!name) {
        nameNotProvided = true;
    } else if (name.length < 3) {
        nameTooShort = True
    }

    let email = document.querySelector("#email").value;
    if ( !(email.includes('.') & email.includes('@')) ) {
        emailNotValid = true;
    }

    if (nameNotProvided||nameTooShort||emailNotValid) {
        let errorDiv = document.querySelector('#errors');
        errorDiv.innerHTML='';
        errorDiv.style.display='block';
        if (nameNotProvided) {
            errorDiv.innerHTML += `<p>Please provide your name </p>`
        }
        if (nameTooShort) {
            errorDiv.innerHTML += `<p>Name too short fucker </p>`
        }
        if (emailNotValid) {
            errorDiv.innerHTML += `<p>give a fucking valid email </p>`
        }
    }


})

