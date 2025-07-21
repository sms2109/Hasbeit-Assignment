function calculate(a, b) {
    let opr = prompt("Enter operator (add, subtract, multiply, divide):");
    let result; // Declare a variable to store the result

    switch (opr.toLowerCase()) { // Use toLowerCase for case-insensitive input
        case "add":
            result = a + b;
            break;
        case "subtract":
            result = a - b;
            break;
        case "multiply":
            result = a * b;
            break;
        case "divide":
            if (b === 0) {
                result = "Error: Division by zero!";
            } else {
                result = a / b;
            }
            break;
        default:
            result = "Error: Invalid operator entered.";
            break;
    }

    alert("The result is: " + result); // Display the result to the user
    return result; // Return the result
}

// Call the function
let a = prompt("enter first no : ");
let b = prompt("enter second no : ");
calculate(a,b);