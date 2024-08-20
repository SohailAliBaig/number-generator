document.getElementById('generateButton').addEventListener('click', function() {
    var minValue = parseInt(document.getElementById('minValue').value);
    var maxValue = parseInt(document.getElementById('maxValue').value);
    var result = document.getElementById('result');

    if (isNaN(minValue) || isNaN(maxValue)) {
        result.textContent = 'Please enter valid numbers.';
    } else if (minValue > maxValue) {
        result.textContent = 'Minimum value cannot be greater than maximum value.';
    } else {
        var randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
        result.textContent = 'Random Number: ' + randomNumber;
    }
});