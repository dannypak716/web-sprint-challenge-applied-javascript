const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  console.log(title, date, temp);
  const newsHeader = document.createElement('div');
  const newsDate = document.createElement('span');
  const newsTitle = document.createElement('h1');
  const newsTemp = document.createElement('span');

  newsHeader.classList.add('header');
  newsDate.classList.add('date');
  newsTemp.classList.add('temp');

  newsDate.textContent = `${ date }`;
  newsTitle.textContent = `${ title }`;
  newsTemp.textContent = `${ temp }`;

  newsHeader.appendChild(newsDate);
  newsHeader.appendChild(newsTitle);
  newsHeader.appendChild(newsTemp);

  return newsHeader;
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const parent = document.querySelector(`${selector}`);
  const addArticle = Header("Lambda School", "September 3rd, 2021", "74°");
  parent.appendChild(addArticle);

}

export { Header, headerAppender }
