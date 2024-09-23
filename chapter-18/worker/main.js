let worker;

function startWorker() {
    if (typeof Worker !== "undefined") {
      if (!worker) {
        worker = new Worker("worker.js");
      }

      worker.onmessage = function (e) {
        document.getElementById("result").textContent = e.data; 
      };
    } else {
      document.getElementById("result").textContent =
        "Web Workers are not supported in your browser.";
    }
    alert("I'm faster!!");
}