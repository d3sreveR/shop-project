let proizvodi = document.getElementById("proizvodi");


function Pizami (cardImage, cardTitle, cardContent) {

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

new Pizami ("/./images/Sukni/sukna1.jpg", "599 ден.", "Суќна");
new Pizami ("/./images/Sukni/sukna2.jpg", "599 ден.", "Суќна");
new Pizami ("/./images/Sukni/sukna3.jpg", "599 ден.", "Суќна");
new Pizami ("/./images/Sukni/sukna4.jpg", "599 ден.", "Суќна");
new Pizami ("/./images/Sukni/sukna5.jpg", "599 ден.", "Суќна");
