window.onload = function(){
 
    function init(){
        
        var divs = [];
        while(10 > divs.length){
            var div = document.createElement('div'),
                randomColors = [Math.floor(Math.random()*255), Math.floor(Math.random()*255), Math.floor(Math.random()*255)],
                rgbColor = "rgb(" + randomColors.join() + ");";
            div.setAttribute('style', 'background: '+rgbColor+" margin: 2px; ");
            divs.push(div);
            document.body.appendChild(div);
        }
        
        
        var addHandlers = function(divs){
          
            for(var i = 0, len = divs.length; i<len; i++){
                var currentDiv = divs[i];   
                
                currentDiv.onclick = function(i){
                    return function(e){
                        console.log("Index of the div you clicked is ", i);   
                    }
                }(i);  
            }
            
        };
        
        
        addHandlers(divs);
        window.divs = divs;
        
        
    }
    

    
    init();
    
}