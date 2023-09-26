/*eslint linebreak-style: ["error", "windows"]*/
async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
}

async function renderPosts() {
  try {
    const posts = await fetchPosts();
    const postContainer = document.querySelector(".container");

    const cardTemplate = document.getElementById("post-card-template");

    posts.forEach((post) => {
      const cardClone = cardTemplate.content.cloneNode(true);
      cardClone.querySelector(".card-title").textContent = post.title;
      cardClone.querySelector(
        ".user-id",
      ).textContent = `User ID: ${post.userId}`;
      cardClone.querySelector(".post-id").textContent = `POST ID: ${post.id}`;
      cardClone.querySelector(".card-body").textContent = post.body;

      postContainer.appendChild(cardClone);
    });
  } catch (error) {
    console.error("Error fetching or rendering data:", error);
  }
}

renderPosts();
