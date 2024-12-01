// Linear and Binary Search

 readline = require("readline");

 rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Linear Search function
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index if found
        }
    }
    return -1; // Return -1 if not found
}

// Binary Search function (on a sorted array)
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
         mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Target found, return index
        } else if (arr[mid] < target) {
            left = mid + 1; // Narrow search to the right half
        } else {
            right = mid - 1; // Narrow search to the left half
        }
    }
    return -1; // Return -1 if not found
}

// Comparing the performance of both Linear and Binary search
function compareSearches(arr, target) {
    console.time("Linear Search Time");
    linearResult = linearSearch(arr, target);
    console.timeEnd("Linear Search Time");

    console.time("Binary Search Time");
    binaryResult = binarySearch(arr, target);
    console.timeEnd("Binary Search Time");

    console.log(`Linear Search: ${linearResult !== -1 ? `Found at index ${linearResult}` : "Not found"}`); // using shorthand if and else
    console.log(`Binary Search: ${binaryResult !== -1 ? `Found at index ${binaryResult}` : "Not found"}`);
}

// User prompt
function getArrayAndTarget() {
    rl.question("Enter numbers separated by spaces: ", (input) => {
        numbers = input.split(" ").map(Number);

        if (numbers.some(isNaN)) {  // Handles the error of invalid input
            console.log("Invalid input!!!. Please enter only numbers.");
            getArrayAndTarget();
        } else {
            rl.question("Enter the number to search for: ", (targetInput) => {
                 target = Number(targetInput);

                if (isNaN(target)) {
                    console.log("Invalid target. Please enter a valid number.");
                    getArrayAndTarget();
                } else {
                    console.log(`Original Array: [${numbers}]`);
                    console.log(`Sorted Array: [${numbers.slice().sort((a, b) => a - b)}]`);

                    compareSearches(numbers.slice().sort((a, b) => a - b), target);
                    rl.close();
                }
            });
        }
    });
}

// Start the process
getArrayAndTarget();
