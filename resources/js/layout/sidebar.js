class SideBar {
    constructor() {
        this.attr_helper = new AttrHelper();
    }

    init() {
        var layout   = document.getElementById('layout'),
            menu     = document.getElementById('menu'),
            menuLink = document.getElementById('menuLink'),
            content  = document.getElementById('main')

        let toggleElement = [
            layout,
            menu,
            menuLink
        ],
        active = 'active'

        menuLink.onclick = (e) => {
            this.toggleSideBar(e, toggleElement, active)
        };
    
        content.onclick = (e) => {
            if (this.attr_helper.hasClass(menu,active)) {
                this.toggleSideBar(e, toggleElement, active)
            }
        };
    }

    toggleSideBar(e, elements, active) {
        e.preventDefault()
        elements.forEach((element) => { 
            this.attr_helper.toggleClass(element, active) 
        }) 
    }
}
