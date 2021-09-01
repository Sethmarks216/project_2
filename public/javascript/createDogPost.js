async function createDogPost(event) {
  event.preventDefault();


  const dogName = document.querySelector('input[name="dog_name"]').value;
  const dogbreed = document.querySelector('#breed').value;
  const imgCaption =  document.querySelector('#image_caption').value;
 

  const response = await fetch(`/api/dog`, {
    method: 'POST',
    body: JSON.stringify({
      dogName,
      dogbreed,
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(() => {

    await fetch('/api/imageCaption', {

    method: 'POST',
    body: JSON.stringify({
      imgCaption
    }),
    headers: {
      'Content-Type': 'application/json'
    }
    })
  }
  
  );

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.submit-btn').addEventListener('submit', createDogPost);



// $(document).ready(function() {
//         let imagesPreview = function(input, placeToInsertImagePreview) {
//           if (input.files) {
//             let filesAmount = input.files.length;
//             for (i = 0; i < filesAmount; i++) {
//               let reader = new FileReader();
//             //   reader.onload = function(event) {
//             //     $($.parseHTML("<img>"))
//             //       .attr("src", event.target.result)
//             //       .appendTo(placeToInsertImagePreview);
//             //   };
//               reader.readAsDataURL(input.files[i]);
//             }
//           }
//         };
//         $("#input-files").on("change", function() {
//           imagesPreview(this, "div.preview-images");
//         });
//       });