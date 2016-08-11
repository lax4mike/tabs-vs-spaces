import React, { PropTypes } from "react";
import classNames from "classnames";
import TabFormatter from "../../utils/tab-formatter.js";
import hljs from "highlight.js";
import hljsJavascipt from "highlight.js/lib/languages/javascript.js";

// i'm not sure if this does anything...
hljsJavascipt(hljs);


export default React.createClass({

    propTypes: {
        code: PropTypes.string.isRequired,
        initialTabSize: PropTypes.number
    },

    getInitialState() {
        return {
            tabSize: this.props.initialTabSize || 2
        };
    },

    componentDidMount() {
        this.highlightCode();
    },

    componentDidUpdate(){
         this.highlightCode();
    },

    highlightCode() {
        hljs.highlightBlock(this.refs.code);
    },

    toSpaces(n) {
        let spaces = [];

        for(let i = 0; i < n; i++){
            spaces.push("<span class='code-viewer__space'> </span>");
        }

        return `<span class='code-viewer__tab'>${spaces.join("")}</span>`;
    },

    handleButtonClick(n, e) {
        this.setState({
            tabSize: n
        });

        e.target.blur();
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

        const buttons = [
            { name: "two", number: 2},
            { name: "four", number: 4},
            { name: "eight", number: 8}
        ];

        return (
            <div className="code-viewer">

                <div className="code-viewer__controls">
                    <label>Tab width: </label>

                    <div className="code-viewer__buttons">
                    {buttons.map(b => {
                        const buttonClasses = classNames(`button--${b.name}`, {
                            "is-selected": b.number === this.state.tabSize
                        });

                        return (
                            <button type="button"
                              key={b.number}
                              className={buttonClasses}
                              onClick={this.handleButtonClick.bind(this, b.number)}>
                                {b.number}
                            </button>
                        );
                    })}
                    </div>
                </div>

                <div className="code-viewer__code">
                    <pre>
                        <code ref="code"
                            className="javascript"
                            dangerouslySetInnerHTML={{__html: code}} />
                    </pre>
                </div>
            </div>
        );
    }
});
