let proizvodi = document.getElementById("proizvodi");


function Patiki (cardImage, cardTitle, cardContent) {

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

new Patiki ("/./images/Maici/maica1.jpg", "399 ден.", "Маица");
new Patiki ("/./images/Maici/maica2.jpg", "399 ден.", "Маица");
new Patiki ("/./images/Maici/maica3.jpg", "399 ден.", "Маица");
new Patiki ("/./images/Maici/maica4.jpg", "399 ден.", "Маица");
