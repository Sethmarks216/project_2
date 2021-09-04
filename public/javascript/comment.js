async function commentFormHandler(event) {
    event.preventDefault();
  
  const comment_text = document.querySelector('.comment-body').value.trim();
  
    const image_id = window.location.toString().split('/')[4];
 
    if (comment_text) {
        const response = await fetch('/api/comment', {
          method: 'POST',
          body: JSON.stringify({
            image_id,
            comment_text
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
      
        if (response.ok) {
          document.location.reload();
        } else {
          alert(response.statusText);
        }
      }
  }
  
  document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);