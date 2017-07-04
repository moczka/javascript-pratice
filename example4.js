window.onload = function(){
    
    function getNums(arr, total){
        if(total > arr.length){
            arr.push(arr.length);   
            getNums(arr, total);
        }
        return arr;
    }
    
    window.getNums = getNums;
    
    function getFactorial(number){
        var result = number <= 0 ? 1 : (number * getFactorial(number-1));
        return result;
    }
    
    window.getFactorial = getFactorial;
    
    function GCD(number1, number2){
        
        if(!number2){
          return number1;   
        }
        
        return GCD(number2, number1 % number2);

    }
    
    window.GCD = GCD;
    
    var range = [];
    
    function getRange(a, b){
           
        if(b > a){
            range.push(a);
            getRange(a + 1, b);   
        }
        
        return range;
        
    }
    
    window.getRange = getRange;
    
    function computeSum(arr){
        var i = 0, 
            len = arr.length, 
            total = 0;
        
        while(i < len){
            total += arr[i];
            i++;
        }
        return total;
        
    }
    
    window.computeSum = computeSum;
    
    
    function getExponent(number){
        var base = Math.sqrt(number);    
        
        if(number % base !== 0){
            return "Number doesn't have an even base";   
        }else{
            return number / base;   
        }
    }


}