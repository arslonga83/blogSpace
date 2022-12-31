fetch('https://apis.scrimba.com/jsonplaceholder/posts')
  .then(response => response.json())
  .then(data => {
    const postsArray = data.slice(0, 5)
    let postsHtml = ''
    postsArray.map((post) => {
      postsHtml += `
        <div>
          <h3>${post.title}</h3>
          <p>${post.body}</p>
          <hr></hr>
        </div>
      `
    })
    document.getElementById('posts').innerHTML = postsHtml
})
  

