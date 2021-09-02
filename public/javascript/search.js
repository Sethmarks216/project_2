async function searchPup(event) {
  event.preventDefault();

    const dogType = document.querySelector('#dogSearch').value;

    const response = await fetch(`/api/dog/${dogType}`, {
    method: 'get',
    headers: { 'Content-Type': 'application/json' }
  });


    if (response.ok) {
    document.location.replace('/searchResults');
  } else {
    alert(response.statusText);
  }

}

document.querySelector('#dogSearch').addEventListener('click', searchPup);