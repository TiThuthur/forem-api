const rootCard = document.getElementById("root-card");

const response = await fetch("https://dev.to/api/articles/258");
const article = await response.json();
console.log(article);

const cardToAdd = document.createElement("div");
cardToAdd.className = "card card-width m-1";
cardToAdd.innerHTML = `
<img
  class="card-img-top"
  src="${article.social_image}"
  alt=""
/>
<div class="card-body">
  <div class="row">
    <img
      src="${article.user.profile_image}"
      alt=""
      class="rounded-circle col-4"
    />
    <h1 class="card-title h3 col-8">
      ${article.title}
    </h1>
  </div>
  <h2 class="h4">${article.readable_publish_date}</h2>
  <p class="text-secondary">${article.description}</p>
  ${article.body_html}
  <p class="minimized">published: ${article.published_at}</p>
</div>`;
rootCard.appendChild(cardToAdd);
