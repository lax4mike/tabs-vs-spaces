import $ from "jquery";

export default function loadCodeExample(id){
    const code = $(`#${id}`).text();

    return code;
}
