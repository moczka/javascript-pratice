window.onload = function(){
    
    Function.prototype.addMethod = function(name, func){
      
        if(!this.prototype[name]){
            this.prototype[name] = func;
        }
        
    };
    
    var getFibonacciBad = function(nth){
        
      return (
         nth < 2 ? nth : getFibonacciBad(nth-1) + getFibonacciBad(nth-2)
      );  
        
    };
    
    window.getFibonacciBad = getFibonacciBad;
    
    var getFibonacciGood = (function(){
        var memo = [0, 1];
        var fib = function(n){
            var result = memo[n];   
            if(typeof result !== "number"){
                result = fib(n-1) + fib(n-2);
                memo[n] = result;
            }
            return result;
        };
        return fib;
    })();
    
    window.getFibonacciGood = getFibonacciGood;
    
    var memoizer = function(memo, fundamental){
        var shell = function(n){
          var result = memo[n];  
            if(result !== "number"){
                result =  fundamental(shell, n);   
                memo[n] = result;
            }
            return result;
        };
        
        return shell;

    };
    
    var memoFibo = memoizer([0, 1], function(shell, n){
       return shell(n-1)+shell(n-2); 
    });
    
    window.memoFibo = memoFibo;
    

    
    
       
}