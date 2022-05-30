
// querySelector is used for selecting all elements  of given class or tag
// querySelectorAll is used for selecting all elements of given class
// it shows all the list of element in Arry lit form so we can acess each elements using array.
const panels =  document.querySelectorAll('.panel');
console.log(panels);
console.log(typeof(panels));


//forEach method calls a fuction for each element in an array.
//here we using flat arrow with fuction as an agrument
panels.forEach((panel) => {
    console.log(panel);

    //now adding Eventlistener so that when clicking on each panel something happens 
    //here taking each panel and adding EventListener
    // here we r listen for click when click happens we'r gonna run a function
    panel.addEventListener('click', () => {
      
        //here whatever panel we click we want  to add class active so that is expand with flex =5;
        //classList gives the list of class and we also have method on these class like add()
        //where we can add a class

        //Example: 
        /**
         * Here mystel class is created and some css properties are added.
         * .mystyle{ color: black;
         *           padding: 16px;}
         <script>
         function myFunction() {
        const list = document.getElementById("myDIV").classList;
        list.add("myStyle");
        }
        </script>
         **/
         
        //first removing all the active class from all of the other ones
        //so we are creating function here to remove active class from others
        

       removeActiveClasses()  // calling fuction to remove active classes
       panel.classList.add('active') //adding active classes

    })
})
 
function removeActiveClasses(){
   panels.forEach((panel)=> {
       panel.classList.remove('active')
   })
}

// document.body.addEventListener('click',(e) =>{
//     if 
// })