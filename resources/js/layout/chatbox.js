/*
*
ChatBox Class - by scaventum
*
*/

class ChatBox {
    constructor() {
        this.attr_helper = new AttrHelper()  
    }

    init() {
        var container   = document.getElementsByClassName('chat-box')[0].parentNode
        var chatbox   = document.getElementsByClassName('chat-box')[0]
        var welcome     = document.getElementsByClassName('welcome')

        var chatbox_form = chatbox.querySelector('form');
        chatbox_form.addEventListener('submit', e => {
            chatbox_form.querySelector('#message').value = ''
            e.preventDefault()
            this.attr_helper.removeElementsByClass(welcome)
            this.attr_helper.toggleClass(container, 'h-100') 
        });
    }
}

let chatbox = new ChatBox()