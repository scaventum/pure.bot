/*
*
ChatBox Class - by scaventum
*
*/

class ChatBox {
    constructor() {
        this.attr_helper = new AttrHelper()  
        this.container = ''
        this.chatbox_form = ''
        this.welcome = ''
        this.chatbox = ''
        this.initiated = false
    }

    init() {
        this.chatbox   = document.querySelector('.chat-box')
        if(this.chatbox !== null){
            this.container = this.chatbox.parentNode,
            this.chatbox_form = this.chatbox.querySelector('.chat-box__form'),
            this.welcome = document.getElementsByClassName('welcome')

            this.chatbox_form.addEventListener('submit', e => {
                e.preventDefault()
                if(this.initiated){
                    this.fetchResponse()
                }else{
                    this.initiateContainer()
                }
            });
        }
    }

    initiateContainer(){
        this.initiated = true;
        this.chatbox_form.querySelector('#message').value = ''
        this.attr_helper.removeElementsByClass(this.welcome)
        if (!this.attr_helper.hasClass(this.container, 'h-100')) {
            this.attr_helper.toggleClass(this.container, 'h-100') 
        }
    }

    fetchResponse(){

    }
}

let chatbox = new ChatBox()