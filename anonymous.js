var counter = 0;
var anonymous = function() {
    ++counter;
    document.write("Counter: " + counter)
};

function outerfunction() {
    anonymous();
}

setTimeout(outerfunction, 5);