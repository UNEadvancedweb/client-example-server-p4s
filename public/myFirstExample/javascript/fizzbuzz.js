for (var i = 1; i <= 100; i++) {
    if (i % 15 == 0) {
        document.write("<li>fizzbuzz</li>")
    } else if (i % 5 == 0) {
        document.write("<li>buzz</li>")
    } else if (i % 3 == 0) {
        document.write("<li>fizz</li>")
    } else {
        document.write("<li>" + i + "</li>")
    }
}