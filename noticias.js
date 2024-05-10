function at(){
    var mudartema = document.getElementById('tema');

    if(mudartema.getAttribute('href') === 'style2.css'){
        mudartema.setAttribute('href','altocontraste2.css');

    } else if(mudartema.getAttribute('href') === 'mono2.css'){
        mudartema.setAttribute('href','altocontraste2.css');
    }
    
    else{
        mudartema.setAttribute('href','style2.css')
    }

    }

    function mono(){
        var mudartema = document.getElementById('tema');
        if(mudartema.getAttribute('href') === 'style2.css'){
            mudartema.setAttribute('href','mono2.css');
            
        }else if(mudartema.getAttribute('href') === 'altocontraste2.css'){
            mudartema.setAttribute('href','mono2.css');
        }
         else{
            mudartema.setAttribute('href','style2.css')
        }

    }