let postsArray = [];
const form = document.getElementById('form')

function render() {
  let postsHtml = ''
  postsArray.map((post) => {
    postsHtml += `
      <div class="post">
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <hr></hr>
      </div>
    `
  })
  document.getElementById('posts').innerHTML = postsHtml
}


fetch('https://apis.scrimba.com/jsonplaceholder/posts')
  .then(response => response.json())
  .then(data => {
    postsArray = data.slice(0, 5)
    render()
})
  
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const postObj = {
    title: e.target.title.value,
    body: e.target.body.value
  }
  fetch('https://apis.scrimba.com/jsonplaceholder/posts', {
    method: 'POST', 
    body: JSON.stringify(postObj),
    headers: {'Content-Type': 'application/json' }
  })
  .then(res => res.json())
  .then(data => {
    postsArray.unshift(data)
    render();
    form.reset()
  })
})
