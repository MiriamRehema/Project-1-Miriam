const menu=document.querySelector("mobile_menu");
const menuLinks=document.querySelector("navbar_menu");
menu.addEventListener('click',function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');

    //add event listener
    const navbar_button = document.getElementsByClassName('navbar_button');
    submit.addEventListener('click', function() {
      alert('You have successfully registered your motorbike!');
    });
})
function registeredOwners(){
  fetch("http://localhost:3000/Registered/")
  .then(function (response) {
    console.log(response);
    return response.json();
  })
  .then(function (data) {
    data.map((Registered)=>{
      const ul=document.querySelector("navbar_menu");
      const li=document.createElement("li");
      li.textContent=Registered.owners;
      ul.appendChild(li);

      li.addEventListener('click',(e)=>{
        e.preventDefault()

      })
    })
    console.log(data);
  });
}
document.addEventListener("DOMContentLoaded", function () {
  // Retrieve the necessary DOM elements
  const navbar_logo = document.querySelector("navbar_logo");
  const navbar_links = document.getElementsByClassName=("navbar_links");

  

  // Function to populate the movie details with data
   function populateRegisteredBikes(registered) {
    navbar_logo.textContent = `navbar_logo:${welcome}`;
    navbar_links.textContent = `navbar_links: ${RegisteredOwner} minutes`;
   
  }
} )







































































