function ajax() {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("result").innerHTML = this.responseText;
    }
    };

    xhttp.open("GET", "./demo.text", true);
    xhttp.send();
}