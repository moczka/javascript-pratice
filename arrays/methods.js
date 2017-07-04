window.onload = function(){
	//
	window.isPrime = function isPrime(number){
		var divisor = 2,
			limit = number / 2;
		
		if(number == 2 || number == 3){
			return true;
		}
		while(limit >= divisor){
			
			console.log("called");
			
			if(number % 3 == 0 || number % 2 == 0){
				return false;
			}
			if(number % divisor == 0){
				return false;
			}
			
			divisor++;
		}
		return true;
	}
	
	window.getPrime = function getPrime(n){
		var index = 2,
			primes = [];
		
		while(n >= primes.length){
			if(isPrime(index)){
				primes.push(index);
			}
			index++;
		}
		return primes;
		
	}
	
	window.fizzBuzz = function fizzBuzz(n){
		var current = 1;
		while(n >= current){
			
			if((current % 5 == 0) && (current % 3 == 0)){
				console.log("fizz and buzz");
			}else if(current % 3 == 0){
				console.log("fizz");
			}else if(current % 5 == 0){
				console.log("buzz");
			}else{
				console.log(current);
			}
			current++;
		}
		
	};
	
	
	
	
}