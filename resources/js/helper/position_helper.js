class PositionHelper {
    isScrolledIntoView(el) {
      let rect = el.getBoundingClientRect();
      let el_top = rect.top;
      let el_bot = rect.bottom;

      //let isVisible = (el_top >= 0) && (el_bot <= window.innerHeight)
      
      let isVisible = el_top < window.innerHeight && el_bot >= 0;
      return isVisible;
  }
}