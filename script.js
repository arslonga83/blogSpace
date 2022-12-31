fetch('https://apis.scrimba.com/jsonplaceholder/posts')
  .then(response => response.json())
  .then(data => {
    const postsArray = data.slice(0, 5)
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
})
  
document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const postObj = {
    title: e.target.title.value,
    body: e.target.body.value
  }
  console.log(postObj)
})
