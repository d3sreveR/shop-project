let proizvodi = document.getElementById("proizvodi");


function Palto (cardImage, cardTitle, cardContent) {

    this.cardImage = cardImage;
    this.cardTitle = cardTitle;
    this.cardContent = cardContent;

    proizvodi.innerHTML += 
    
    `
    <div class="col s12 m6 l4">
      <div class="card">
        <div class="card-image">
          <img src="${cardImage}">
          <span class="card-title">${cardTitle}</span>
          <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
        </div>
        <div class="card-content">
          <p>${cardContent}</p>
        </div>
      </div>
    </div>
    `

}

new Palto ("/./palta_thumbnail.jpg", "Dukser 120", "Памучен дуксер");
new Palto ("/./palta_thumbnail.jpg", "Dukser 120", "Памучен дуксер");
new Palto ("/./palta_thumbnail.jpg", "Dukser 120", "Памучен дуксер");
new Palto ("/./palta_thumbnail.jpg", "Dukser 120", "Памучен дуксер");
