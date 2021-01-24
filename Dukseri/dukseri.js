let proizvodi = document.getElementById("proizvodi");


function Dukser(cardImage, cardTitle, cardContent) {

    this.cardImage = cardImage;
    this.cardTitle = cardTitle;
    this.cardContent = cardContent;

    proizvodi.innerHTML += 
    
    `
    <div class="col s12 m6 l4">
      <div class="card">
        <div class="card-image">
          <img src="${cardImage}">
          <span class="card-title" style="background-color: black;">${cardTitle}</span>
          <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
        </div>
        <div class="card-content">
          <p>${cardContent}</p>
        </div>
      </div>
    </div>
    `

}

new Dukser ("/./images/Dukseri/dukser1.jpg", "1250 ден.", "Памучен дуксер");
new Dukser ("/./images/Dukseri/dukser2.jpg", "1250 ден.", "Памучен дуксер");
new Dukser ("/./images/Dukseri/dukser3.jpg", "1250 ден.", "Памучен дуксер");
new Dukser ("/./images/Dukseri/dukser4.jpg", "1250 ден.", "Памучен дуксер");
new Dukser ("/./images/Dukseri/dukser5.jpg", "1250 ден.", "Памучен дуксер");
