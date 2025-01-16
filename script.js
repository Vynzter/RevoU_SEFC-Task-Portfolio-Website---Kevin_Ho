//Ini File Javascript

//Our Profile
var slideIndex = 1;
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
setInterval(() => {
    plusDivs(1);
}, 3000);

///////
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

// Function to validate form
function formValidation() {
    let nameInput = document.getElementById('name-input').value;
    console.log(nameInput);
    // Condition for validation form
    if (nameInput ==""){
        alert('name must be filled out!');
    } else {
        // Display result form
        document.getElementById('result-form').innerHTML = nameInput;
    }

    
}document.getElementById('result-form').innerHTML = birthdateInput;

document.getElementById('submit-btn').addEventListener('click',formValidation);

//////////




document.getElementById("messageForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah reload halaman

// Mengambil data dari form
let name = document.getElementById("name").value;
let birthdate = document.getElementById("birthdate").value;
let gender = document.querySelector('input[name="gender"]:checked');
let message = document.getElementById("message").value;

if (!gender) {
    alert("Pilih jenis kelamin!");
    return;
}

// Format waktu sesuai contoh (Fri Jun 17 2022 11:27:28 GMT+0700)
let currentTime = new Date().toString();

// Menampilkan hasil di box output
let outputBox = document.getElementById("outputBox").style.display = "block";
outputBox.innerHTML = `
    <strong>Current time:</strong> ${currentTime} <br>
    <strong>Nama:</strong> ${name} <br>
    <strong>Tanggal Lahir:</strong> ${birthdate} <br>
    <strong>Jenis Kelamin:</strong> ${gender.value} <br>
    <strong>Pesan:</strong> ${message}
`;

//mengubah nama di homepage
let greetingElement = document.getElementById("user-greeting");
if (greetingElement) {
    greetingElement.textContent = name;
}

 // Reset form setelah submit
 document.getElementById("messageForm").reset();
});
