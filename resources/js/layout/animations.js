/*
*
Animations Class - by scaventum
*
Usage:
1. Add <data-animation="[options]"> as required element attribute.
   [options] available:
   - typewriter
2. Add <data-animation-speed="[value]"> as optional element attribute.
   [value]: positive integer in milliseconds 
*
*/

class Animations {
    constructor() {
        this.animations = {}
        this.speed = 100
        this.position_helper = new PositionHelper()
    }

    init(){
        this.animations = Array.prototype.slice.call(document.querySelectorAll("[data-animation]"))

        this.animations.forEach((animation) => {
            if(this.position_helper.isScrolledIntoView(animation)){
                this.animate(animation)
            }
        })

        window.addEventListener('scroll', (e) => {
            this.animations.forEach((animation) => {
                if(this.position_helper.isScrolledIntoView(animation)){
                    this.animate(animation)
                }
            })
        })
    }

    animate(animation){
        let animation_type = animation.dataset.animation
        let animation_speed = animation.dataset.animationSpeed || this.speed
        animation_speed = (isNaN(animation_speed) ? this.speed : animation_speed )

        if (typeof this[animation_type] === "function") { 
            this[animation_type](animation,animation_speed)
        }
        
        this.removeAnimation(animation)
    }

    typewriter(animation,speed,full_string = "",temp_string = "",i = 0){
        full_string = full_string.length == 0 ? animation.innerHTML : full_string
        let limit = full_string.length

        animation.innerHTML = temp_string
        temp_string += full_string.charAt(i)

        let blink = 1000/speed > 1 ? 1000/speed : 1
        if(i%blink >= 0 && i%blink < (1000/speed)/2 && i < limit) animation.innerHTML = temp_string + " <span style='font-weight:900'>_</span>"

        if(i < limit){
            i++;
            setTimeout(() => {
                this.typewriter(animation,speed,full_string,temp_string,i)
            }, speed)
        }
    }

    removeAnimation(animation){
        animation.removeAttribute('data-animation')
        this.animations = Array.prototype.slice.call(document.querySelectorAll("[data-animation]"))
    }
}

