//active navbar
let nav = document.querySelector(".navigation-wrap"); //selected the navigation bar on which we given the custom class .navigation-wrap
window.addEventListener("scroll" , ( ) => //when the scroll event will happen to whole window means browser then we do some effects / changes in navbar 
{
    if(document.documentElement.scrollTop > 20)
    {
        nav.classList.add("scroll-on"); // this class get appended when the window will scroll more than 20%
    }
    else
    {
        nav.classList.remove("scroll-on"); // if the top scroll comes in below 20% then we remove the class from navbar
    }
})

//nav hide :- this is for hiding the navbar for mobile versions means we noticed that when we use bootstrap classes for navigation then it cause a error of not hiding the navbar after choosing an option thats we used our logic for hiding the navabar
let navbar = document.querySelectorAll(".nav-link"); 
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navbar.forEach((navItems) =>
{
    navItems.addEventListener("click" , () =>
    {
        navCollapse.classList.remove("show"); // when we click on the element which have.nav-link class at that time the .show class which is appended by bootstrap when we click on the icon is removed
    })
})

//counter design
document.addEventListener("DOMContentLoaded" , () => //when all the html parsing is done then this event will be fired
{
    function counter(id , start , end , duration)
    {
        let object = document.getElementById(id) , 
        current = start ,
        range = end - start ,
        increment = end > start ? 1 : -1 ,
        steps = Math.abs(Math.floor(duration / range)) ,
        timer = setInterval( () => 
        {
            current += increment ;
            object.textContent = current;
            if(current == end)
            {
                clearInterval(timer);
            }
        } , steps);
    }

    counter("count1" , 0 , 1287 , 3000);  
    counter("count2" , 100 , 5000 , 2700);
    counter("count3" , 500 , 2587 , 1500);
    counter("count4" , 250 , 2803 , 1000);
});