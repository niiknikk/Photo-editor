const form = document.getElementById('form')
const formBtn = document.getElementById('formBtn')
let image = document.getElementById('Image');
let Range = document.querySelectorAll('.form-range')

//  Choose image locally
function previewFile() {
    const file = document.querySelector('input[type=file]').files[0];
    const reader = new FileReader();

    reader.addEventListener("load", function () {
        // convert image file to base64 string
        image.src = reader.result;
    }, false);

    if (file) {
        reader.readAsDataURL(file);
    }
}

// Choose image using Url
formBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let GetUrl = document.getElementById('GetUrl').value;
    if (GetUrl !== '') {
        image.setAttribute('src', GetUrl);
    }
    document.getElementById('GetUrl').value = ''
})


Range.forEach((range) => {
    // mousemove  work for desktop screen
    range.addEventListener('mousemove', handleImage)
    // touchmove work for mobile screen
    range.addEventListener('touchmove', handleImage)
})
function handleImage(e) {
    let brightness = document.getElementById('brightness').value
    let contrast = document.getElementById('contrast').value
    let grayscale = document.getElementById('grayscale').value
    let hueRotate = document.getElementById('hue-rotate').value
    let saturate = document.getElementById('saturate').value
    let sepia = document.getElementById('sepia').value
    let blur = document.getElementById('blur').value

    image.style.filter = `brightness(${brightness}%) contrast(${contrast}%) grayscale(${grayscale}%) hue-rotate(${hueRotate}deg) saturate(${saturate}%) sepia(${sepia}%) blur(${blur}px)`

    console.log('blah-blah')
}

// To reset All Range to its initial value
const resetBtn = document.getElementById('reset-btn')
resetBtn.addEventListener('click', (event) => {
    event.preventDefault()
    resetRange.reset()
    image.style.filter = ``;

})

//js code to take snap and download image
document.getElementById('snapDwd').addEventListener('click', function () {
    domtoimage.toBlob(document.getElementById('Image'))
        .then(function (blob) {
            window.saveAs(blob, 'image.png');
        });
});
