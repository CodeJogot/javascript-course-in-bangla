
function mainFunction() {

  function fetchUserData() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            //resolve('User data fetched');
            reject("The Website Crushed!")
        }, 2000);
    });
}

function fetchOrdersData() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('Orders data fetched');
        }, 1500);
    });
}

async function processData() {
    try {
        let userData = await fetchUserData();
        console.log(userData);
        let ordersData = await fetchOrdersData();
        console.log(ordersData);
    } catch (err) {
      console.log(err);
    }
    
    }
    processData();
}






