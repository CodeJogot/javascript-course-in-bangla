
function isPrime(n) {
    let count = 0; 
    for(let i=1;i<=n;i++){
        if(n%i==0){
            count++;
        }
    }
    if(count>2 || count==1){
        return false;
    }else{
        return true;
    }
}

let x = isPrime(2);
if(x==true){
    console.log("Prime");
}else{
    console.log("Not Prime");
}