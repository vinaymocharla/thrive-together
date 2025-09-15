// Add JavaScript code for your web site here and call it from index.html.

let themebutton = document.getElementById("theme-button");

const toggleDarkMode = () => {

    // Write your code to manipulate the DOM here
    document.body.classList.toggle("dark-mode");


}

themebutton.addEventListener("click",toggleDarkMode);

let signNowButton= document.getElementById("sign-now-button");
let count =3;
const addSignature = (person) => {
    // Write your code to manipulate the DOM here
    //let name = document.getElementById("name").value;
    //let hometown = document.getElementById("hometown").value;

    let newSignature =document.createElement('p');

    newSignature.textContent = `🖊️ ${person.name} from ${person.hometown} supports this.`;

    let signaturesSection = document.querySelector(".signatures");

    signaturesSection.appendChild(newSignature);

   // document.getElementById("name").value="";
  //  document.getElementById("hometown").value="";
  //  document.getElementById("email").value="";

    document.getElementById("counter").remove();
    count=count+1;

    let counter = document.createElement('p');

    counter.id="counter";

    counter.textContent="🖊️ " + count + " people have signed this petition and support this cause.";

    

    signaturesSection.appendChild(counter);



    
}

//signNowButton.addEventListener("click",addSignature);



const validateForm = () => {



    let containsErrors = false;
  
    var petitionInputs = document.getElementById("sign-petition").elements;


    const person = {
      name: petitionInputs[0].value,
      hometown: petitionInputs[2].value,
      email: petitionInputs[1].value,
    };
    // TODO: Loop through all inputs
    for(let i=0;i<petitionInputs.length;i++){
        if (petitionInputs[i].value.length < 2) {
            
            petitionInputs[i].classList.add('error');
            containsErrors = true;

        }
        else {
            petitionInputs[i].classList.remove('error');
          }
    }

    const email = document.getElementById('email');

    if (!person.email.includes('.com')) {
      containsErrors = true;
      email.classList.add('error');
  
    }
    else {
      email.classList.remove('error');
      }

    if(containsErrors==false){

        addSignature(person);
        toggleModal(person);

        for(let i=0;i<petitionInputs.length;i++){

            petitionInputs[i].value = "";
            containsErrors = false;

        }

    }
  
    
  
  
  }
  
  signNowButton.addEventListener('click', validateForm);


  let animation = {

   revealDistance :150,
   intialOpacity :0,
   transitionDelay:'0s',
   transitionDuration:'2s',
   transitionProperty:'all',
   transitionTimingFunction:'ease'




  };


 const revealableContainers = document.querySelectorAll('.revealable');

  function reveal(){

    for(let i=0;i<revealableContainers.length;i++){

      let windowHeight = window.innerHeight;
      let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;

      if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
        /* add the active class to the revealableContainer's classlist */

        revealableContainers[i].classList.add('active');
        
      } else {
        /* remove the active class to the revealableContainer's classlist */

        revealableContainers[i].classList.remove('active');
      }
    }



  }


  window.addEventListener('scroll',reveal);


  let reduceMotionButton = document.getElementById("reduce-motion");


  let reduceButton  = ()=>{

    animation.revealDistance = 50; // Reduce the distance for the animation
  animation.transitionDuration = "0s"; // No transition for instant visibility
  animation.transitionTimingFunction = "none"; // Disable easing
  animation.initialOpacity = 1; // Fully visible immediately

  // Update the style of each revealable container
  for (let i = 0; i < revealableContainers.length; i++) {
    revealableContainers[i].style.transitionDelay = animation.transitionDelay;
    revealableContainers[i].style.transitionDuration =
      animation.transitionDuration;
    revealableContainers[i].style.transitionTimingFunction =
      animation.transitionTimingFunction;
    revealableContainers[i].style.opacity = animation.initialOpacity;
    revealableContainers[i].style.transform = `translateY(0px)`; // No movement
  }

  // Optional: Disable the "Reduce Motion" button to prevent multiple activations
  reduceMotionButton.disabled = true;
  reduceMotionButton.textContent = "Motion Reduced";
};




    
  
  reduceMotionButton.addEventListener("click",reduceButton)

  // toggle modal

  let modal = document.getElementById("thanks-modal");
  let modalContent = document.getElementById("thanks-modal-content");

  let toggleModal=(person)=>{

   

    modal.style.display = "flex";

    modalContent.textContent = (`Thank you so much ${person.name}! ${person.hometown} represent`);

    setTimeout(()=>{modal.style.display="none",clearInterval(intervalId)},4000);

    let intervalId = setInterval(scaleImage,500);

    

  };

  var scaleFactor =1;
  var modalImage = document.getElementById("modal-image");

  let scaleImage = ()=>{
    scaleFactor = scaleFactor === 1 ? 0.8 : 1;

    modalImage.style.transform = `scale(${scaleFactor})`;

  };

  let closeButton = document.getElementById("close-button");

  let closeModalPopup = ()=>{

    modal.style.display="none";
    
  }

  closeButton.addEventListener("click",closeModalPopup);

  





