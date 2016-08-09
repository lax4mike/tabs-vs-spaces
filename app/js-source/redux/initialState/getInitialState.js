import loadCodeExample from "./loadCodeExample.js";


export default function getInitialState(){
    return {
        examples: [1, 2, 3].map(n => ({
            code: loadCodeExample(`tab-example-${n}`)
        }))
    };
}
