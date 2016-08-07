import React, { PropTypes } from "react";
import TabFormatter from "../../utils/tab-formatter.js";


export default React.createClass({

    propTypes: {
        code: PropTypes.string.isRequired
    },

    getInitialState() {
        return {
            tabSize: 2
        };
    },

    toSpaces(n) {
        let spaces = [];

        for(let i = 0; i < n; i++){
            spaces.push("<span class='code-viewer__space'> </span>");
        }

        return `<span class='code-viewer__tab'>${spaces.join("")}</span>`;
    },

    handleButtonClick(n) {
        this.setState({
            tabSize: n
        });
    },

    render() {

        const { tabSize } = this.state;


        // const code = this.props.code.replace(/\t/g, this.toSpaces(tabSize));

        const code = TabFormatter.format({
            src: this.props.code,
            numSpaces: tabSize,
            replacement: "<span class='code-viewer__space'> </span>",
            prefix: "<span class='code-viewer__tab'>",
            suffix: "</span>"
        });

        const buttons = [2, 4, 8];

        return (
            <div className="code-viewer">
                <pre dangerouslySetInnerHTML={{__html: code}} />
                <div className="code-viewer__buttons">
                    {buttons.map(b => (
                        <button type="button" onClick={this.handleButtonClick.bind(this, b)}>
                            {b}
                        </button>
                    ))}

                </div>
            </div>
        );
    }
});
