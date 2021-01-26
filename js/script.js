function chooseColor() {
    let selectedColor = document.getElementById('input').value;
    document.body.style.backgroundColor = selectedColor;
    location.reload();
}