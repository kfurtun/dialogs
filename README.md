# Functions

```js
function showDialog(content, title, onOkClick, onCancelClick, dialogType)
```

This function shows the dialog with the following parameters

`content` is a `string`

`title` is a `string`

`onOkClick` is a `function` that gets executed when user clicks OK

`onCancelClick` is a `function` that gets executed when user clicks cancel

`dialogType` can be either `1` for success, `2` for fail or `3` for warning

---

```js
function hideDialog()
```

This function hides the dialog

# Example

```js
function okClick() {
  console.log("Ok click");
}

function cancelClick() {
  console.log("Cancel click");
}

showDialog("Hello", "Correct", okClick, cancelClick, 1);
```
