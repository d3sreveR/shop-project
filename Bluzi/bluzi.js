let proizvodi = document.getElementById("proizvodi");


function Bluza(cardImage, cardTitle, cardContent) {

    this.cardImage = cardImage;
    this.cardTitle = cardTitle;
    this.cardContent = cardContent;

    proizvodi.innerHTML += 
    
    `
    <div class="col s12 m6 l4">
      <div class="card">
        <div class="card-image">
          <img src="${cardImage}">
          <span class="card-title" style="background-color: black; font-size: xxxl">${cardTitle}</span>
          <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
        </div>
        <div class="card-content">
          <p>${cardContent}</p>
        </div>
      </div>
    </div>
    `

}

new Bluza ("/./images/Bluzi/bluza1.jpg", "650 ден.", "Блуза");
new Bluza ("/./images/Bluzi/bluza2.jpg", "650 ден.", "Блуза");
new Bluza ("/./images/Bluzi/bluza3.jpg", "650 ден.", "Блуза");
new Bluza ("/./images/Bluzi/bluza4.jpg", "650 ден.", "Блуза");
new Bluza ("/./images/Bluzi/bluza5.jpg", "650 ден.", "Блуза");
