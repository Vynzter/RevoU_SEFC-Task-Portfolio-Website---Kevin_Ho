//This Javascript File is used for the RevoU SEFC Task Portfolio Website - Kevin Ho

//Our Profile
let indexBanner = 0;

changeBackground();

function nextBanner() {
    indexBanner = indexBanner + 1;
    changeBackground();
}

//Function to change background banner
function changeBackground() {
    let bannerList = document.getElementsByClassName('banner-image');
    
    if (indexBanner >= bannerList.length - 1) {
        //reset indexBanner
        indexBanner = 0;
    } else if (indexBanner < 0) {
        indexBanner = bannerList.length - 1;
    }

    //Looping to change background banner
    for (let i = 0; i < bannerList.length; i++) {
        bannerList[i].style.display = 'none';//hide all image
    }
    bannerList[indexBanner].style.display = 'block';
}
setInterval(nextBanner, 3000); //Auto-slide every 3 seconds

//Message Us

console.log('Hello World!');

// Function to set today's date as the placeholder for the birthdate input
function setTodayAsDefault() {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const dd = String(today.getDate()).padStart(2, '0');
    const formattedDate = `${yyyy}-${mm}-${dd}`; // Format YYYY-MM-DD

    document.getElementById('birthdate-input').value = formattedDate;// Set value, not placeholder
}
// Call the function to set the placeholder when the page loads
window.onload = setTodayAsDefault;

// Function to validate form data
function formValidation(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way
    
    let nameInput = document.getElementById('name-input').value;
    let birthdateInput = document.getElementById('birthdate-input').value;
    let genderInput = document.querySelector('input[name="gender"]:checked');
    let messageInput = document.getElementById('message-input').value;

    // Condition for validation form
    if (nameInput ===""|| birthdateInput ==="" || !genderInput || messageInput ==="") {
        alert('All field must be filled out!');
        return;
    } 
    // Format waktu sesuai contoh (Fri Jun 17 2022 11:27:28 GMT+0700)
    let currentTime = new Date().toString();

    // Format the birthdate as dd/mm/yyyy
    const birthdate = new Date(birthdateInput);
    const formattedBirthdate = `${String(birthdate.getDate()).padStart(2, '0')}/${String(birthdate.getMonth() + 1).padStart(2, '0')}/${birthdate.getFullYear()}`;
    
        // Display result in result-form box
        document.getElementById('result-form').style.display = 'block';
        document.getElementById ('result-form').innerHTML = `
            <strong>Current Time:</strong> ${currentTime} <br><br>
            <strong>Name:</strong> ${nameInput} <br>
            <strong>Birthdate:</strong> ${formattedBirthdate} <br>
            <strong>Gender:</strong> ${genderInput.value} <br>
            <strong>Message:</strong> ${messageInput}
        `;

        // Update greeting name on homepage
        let greetingElement = document.getElementById("user-greeting");
        if (greetingElement) {
        greetingElement.textContent = nameInput;
    }
        // Reset form after submit
        document.getElementById("messageForm").reset();

        // Set birthdate input back to today's date
        setTodayAsDefault();
    } 
    // add event listener to form
    document.getElementById('submit-btn').addEventListener('click', formValidation);

// Prevent reload page after submit messageForm    
document.getElementById("messageForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

});

//////////////////////////

//Our Profile

/*var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs((slideIndex += n));
}

function showDivs(n) {
    var i;
    var imgList = document.getElementsByClassName("img-slideshow");

    if (n > imgList.length)  slideIndex = 1; 
    else if (n < 1) slideIndex = imgList.length; 

    for (i = 0; i < imgList.length; i++) {
        imgList[i].style.display = "none"; // Sembunyikan semua gambar
    }
    imgList[slideIndex - 1].style.display = "block"; // Tampilkan gambar yang sesuai
}

// Auto-slide setiap 3 detik
//setInterval(() => {plusDivs(1);}, 3000);*/