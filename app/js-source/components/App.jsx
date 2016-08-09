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

                <h1>Tabs vs. Spaces</h1>

                <p>
                    The strongest argument for using <strong>tabs</strong> to indent code is that <em>Tabs allow developers with different preferences in indentation size to change how the code looks without changing the code</em>.  In reality, <strong>tabs</strong> just make things worse and lead to code that is hard to read and inconsistent.
                </p>

                <p>
                    I will demostrate these inconsistentcies in the example below.  The tabs are colored grey.  Choose the tab width by selecting the buttons.
                </p>


                <h2>Tabs with 4 character widths</h2>

                <p>
                    This example shows some real code that was written with the editor set up for a 4-width tab.  Try changing the tab width with the buttons, paying attention to the alignment of the yellow characters.
                </p>

                <CodeViewer
                    initialTabSize={4}
                    code={examples[0].code}
                />

                <h2>Tabs with 2 character widths</h2>

                <p>
                    Below is the same example as above, but optimized for a 2 character width tab. The exact same problem applies. You can also see that it takes a different number of tabs to produce similar alignments.
                </p>

                <CodeViewer
                    initialTabSize={2}
                    code={examples[1].code}
                />


                <h2>Code through a web browser</h2>

                <div className="with-octocat">

                    <img src="img/octocat.png" alt="github octocat" />

                    <p>As demonstrated in those two examples, this is very problematic if you view this code with the tabs set to something other than what it was authored in.
                    <br/><br/>
                    Considering that most people auther with 2 or 4 width tabs, this is especially a problem when viewing code on <a href="https://github.com">github</a> and other online repositories, which uses 8-width tabs by default (try 8-width above, it's the worst).
                    </p>
                </div>


                <h2>Potential solution: Tabs for block indent only</h2>

                <p>
                    Some people say that the solution to this problem is to use tabs for <em>block level indentions</em> only, and use <strong>spaces</strong> for inline alignments.  This has some issues:
                </p>
                    <ol>
                        <li>This requires that all developers always follow this convension.  Inevitably and unknowingly, someone will use their tab key for inline alignments, which bring us back to the previous two examples.</li>
                        <li>It doesn't even work for all situations, see the example below:</li>
                    </ol>

                <CodeViewer
                    initialTabSize={4}
                    code={examples[2].code}
                />

                <h2>Keep things simple</h2>

                <p><strong>Spaces</strong>, FTW.</p>


                <footer>
                    {/* <sub>Insprired from <a href="http://jarrodoverson.com/blog/spaces-vs-tabs/">http://jarrodoverson.com/blog/spaces-vs-tabs/</a>.  I rewrote this because the javascript is broken after the wordpress migration.</sub> */}
                </footer>
            </div>
        );
    }
});
