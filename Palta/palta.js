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

new Palto ("/./images/Jakni/jakna1.jpg", "2700 ден.", "Кожена Јакна");
new Palto ("/./images/Jakni/jakna2.jpg", "2700 ден.", "Кожена Јакна");
new Palto ("/./images/Jakni/jakna3.jpg", "2700 ден.", "Кожена Јакна");
new Palto ("/./images/Jakni/jakna4.jpg", "2700 ден.", "Кожена Јакна");
new Palto ("/./images/Jakni/jakna5.jpg", "2700 ден.", "Кожена Јакна");
