let emarks = 0; 
 
let equescount = 0;
 
 var ecanser = 0;
 
 let ewanser = 0;
 
var currentTab = 0;
 // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
   
  if (n == (x.length - 1)) {
    document.getElementById("next").style.display = "inline";
  } else if (n == (x.length - 2)) {
    document.getElementById("next").style.display = "inline";
  } 
  //... and run a function that will display the correct step indicator:
  
} 

 function timernnnnn() {
 
   var fiveMinutes = 60 * 20,
       display = document.querySelector('#some_div');
	   
 startTimer(fiveMinutes, display);
 
 
 
  

}

function startTimer(duration, display) {

    var timer = duration, minutes, seconds;

    var n = setInterval(function () {

        minutes = parseInt(timer / 60, 10)

        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;

        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer == -1) {
        clearTimeout(n);
        doSomething();
    } else {
        
        timer--;
    }

    }, 1000);

}




function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
   
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab == x.length) {
    // ... the form gets submitted:
     currentTab = 0;
   
  }
  // Otherwise, display the correct tab:
  
   
  
    
  markanser();
  correctanser();
   
   
     
  showTab(currentTab);
    questionchecked();
  
   
}

  
 

function doSomething() {
      document.getElementById("regForm").submit() 
     
	 
 
 
}
 
function markanser() {
            const rbs = document.querySelectorAll('input[name="choice"]:checked');
           
            for (const rb of rbs) {
                if (rb.value == 'yes') {
                emarks = emarks + 1;
               
			   localStorage.emarks = emarks;
                   
            }  else {
 
              emarks = emarks - (0.25);
			  
			  localStorage.emarks = emarks;
                
				}   
 
         
               }
   
 
        } 
 
 function correctanser() {
            const rbs = document.querySelectorAll('input[name="choice"]:checked');
           
            for (const rb of rbs) {
                if (rb.value == 'yes') {
                          
                      ecanser = ecanser + 1;
                      localStorage.ecanser = ecanser;
                  }  else {
 
              ewanser = ewanser + 1;
              localStorage.ewanser = ewanser;
                 
                 }  
             }
		 }
 
 
 
 



const btn = document.getElementById('clear');
        // handle click button
 function clearresponsek() {
            document.querySelector('input[name="choice"]:checked').checked = false;
           
             
        } 
 
 function questionchecked() {
 
   const rbs = document.querySelectorAll('input[name="choice"]:checked');
       for (const rb of rbs) {
                if (rb.checked == true) {
                equescount = equescount + 1;
                   document.getElementById('quetion').innerHTML = equescount;
                    document.querySelector('input[name="choice"]:checked').checked = false;
                }  else {
                 equescount = equescount + 0;
				 
               } 
           
		   }
		   
		    
         } 
  
 
  
  
  
 /*  function firememory() {
   
   
  var firebaseRef = firebase.database().ref();
  var postData = {
	           
             emarks: emarks,
              ecorrectanser: ecanser,
              ewronganser: ewanser,
   
  }
  firebaseRef.child('Student/'+userFullName).update(postData);

    
}
  */ 
 
  /*  <script src="../js/app.js"></script> */
   
   
  