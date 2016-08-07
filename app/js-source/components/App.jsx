import React, { PropTypes } from "react";

import CodeViewer from "./CodeViewer/CodeViewer.jsx";

export default React.createClass({

    propTypes: {
        examples: PropTypes.arrayOf(PropTypes.shape({
            code: PropTypes.string
        }))
    },

    render() {

        const { examples } = this.props;

        return (
            <div className="app">


                <CodeViewer
                    code={examples[0].code}
                />
            </div>
        );
    }
});
