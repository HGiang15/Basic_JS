(function js(x) {
    const y = (j) => j * x;

    console.log(y(s()));

    function s() {
        return j();
    }

    function j() {
        return x ** x;
    }
})(3)