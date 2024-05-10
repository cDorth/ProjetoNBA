function showTable(tableNumber) {
    var table1 = document.getElementById('tabela1');
    var table2 = document.getElementById('tabela2');

  
    if (tableNumber === 1) {
      table1.style.display = 'block';
      table2.style.display = 'none';
    } else if (tableNumber === 2) {
      table1.style.display = 'none';
      table2.style.display = 'block';
    }
  }



function at(){
    var mudartema = document.getElementById('tema');

    if(mudartema.getAttribute('href') === 'style.css'){
        mudartema.setAttribute('href','altocontraste.css');

    } else if(mudartema.getAttribute('href') === 'mono.css'){
        mudartema.setAttribute('href','altocontraste.css');
    }
    
    else{
        mudartema.setAttribute('href','style.css')
    }

    }

    function mono(){
        var mudartema = document.getElementById('tema');
        if(mudartema.getAttribute('href') === 'style.css'){
            mudartema.setAttribute('href','mono.css');
            
        }else if(mudartema.getAttribute('href') === 'altocontraste.css'){
            mudartema.setAttribute('href','mono.css');
        }
         else{
            mudartema.setAttribute('href','style.css')
        }

    }