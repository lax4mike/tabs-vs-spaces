import loadCodeExample from "./loadCodeExample.js";


export default function getInitialState(){
    return {
        examples: [
            {
                code: loadCodeExample("tab-example-1")
            }
        ]
    }
}
