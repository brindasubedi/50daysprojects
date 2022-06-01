

//these all we are bring in from DOM

const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next  = document.getElementById('next')
const circles = document.querySelectorAll('.circle')


//setting currentactive =  1
let currentActive = 1


//adding event when next button is clicked
// and perfroming fuction after clicking on next button
//while clicking on next button it will increase the  
//currentactive value

next.addEventListener('click', () =>{
    currentActive++;
    console.log(currentActive);


//if currentactive value is greater than the total circle
//then it stops at final circle
    if(currentActive > circles.length){
        currentActive = circles.length
    }
// upadte the dom
    update()
    
})


prev.addEventListener('click', () =>{
    currentActive--;
    
//if currentActive is less then 1 then currentactive is stop at 1.
    if(currentActive < 1 ){
        currentActive = 1;
    }
// upadate the dom    
    update()
    
})


function update(){
    //circles gives the nodelist(list of circle in an array )
    // to loop each through use forEach and forEach takes function
    circles.forEach((circle, idx) => {
        if(idx < currentActive){    // comparing current active with array index
                                    // iniial value of current index is 1 and intial
                                    //value of array index is 0
    

    //if idx < currentactive  , put circle in active list                                
            console.log(circle.classList.add('active')) 
            
        }else{
            circle.classList.remove('active')
        }
    })


    //all the active list
    
    const actives = document.querySelectorAll('.active')
    console.log(actives)
    

    // to increase  progress bar for each click(generate width % of progress bar)
    
    progress.style.width = (((actives.length-1) / (circles.length)) *
    100 + '%')
   

    //ifelse statement for to make active and disable state 
    if(currentActive == 1){
        prev.disabled = true
    }else if (currentActive === circles.length){
        next.disabled = true
    }else{
        prev.disabled = false
        next.disabled = false
    }


}
