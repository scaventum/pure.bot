class AttrHelper {
    toggleClass(element, className) {
        let classes = element.className.split(/\s+/),
            length = classes.length,
            i = 0

        for(; i < length; i++) {
          if (classes[i] === className) {
            classes.splice(i, 1)
            break;
          }
        }
        // The className is not found
        if (length === classes.length) {
            classes.push(className)
        }

        element.className = classes.join(' ')
    }

    hasClass(element, className) {
      return element.className.indexOf(className) !== -1
    }

    removeElementsByClass(elements) {
      if(elements.length > 0){
        for(let i = elements.length - 1; i >= 0; i--){
          elements[i].parentNode.removeChild(elements[i]);
        }
      }
    }
}