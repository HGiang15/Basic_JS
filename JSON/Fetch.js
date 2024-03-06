// Backend -> API(URL) -> Fetch -> JSON/XML -> JSON.parse
// -> Javascript types -> Render ra giao diện với HTML

// Fetch

var postApi = ' https://jsonplaceholder.typicode.com/posts';

fetch(postApi)
    .then(function(response) {
        return response.json(); // JSON.parse: JSON -> Javascript types
    })
    .then(function(posts) {
        // console.log(posts);
        var htmls = posts.map(function(post) {
            return `<li>
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            </li>`;
        });
        var html = htmls.join('');
        document.getElementById('post-block').innerHTML = html;
    })
