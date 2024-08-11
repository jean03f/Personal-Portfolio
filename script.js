document.addEventListener('DOMContentLoaded', function() {
    const blogList = document.getElementById('blog-list');
    fetch('posts.json')

    .then(response => response.json())

    .then(posts => {

        posts.forEach(post => {

        const postElement = document.createElement('div');

        postElement.classList.add("card", "card-body", "mb-3", "mt-3")

        postElement.style.marginRight = "2rem";
        postElement.style.marginLeft = "2rem";



        postElement.innerHTML = `
        <br> <h1><strong>${post.Title}</strong></h1>
        <br> 
        <p style="font-size:30px">${post.Description}</p>
        `;
        blogList.appendChild(postElement);
    });
    })

    .catch(error => console.error('Error loading blog posts:', error));
    });