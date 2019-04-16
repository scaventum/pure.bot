class SideBar {

    init() {
        var layout   = document.getElementById('layout'),
            menu     = document.getElementById('menu'),
            menuLink = document.getElementById('menuLink'),
            content  = document.getElementById('main')

        menuLink.onclick = (e) => {
            this.toggleAll(e);
        };
    
        content.onclick = (e) => {
            if (menu.className.indexOf('active') !== -1) {
                this.toggleAll(e);
            }
        };
    }

    toggleClass(element, className) {
        var classes = element.className.split(/\s+/),
            length = classes.length,
            i = 0;

        for(; i < length; i++) {
          if (classes[i] === className) {
            classes.splice(i, 1);
            break;
          }
        }
        // The className is not found
        if (length === classes.length) {
            classes.push(className);
        }

        element.className = classes.join(' ');
    }

    toggleAll(e) {
        var active = 'active';

        e.preventDefault();
        this.toggleClass(layout, active);
        this.toggleClass(menu, active);
        this.toggleClass(menuLink, active);
    }
}
