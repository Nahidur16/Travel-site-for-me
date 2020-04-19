class mobileMenu {
  constructor() {
    this.siteHeader = $(".site-header");
    this.menuIcon = $(".site-header__menu-icon");
    this.mentuContent = $(".site-header__menu-content");
    this.events();
  }
  events() {
    this.menuIcon.click(this.toggleMenu.bind(this));
  }
  toggleMenu() {
    this.siteHeader.toggleClass(".site-header--expand");
    this.mentuContent.toggleClass(".site-header__menu-content--is-visible");
  }
}
/**
 * Scrool effect
 */

class onScroll {
  constructor(els, offset) {
    this.scrollEffect = els;
    this.offY = offset;
    this.hideIntell();
    this.popUp();
  }
  hideIntell() {
    this.scrollEffect.addClass("reveal-item");
  }
  popUp() {
    var that = this;
    this.scrollEffect.each(function () {
      var currentItem = this;
      new Waypoint({
        element: currentItem,
        handler: function () {
          $(currentItem).addClass("reveal-item--is-visible");
        },
        offset: that.offY,
      });
    });
  }
}
var mobile = new mobileMenu();
new onScroll($(".feature-item"), "75%");
new onScroll($(".testimonial"), "60%");
/**
 * Sticky header
 */
class StickyHeader {
  constructor() {
    this.siteHeader = $(".site-header");
    this.headerEl = $(".large-hero__title");
    this.siteHeaderWaypoints();
    this.pageSection = $(".page-section");
    this.headerLinks = $(".primary-nav");
    this.createPageSection();
  }
  siteHeaderWaypoints() {
    var that = this;
    new Waypoint({
      element: this.headerEl[0],
      handler: function (direction) {
        if (direction == "down") {
          that.siteHeader.addClass("site-header--dark");
        } else {
          that.siteHeader.removeClass("site-header--dark");
        }
      },
    });
  }
  createPageSection() {
    var that = this;
    this.pageSection.each(function () {
      var currentPageSection = this;
      new Waypoint({
        element: currentPageSection,
        handler: function () {
          var matchingHeader = currentPageSection.getAttribute(
            "data-matching-link"
          );
          that.headerLinks.removeClass("is-current-link");
          $(matchingHeader).addClass("is-current-link");
        },
      });
    });
  }
}

var stickyHeader = new StickyHeader();


/**
 * Modal
 */
class Modal {
  constructor() {
    this.openModalbtn = $(".open-modal");
    this.mainModal = $(".modal");
    this.closeModalBtn = $(".modal__close");
    this.events();
  }
  events() {
    // clicking opanModal
    this.openModalbtn.click(this.openModal.bind(this));
    //close X modal button
    this.closeModalBtn.click(this.closeModal.bind(this));
    //esacape key
  }


  openModal() {
    this.mainModal.addClass('modal--is-visible');
    return false;

  }
  closeModal() {
    this.mainModal.removeClass('modal--is-visible');
  }

}








var modal = new Modal;