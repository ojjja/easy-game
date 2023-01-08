    
  
/*
    function removeFunction() {
      document.getElementById("demo").innerHTML = "";
    }
*/
    // Reset input
    
    function removeFunction() {
      document.getElementById("myForm").reset();
    }

     // Add and remove input

     function addFunction() {
      let x = document.getElementById("nname").value;
      document.getElementById("demo").innerHTML = x;

      let y = document.getElementById("ngame").value;
      document.getElementById("gameNumber").innerHTML = y;

      let z = document.getElementById("opponent").value;
      document.getElementById("oppName").innerHTML = z;

      let a = document.getElementById("level").value;
      document.getElementById("levelNumber").innerHTML = a;
    }

    // Add and remove inputfield
    
    function oppFunction() {
      let z = document.getElementById("opponent").value

      if ( z = computer) {
        document.getElementById("level"). = false
      }
    }

/*
    // Creates one random numbers between 0 and 2
     function computerCoice() {
      
     let num1 = Math.floor(Math.random() * 3);
    console.log(num1)
 }
*/