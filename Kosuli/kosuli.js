let proizvodi = document.getElementById("proizvodi");


function Kosula (cardImage, cardTitle, cardContent) {

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

new Kosula ("/./images/Kosuli/kosula1.jpg", "750 ден.", "Летна кошула");
new Kosula ("/./images/Kosuli/kosula2.jpg", "750 ден.", "Летна кошула");
new Kosula ("/./images/Kosuli/kosula3.jpg", "750 ден.", "Летна кошула");
new Kosula ("/./images/Kosuli/kosula4.jpg", "750 ден.", "Летна кошула");
new Kosula ("/./images/Kosuli/kosula5.jpg", "750 ден.", "Летна кошула");
