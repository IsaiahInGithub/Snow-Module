function returner(code) {
    return code;
}

function div(code) {
    document.body.innerHTML += `<div></div>`;
    return code;
}

function h1(code) {
    document.body.innerHTML += `<h1>${code}</h1>`;
}

function h2(code) {
    document.body.innerHTML += `<h2>${code}</h2>`;
}

function h3(code) {
    document.body.innerHTML += `<h3>${code}</h3>`;
}

function h4(code) {
    document.body.innerHTML += `<h4>${code}</h4>`;
}

function h5(code) {
    document.body.innerHTML += `<h5>${code}</h5>`;
}

function h6(code) {
    document.body.innerHTML += `<h6>${code}</h6>`;
}

function button(code) {
    document.body.innerHTML += `<button>${code}</button>`;
}

function p(code) {
    document.body.innerHTML += `<p>${code}</p>`;
}

function title(code) {
    document.head.innerHTML += `<title>${code}</title>`;
}

function html(code) {
    return code;
}

function body(code) {
    return code;
}

function head(code) {
    return code;
}

function debugNote(anything) {
    console.log(anything);
}

function grab(element) {
    return document.querySelector(element);
}

function native(os) {
    if (os === 'android') {
        return 'lime';
    } else if (os === 'ios') {
        return 'dodgerblue';
    }
}

function link(fileName) {
    document.head.innerHTML += `<link rel="stylesheet" href="../src/${fileName}">`
}