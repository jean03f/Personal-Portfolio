document.addEventListener('DOMContentLoaded', function() {
    const blogList = document.getElementById('blog-list');
    fetch('posts.json')

    .then(response => response.json())

    .then(posts => {

        posts.forEach(post => {

        const postElement = document.createElement('div');

        // It provides a card layout to separe each post; providing a buttom and top margin of 3
        postElement.classList.add("card", "card-body", "mb-3", "mt-3")

        // Each element will margins in the right and left too
        postElement.style.marginRight = "2rem";
        postElement.style.marginLeft = "2rem";


        // For each iteration, the data from the json file will be added to the blogList 
        // Each post will have a title and a description under it 
        postElement.innerHTML = `
        <br> <h1><strong>${post.Title}</strong></h1>
        <br> 
        <p style="font-size:30px">${post.Description}</p>
        `;
        blogList.appendChild(postElement);
    });
    })

    //If at any point the fetch fails, it will output it in the console
    .catch(error => console.error('Error loading blog posts:', error));
    });