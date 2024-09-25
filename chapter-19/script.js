function dataRequest() {
    // Step-01
    let request = new XMLHttpRequest();

    // Step-04
    request.onload = function () {
        if (this.status === 200) {
            let x = document.getElementById('output');
            x.innerHTML = this.responseText;
        }
    }
    // Step-02
    request.open('GET', './image/myfile.txt', true);
    // Step-03
    request.send();

}