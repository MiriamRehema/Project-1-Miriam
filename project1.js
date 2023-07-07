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
fetch("project1.json")
  .then(function (response) {
    console.log(response);
    return response.json();
  })
  .then(function (data) {
    data.map((Registered)=>{
      const ul=document.querySelector("navbar_menu");
      const li=document.createElement("li");
      li.textContent=Registered.bikes
      ul.appendChild(li);

      li.addEventListener('click',(e)=>{
        e.preventDefault()
        
      })
    })
    console.log(data);
  });







































































