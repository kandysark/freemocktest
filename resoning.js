let rmarks = 0; 
 
let rquescount = 0;
 
 var rcanser = 0;
 
 let rwanser = 0;
 
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
                rmarks = rmarks + 1;
                localStorage.rmarks = rmarks;
          
                    
                }  else {
 
              rmarks = rmarks - (0.25);
			  localStorage.rmarks = rmarks;
                 }   
 
         
               }
   
 
        } 
 
 function correctanser() {
            const rbs = document.querySelectorAll('input[name="choice"]:checked');
           
            for (const rb of rbs) {
                if (rb.value == 'yes') {
                
                  rcanser = rcanser + 1;
                localStorage.rcanser = rcanser;
                  }  else {
 
              rwanser = rwanser + 1;
			  localStorage.rwanser = rwanser;
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
                rquescount = rquescount + 1;
 
                      document.getElementById('quetion').innerHTML = rquescount;
                    document.querySelector('input[name="choice"]:checked').checked = false;
                }  else {
 
              rquescount = rquescount - 0;
 

                    } 
            }
	 
  } 
  
  /* 
  function firememory(uid, username) {
  // A post entry.
  var postData = {
             rmarks: rmarks,
			 rcorrectanser: rcanser,
			 rwronganser: rwanser,
			  
  };

  // Get a key for a new Post.
  var newPostKey = firebase.database().ref().child('posts').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/posts/' + newPostKey] = postData;
  updates['/user-posts/' + uid + '/' + newPostKey] = postData;

  return firebase.database().ref().update(updates);
} */
  
 
   
   
   
  