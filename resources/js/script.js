//Include JS files from include folder here and sort them according to its dependencies

//Call sidebar.js
sideBar.init()

//Call animations.js
animations.init()

//Call chatbox.js
chatbox.init()

//Call aos.js
AOS.init({
    offset: 0,
    delay: 50, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'linear', // default easing for AOS animations
})