let qrcode = new QRCode(document.querySelector(".qrcode"));
const inputField = document.getElementById("qrInput");
const clearButton = document.getElementById("clearBtn");

function updateQrCode() {
  const inputText = inputField.value;
  console.log(inputText);
  if (inputText) {
    qrcode.makeCode(inputText);
    clearButton.disabled = false;
  } else {
    qrcode.makeCode("Scan to discover more!");
    clearButton.disabled = true;
  }
}

function clearInput() {
  inputField.value = "";
  updateQrCode();
}

qrcode.makeCode("Scan to discover more!");
clearButton.disabled = true;
