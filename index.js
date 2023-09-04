document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll("input[type='button']");

    // here i Defined a function to handle button click events
    function handleButtonClick(event) {
        const buttonValue = event.target.value;

        switch (buttonValue) {
            case "AC":
                display.value = "";
                break;
            case "DE":
                display.value = display.value.slice(0, -1);
                break;
            case ".":
                if (!display.value.includes(".")) {
                    display.value += ".";
                }
                break;
            case "=":
                try {
                    display.value = eval(display.value);
                } catch (error) {
                    display.value = "Error";
                }
                break;
            default:
                display.value += buttonValue;
                break;
        }
    }

    // Add click event listeners to all buttons
    buttons.forEach((button) => {
        button.addEventListener("click", handleButtonClick);
    });
});
