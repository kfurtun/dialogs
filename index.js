//showDialog("Hello", "Correct", okClick, cancelClick, 1);

function okClick() {
  console.log("Ok click");
}
function cancelClick() {
  console.log("Cancel click");
}

function onSuccessClick() {
  showDialog("Hello", "Correct", okClick, cancelClick, 1);
}

function onFailClick() {
  showDialog("Hello", "Correct", okClick, cancelClick, 2);
}

function onWarningClick() {
  showDialog("Hello", "Correct", okClick, cancelClick, 3);
}
