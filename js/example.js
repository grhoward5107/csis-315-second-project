
    // Prompt the user for a number between 3 and 8
    var number = prompt("Enter a number:", "Choose a number between 3 and 8");
    // Prompt the user for a whole number between 1 and 10
    var whole_number = prompt("Enter a number:", "Choose a number between 1 and 10"); 
    // Prompt the user for a basic aritmetic operator of addition or subtraction
    var arithmetic_operator = prompt("Enter a basic arithmetic operator :", "Choose addition or subtraction");
    
    var table = number;
    var operator = arithmetic_operator; 
    var i = 1; 
    var wholenumber = whole_number; 
    var msg = ' '; 
    
    if (operator === 'addition'){
        while (i <= wholenumber) {
            msg += i + ' + ' + table + ' = ' + (parseInt(i) + parseInt(table)) + '<br />'; 
            i++; 
        }
    } else{
        while (i <= wholenumber){
            msg += i + ' - ' + table + ' = ' + (i - table) + '<br />'; 
            i++; 
        }
    } 

   
    document.getElementById('example').innerHTML = msg; 

  
         