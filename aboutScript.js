let submitFormButton = document.getElementById("submitFormButton");
let nameForm = document.getElementById("first_name");
let surnameForm = document.getElementById("last_name");
let emailForm = document.getElementById("email");
let textForm = document.getElementById("textarea2");

let receivedMails = [];


submitFormButton.addEventListener("click", () => {
  receivedMails.push = `${nameForm.value} ${surnameForm.value}, емаил: ${emailForm.value}, ви испрати порака со содржина ${textForm.value} `
  // console.log(`${nameForm.value} ${surnameForm.value}, емаил: ${emailForm.value}, ви испрати порака со содржина ${textForm.value} `)
  console.log(receivedMails)


})