import axios from 'axios'

const Card = ( {headline, authorPhoto, authorName} ) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //



  
  const artCard = document.createElement('div');
  const artHeadline = document.createElement('div');
  const artAuthor = document.createElement('div');
  const imageContainer = document.createElement('div');
  const artAuthorPhoto = document.createElement('img');
  const artAuthorName = document.createElement('span');

  artCard.classList.add('card');
  artHeadline.classList.add('headline');
  artAuthor.classList.add('author');
  imageContainer.classList.add('img-container');

  artCard.appendChild(artHeadline);
  artCard.appendChild(artAuthor);
  artAuthor.appendChild(imageContainer);
  artAuthor.appendChild(artAuthorName);
  imageContainer.appendChild(artAuthorPhoto);

  artHeadline.textContent = `${ headline }`;
  artAuthorName.textContent = `By ${ authorName }`;
  artAuthorPhoto.src = `${ authorPhoto }`;

  artCard.addEventListener('click', () => {
    console.log(headline);
  })
  return artCard;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  (async () => {
    try {
      const getArticles = await axios.get('http://localhost:5000/api/articles');
      console.log(getArticles);
      const allArticles = getArticles.data.articles
      console.log(allArticles);
      const articleTopics = Object.keys(allArticles);
      for(let i = 0; i < articleTopics.length; i++){
        const topicArticles = allArticles[articleTopics[i]];
        for(let k = 0; k < topicArticles.length; k++){
          const newArticle = Card(topicArticles[k]);
          console.log(newArticle);
          const parentElement = document.querySelector(`${selector}`);
          parentElement.appendChild(newArticle);
        }
      }
    } catch(err) {
      console.log(err);
    }
  })();


}

export { Card, cardAppender }
