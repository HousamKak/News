window.onload(()=>{

    $.ajax({
        url: "http://localhost/Backend/news/news.php",
        cache: false,
    //     contentType: "application/json; charset=utf-8",
    // dataType: "json",
        success: function(data){
      console.log(data[0].text)        
    }
    });


    title="nothing";
    text="empty";

component=`<div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${title}</h5>
              <p class="card-text">${text}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>`;

  

}