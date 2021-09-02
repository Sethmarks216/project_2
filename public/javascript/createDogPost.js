  let submit = document.getElementById('submit');

async function createDogPost(event) {

  
  event.preventDefault();

  const dog_name = document.querySelector('#dog_name').value;
  const dog_breed = document.querySelector('#breed').value;;


  const response = await fetch(`/api/dog`, {
    method: 'POST',
    body: JSON.stringify({
      dog_name,
      dog_breed,
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  
  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
}

submit.addEventListener('click', createDogPost)
