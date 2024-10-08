
document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('input[type="button"]');
    
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = button.value;

            if (value === 'AC') {
                // Clear display
                display.value = '';
            } else if (value === 'DE') {
                // Delete the last character
                display.value = display.value.slice(0, -1);
            } else if (value === '=') {
                // Evaluate the expression
                try {
                    display.value = eval(display.value);
                } catch (error) {
                    display.value = 'Error';
                }
            } else {
                // Append the clicked button value to display
                display.value += value;
            }
        });
    });
});