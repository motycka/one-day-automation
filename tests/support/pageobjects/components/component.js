/**
 * Atomic application component
 */
class Component {

    constructor(containerSelector) {
        this.containerSelector = containerSelector;
    }

    get text() {
        return $(this.containerSelector).getText();
    }

    get html() {
        return $(this.containerSelector).getHTML();
    }

    get element() {
        return $(this.containerSelector);
    }

    $(selector) {
        return $(this.containerSelector).$(selector);
    }

}

module.exports = Component;