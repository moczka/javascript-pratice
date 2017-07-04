window.onload = function(){
    
    function isPrime(number){
        var divisor = 2;
        
        while((number/2) > divisor){
            if(number % divisor == 0){
               return false;   
            }
            divisor++;
        }
        return true;
    }
    
    window.isPrime = isPrime;
    
    function getPrimeFactor(n){
        var factors = [1],
            divisor = 2;
        
        while(n>2){
            if(n % divisor == 0){
                factors.push(divisor);
                n /= divisor;
            }else{
                divisor++;   
            }
        }
        
        return factors;
        
    }
    
    window.getPrimeFactors = getPrimeFactor;
    
    function getFib(n){
        var numbers = [0, 1];
        
        for(var i = 2; i<=n; i++){
            numbers[i] = numbers[i-1]+numbers[i-2];   
        }
        return numbers[n];
        
    }
    
    
    window.getFib = getFib;
    
    function getGCD(a, b){
        var divisor = 0,
            GCD = 0;
        
        if(a % b == 0 || b % a == 0){
            GCD = a > b ? b : a;
            return GCD;
        }
            
        while(a >= divisor && b >= divisor){
            if((a % divisor == 0) && (b % divisor == 0)){
                GCD = divisor;   
            }
            divisor++;
        }
        return GCD;
        
    }
    
    
    window.getGCD = getGCD;
    
    function recursiveGCD(a, b){
        
        if(!b){
            return a;   
        }
        
        return recursiveGCD(b, a % b);
        
    }
    
    window.recurisveGCD = recursiveGCD;
    
    function removeDup(arr){
        
        var newArry = [],
            exists = {},
            elm;
        
        for(var i = 0, len = arr.length; i<len; i++){
            elm = arr[i];
            if(!exists[elm]){
                newArry.push(elm);
                exists[elm] = true;
            }
        }
        return newArry;
    }
    
    window.removeDub = removeDup;
    
    function mergeSorted(a, b){
        var outArray;
        
        if(a.length == 0){
            return b;   
        }
        if(b.length == 0){
            return a;   
        }
        
        outArray = a.concat(b);
        
        outArray.sort(function(a, b){
            return a - b;  
        })
        
        return outArray;
        
    }
    
    window.mergeSorted = mergeSorted;
    
    function mergeThem(a, b){
        var outArray = [],
            aElem = a[0],
            bElem = b[0],
            i = 1,
            j = 1;
        
        if(!a.length){
            return b;
        }
        if(!b.length){
            return a;   
        }
        
        while(aElem || bElem){
            if((aElem && !bElem) || aElem <= bElem){
                outArray.push(aElem);
                aElem = a[i++];
            }else{
                outArray.push(bElem);
                bElem = bElem[j++];
            }
        }
        
        return outArray;    
        
    }
    
    window.mergeThem = mergeThem;
    
    
    function reverse(string){
       var letters = [],
           i = string.length -1;
        
        while(i >= 0){
            letters.push(string[i]);
            i--;
        }
        return letters.join('');
    }
    
    window.reverseString = reverse;
    
    
    
    function reverseR(string){
        if(string === ""){
            return "";
        }else{
            return reverseR(string.substr(1)) + string.charAt(0);   
        }
        
    }
    
    window.reverseR = reverseR;
    
    function getFactorial(number){
        if(number <= 1){
            return 1;   
        }
        
        return number * getFactorial(number - 1);
        
    }
    
    window.getFactorial = getFactorial;
    
    
    function getFact(number){
        var result = 1,
            i = 1;
        
        while(number >= i){
            result *= i;
            i++;
        }
        return result;
    }
    
    window.getFact = getFact;
    
    
    
    
}