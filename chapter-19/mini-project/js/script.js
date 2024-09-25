document.getElementById('loadData').addEventListener('click', loadUserData);

function loadUserData() {
  let xhttp = new XMLHttpRequest();
  
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      const users = JSON.parse(this.responseText);
      let output = '';

      users.forEach(user => {
        output += `
          <div class="user-card">
            <h3>${user.name}</h3>
            <p>Email: ${user.email}</p>
            <p>Phone: ${user.phone}</p>
          </div>
        `;
      });

      document.getElementById('userList').innerHTML = output;
    }
  };

  xhttp.open("GET", "https://jsonplaceholder.typicode.com/users", true);
  xhttp.send();
}
