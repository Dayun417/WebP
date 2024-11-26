onmessage = function(e) {
    let from = parseInt(e.data.from);
    let to = parseInt(e.data.to);

    let mul = from * to;
    postMessage(mul);
}
