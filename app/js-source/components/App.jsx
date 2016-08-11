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
                    The strongest argument for using <strong>tabs</strong> to indent code is that <em>tabs allow developers to specify indentation size to suit their preference</em>.  In reality, using <strong>tabs</strong> can not deliver this benefit consistently and it leads to code that is misaligned and hard to read.
                </p>

                <p>
                    I will demonstrate these inconsistencies in the examples below.
                </p>


                <h2>Tabs with 4 character widths</h2>

                <p>
                    This example shows some code that was written with the editor set up for a 4 character width tab.  Try changing the tab width with the buttons, paying attention to the alignment of the yellow characters.
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


                <h2>Viewing code through a web browser</h2>

                <div className="with-octocat">

                    <img src="img/octocat.png" alt="github octocat" />

                    <p>As demonstrated in these examples, it is very problematic if you view this code with the tabs set to something other than what it was authored in.
                    <br/><br/>
                    Considering that most people author with 2 or 4 width tabs, this is especially a problem when viewing code on <a href="https://github.com">github</a> and other online repositories, which uses <strong>8</strong> width tabs. (try 8 width tabs above, it's the worst!).
                    </p>
                </div>


                <h2>Potential solution: Tabs for block indent only</h2>

                <p>
                    Some people say that the solution to this problem is to use <strong>tabs</strong> for <em>block level indention's</em> and use <strong>spaces</strong> for <em>inline alignments</em>.  This has it's own set of problems:
                </p>
                    <ol>
                        <li>There is now a mix of <strong>tabs</strong> and <strong>spaces</strong>.  If they are invisible, it makes it hard to manage which is where and makes this convention very <strong>brittle</strong>.  Some editors can show invisibles, but this is visual <strong>clutter</strong>. </li>

                        <li>This requires that all developers always follow and are aware this convention.  Inevitably and unknowingly, someone will use their tab key for inline alignments (up to 20 spaces in this example for the jquery line), which brings us back to the original problems.</li>

                        <li><img src="img/both.png" alt=""/></li>

                        <li>It doesn't even work for all situations, see the example below:</li>
                    </ol>

                <CodeViewer
                    initialTabSize={4}
                    code={examples[2].code}
                />

                <h2>Keep things simple</h2>

                <p><strong>Spaces</strong>, FTW.</p>


                <footer>
                        <sub>
                        Inspired by <a href="http://jarrodoverson.com/blog/spaces-vs-tabs/">http://jarrodoverson.com/blog/spaces-vs-tabs/</a>.</sub>
                </footer>
            </div>
        );
    }
});
