


const cloudinary = "https://api.cloudinary.com/v1_1/dns8bhr2c/upload"
const cloudinaryPreset = "pxnupib5"

const imgPreview = document.getElementById('img-preview');
const fileUpload = document.getElementById('file-upload');


fileUpload.addEventListener('change', function (event) {

    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', cloudinaryPreset)

    axios({
        url: cloudinary,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: formData
    }).then(function (res) {
        const image = res.data.secure_url

        const response = await fetch(`/api/image`, {
            method: 'POST',
            body: JSON.stringify({
                image

            }),
            headers: {
                'Content-Type': 'application/json'
            }


        })
    }).catch(function (err) {

    })

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }


})