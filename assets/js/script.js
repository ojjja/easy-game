    
    // Add remove and reset nickname //
/*
    function addFunction() {
      let x = document.getElementById("nname").value;
      document.getElementById("demo").innerHTML = x;
    
    }
*/
/*
    function addFunction() {
      let y = document.getElementById("ngame").value;
      document.getElementById("gameNumber").innerHTML = y;
    }
 */   
/*
    function removeFunction() {
      document.getElementById("demo").innerHTML = "";
    }
*/
    function removeFunction() {
      document.getElementById("myForm").reset();
    }

     // Add remove and reset nickname //

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

// function computerCoice() {
      // Creates one random numbers between 0 and 2
 //     let num1 = Math.floor(Math.random() * 3);
 //     console.log(num1)
// }
