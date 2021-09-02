const cloudinary = "https://api.cloudinary.com/v1_1/dns8bhr2c/upload"
const cloudinaryPreset = "pxnupib5"

const imgPreview = document.getElementById('img-preview');
let fileUpload = document.getElementById('picture');


async function image(event) {

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
        const image_url = res.data.secure_url
        const image_content = document.getElementById('dog_info').value;

        fetch(`/api/image`, {
            method: 'POST',
            body: JSON.stringify(
                {image_content, 
                    image_url}
            ),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        })
     

    }

fileUpload.addEventListener('change', image)