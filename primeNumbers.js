
function showPrimeNumber(lowNumber, highNumber) {
    for( let i=lowNumber; i <= highNumber; i++){
        let isPrime = true;
        for(let j = 2; j<i; j++){
            if( i % j === 0 && j !==i){
               isPrime = false 
            }
        }
        if(isPrime){
            console.log(i);
        }
    }
}

showPrimeNumber(7, 13)

console.log(process.argv); 
//[
//  '/home/user/.nvm/versions/node/v16.12.0/bin/node',
//  '/home/user/Desktop/NodeJs/primeNumbers'
//]

console.log(process.argv.slice(2)); 