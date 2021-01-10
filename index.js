//showDialog("Hello", "Correct", okClick, cancelClick, 1);

function okClick() {
  console.log("Ok click");
}
function cancelClick() {
  console.log("Cancel click");
}

function onSuccessClick() {
  showDialog("Hello", "Correct", okClick, undefined, 1);
}

function onFailClick() {
  showDialog("Hello", "Correct", okClick, cancelClick, 2);
}

function onWarningClick() {
  try {
    showDialog("Hello", "Correct", okClick, cancelClick, 3);
  } catch (error) {
    console.log(error.stack);
  }
}

// showSpinner("MY message", 10);
