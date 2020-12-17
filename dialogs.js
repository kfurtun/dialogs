function showDialog(content, title, onOkClick, onCancelClick, dialogType) {
  createDialog();
  document.getElementById("dialog-background").style.display = "block";
  document.getElementById("dialog-content").innerText = content;
  document.getElementById("dialog-title").innerText = title;

  document.getElementById("dialog-button-ok").onclick = function () {
    onOkClick();
    hideDialog();
  };
  document.getElementById("dialog-button-cancel").onclick = function () {
    onCancelClick();
    hideDialog();
  };

  if (dialogType == 1) {
    document.getElementById("dialog-frame").classList.add("success");
    document.getElementById("dialog-frame").classList.remove("fail");
    document.getElementById("dialog-frame").classList.remove("warning");

    document.getElementById("dialog-icon-success").style.display = "block";
    document.getElementById("dialog-icon-fail").style.display = "none";
    document.getElementById("dialog-icon-warning").style.display = "none";
  } else if (dialogType == 2) {
    document.getElementById("dialog-frame").classList.add("fail");
    document.getElementById("dialog-frame").classList.remove("success");
    document.getElementById("dialog-frame").classList.remove("warning");

    document.getElementById("dialog-icon-success").style.display = "none";
    document.getElementById("dialog-icon-fail").style.display = "block";
    document.getElementById("dialog-icon-warning").style.display = "none";
  } else if (dialogType == 3) {
    document.getElementById("dialog-frame").classList.add("warning");
    document.getElementById("dialog-frame").classList.remove("fail");
    document.getElementById("dialog-frame").classList.remove("success");

    document.getElementById("dialog-icon-success").style.display = "none";
    document.getElementById("dialog-icon-fail").style.display = "none";
    document.getElementById("dialog-icon-warning").style.display = "block";
  }
}
// this function hides the dialog
function hideDialog() {
  document.getElementById("dialog-background").style.display = "none";
}

function createDialog() {
  const dialog = document.createElement("div");
  dialog.className = "dialog-background";
  dialog.id = "dialog-background";
  document.body.appendChild(dialog);

  const frame = document.createElement("div");
  frame.className = "dialog-frame";
  frame.id = "dialog-frame";
  dialog.appendChild(frame);

  const logo = document.createElement("div");
  logo.className = "dialog-logo";
  frame.appendChild(logo);

  const success = document.createElement("i");
  success.className = "fas fa-check fa-10x";
  success.id = "dialog-icon-success";
  logo.appendChild(success);

  const fail = document.createElement("i");
  fail.className = "fas fa-times fa-10x";
  fail.id = "dialog-icon-fail";
  logo.appendChild(fail);

  const warning = document.createElement("i");
  warning.className = "fas fa-exclamation-circle fa-10x";
  warning.id = "dialog-icon-warning";
  logo.appendChild(warning);

  const title = document.createElement("div");
  title.className = "dialog-title";
  title.id = "dialog-title";
  frame.appendChild(title);

  const content = document.createElement("div");
  content.className = "dialog-content";
  content.id = "dialog-content";
  frame.appendChild(content);

  const footer = document.createElement("div");
  footer.className = "dialog-footer";
  frame.appendChild(footer);

  const buttonOk = document.createElement("button");
  buttonOk.id = "dialog-button-ok";
  buttonOk.innerText = "OK";
  footer.appendChild(buttonOk);

  const buttonCancel = document.createElement("button");
  buttonCancel.id = "dialog-button-cancel";
  buttonCancel.innerText = "Cancel";
  footer.appendChild(buttonCancel);
}
