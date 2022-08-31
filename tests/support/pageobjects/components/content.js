const Component = require("./component");

/**
 * Page content type component
 */
class Content extends Component {

    constructor() {
        super('.main_content');
        this.titleSelector = 'h1';
    }

    getPageTitle() {
        return $(this.titleSelector).getText();
    }

}

module.exports = Content;