// Values for the alphabets
const letterValues = {
    A: 1, Y: 1, Q: 1, J: 1, I: 1,
    B: 2, K: 2, R: 2,
    C: 3, G: 3, L: 3, S: 3,
    D: 4, M: 4, T: 4,
    E: 5, H: 5, N: 5, X: 5,
    U: 6, V: 6, W: 6,
    O: 7, Z: 7,
    F: 8, P: 8
};

// Function to calculate the pyramid
function generatePyramid() {
    const name = document.getElementById("nameInput").value.toUpperCase().replace(/\s+/g, '');
    let pyramidLevels = [];
    let currentLevel = Array.from(name).map(letter => letterValues[letter]); // Convert letters to values

    // Calculate Total of the Name (sum reduced to a single digit)
    const totalOfNameRaw = currentLevel.reduce((sum, value) => sum + value, 0);
    const totalOfName = sumOfDigits(totalOfNameRaw);
    document.getElementById("totalName").textContent = totalOfName;

    while (currentLevel.length > 1) {
        let nextLevel = [];
        for (let i = 0; i < currentLevel.length - 1; i++) {
            let pairSum = currentLevel[i] + currentLevel[i + 1];
            nextLevel.push(sumOfDigits(pairSum)); // Reduce sum to single digit
        }
        pyramidLevels.push(currentLevel);
        currentLevel = nextLevel;
    }
    pyramidLevels.push(currentLevel); // Add the final level (single element)

    // Display Pyramid levels
    let pyramidOutput = pyramidLevels.map(level => level.join(' ')).join('\n');
    document.getElementById("pyramidOutput").textContent = pyramidOutput;

    // Display the number of levels
    const numLevels = pyramidLevels.length;
    document.getElementById("numLevels").textContent = numLevels;

    // Display the final value
    const finalValue = pyramidLevels[pyramidLevels.length - 1][0];
    document.getElementById("finalValue").textContent = finalValue;
}

// Helper function to sum the digits of a number
function sumOfDigits(num) {
    while (num > 9) {
        num = num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
    }
    return num;
}
