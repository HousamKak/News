window.onload = () => {
  const cards = document.querySelector("#news");
  allcomponent='';
  $.ajax({
    url: "http://localhost/Backend/news/news.php",
    success: function (data) {
      data = JSON.parse(data);
      for (let i = 0; i < data.length; i++) {
        title = data[i].title;
        text = data[i].text;
        component = `<div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${title}</h5>
              <p class="card-text">${text}</p>
            </div>
          </div>`;
        allcomponent += component;
      }
      cards.innerHTML += allcomponent;
    },
  });
};
