import $ from "jquery";

export default function loadCodeExample(id){
    const code = $(`#${id}`).text().trim();

    return code;
}
