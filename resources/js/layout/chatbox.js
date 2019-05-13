/*
*
ChatBox Class - by scaventum
*
*/

class ChatBox {
    constructor() {
        this.attr_helper = new AttrHelper()  
        this.chatbox = ''
        this.container = ''
        this.chatbox_form = ''
        this.chatbox_list = ''
        this.chatbox_message_box = ''
        this.welcome = ''
        this.initiated = false
    }

    init() {
        this.chatbox   = document.querySelector('.chat-box')
        if(this.chatbox !== null){
            this.container = this.chatbox.parentNode
            this.chatbox_form = this.chatbox.querySelector('.chat-box__form')
            this.chatbox_list = this.chatbox.querySelector('.chat-box__list')
            this.welcome = document.getElementsByClassName('welcome')
            this.chatbox_message_box = this.chatbox_form.querySelector('#message')

            this.chatbox_form.addEventListener('submit', e => {
                e.preventDefault()

                if(!this.initiated){
                    this.initiateContainer()
                }

                this.chat()

            });
        }
    }

    initiateContainer(){
        this.initiated = true;
        this.attr_helper.removeElementsByClass(this.welcome)
        if (!this.attr_helper.hasClass(this.container, 'h-100')) {
            this.attr_helper.toggleClass(this.container, 'h-100') 
        }
    }

    chat() {
        let message = this.chatbox_message_box.value;
        this.chatbox_message_box.value = ''

        this.insertBubble(message,'text','human')

        let purebot_message = ''
        let interactive = false
        let attachment = null
        let data = new FormData()
        const postData = {
            driver: 'web',
            userId: '1',
            message: message,
            attachment,
            interactive,
            attachment_data: document.getElementById('attachment').files[0]
        };

        Object.keys(postData).forEach(key => data.append(key, postData[key]))

        axios.post("/api/botman", data).then(response => {
            const messages = response.data.messages || [];
            messages.forEach(msg => {
                //this._addMessage(msg.text, msg.attachment, false, msg);
                purebot_message = msg.text
                this.insertBubble(purebot_message,'text','purebot')
            })
        }).catch(function (error) {
            console.log(error)
        })
    }

    // chat(){
    //     let message = this.chatbox_message_box.value
    //     let purebot_message =''

    //     this.chatbox_message_box.value = ''
        
    //     this.insertBubble(message,'text','human')

    //     axios.post('/botman', {
    //         message: message
    //     })
    //     .then((response) => {
    //         let purebot = response.data
    //         purebot_message = purebot.response
    //         this.insertBubble(purebot_message,'text','purebot')
    //     })
    //     .catch(function (error) {
    //         console.log(error)
    //     })
    // }

    insertBubble(message,type,source){
        //console.log("["+type+", "+source+"]: "+message)

        let bubble = document.createElement("span");                 
        let text = document.createTextNode(message);      
        bubble.appendChild(text);   
        bubble.classList.add("chat-box__list__bubble")    
        bubble.classList.add("chat-box__list__bubble__"+source)             

        this.chatbox_list.appendChild(bubble);
        this.chatbox_list.scrollTop = this.chatbox_list.scrollHeight;

        this.chatbox_message_box.focus();
    }
}

let chatbox = new ChatBox()