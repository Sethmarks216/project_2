async function signup(event) {
  event.preventDefault();

  //assings variable value based on what is entered in the specified field
  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  // if the variables are all valid, a fetch post request is sent to the relevant API route
  if (username && password) {
    const response = await fetch('/api/users', {
      method: 'post',
      body: JSON.stringify({
        username,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });
     //If response is valid, reroute the user to the homepage
    if (response.ok) {
     document.location.replace('/profile')
    } else {
      alert(response.statusText);
    }
  
  }

}

async function login(event) {
  event.preventDefault();

   //assings variable value based on what is entered in the specified field
  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  //if the variables are all valid, a fetch post request is sent to the relevant API route
  if (username && password) {
    const response = await fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        username,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });
     //If response is valid, reroute the user to the homepage 
    if (response.ok) {
      document.location.replace('/profile')
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.signup-form').addEventListener('submit', signup);
document.querySelector('.login-form').addEventListener('submit', login);