// This program managers the student grades for the university

console.log('===== Stdent Profile ====');

// Declare variables
const fullName = 'Sonwabiso Sihlobo';
const studentNumber = '45664774';
const yearOfStudy = 3;
const faculty = 'Natural and Agricultural Science';

// Display the student profile
console.log(`Name           : ${fullNameName}`);
console.log(`Student Number : ${studentName}`);
console.log(`Year of Study  : ${yearOfStudy}`);
console.log(`Faculty        : ${faculty}`);
console.log('=========================================');

// Calculate the student grade
// Create a function called calculate the student grade

function calculateGrade(mark) {
    if (mark >= 75) {
        console.log('Distinction');
    } else if (mark >= 60) {
        console.log('Merit');
    } else if (mark >= 50) {
        console.log('Pass');
    }
    else {
        console.log('Fail');
    }
}

// Function to calaculate the student average. It takes 5 modules
function calculateAverage(mod1, mod2, mod3, mod4, mod5) {
    return (mod1 + mod2 + mod3 + mod4 + mod5) / 5;
}

// Create an arrow function that checks the status
const checkPass = (average) => {
    if (average > 50) {
        console.log('Congratulations! You have passed the year');
    } else {
        console.log('Unfortunately you have failed. Please see your lecturer');
    }
} 

// Function that check level of studdy of the student
function getYearLevel(yearLevel) {
    switch (yearLevel) {
        case 1:
            return 1;
            break;
        case 2: 
            return 2;
            break;
        case 3:
            return 3;
            break;
        case 4: 
            return 4;
            break;
        default:
            return 'Invalid Year';
    }
}

// Function to check for the busary
function checkBursary(average, year) {
    if (average > 70 & year >= 2) {
        return 'You qaulify for a bursary';
    }
    else {
        return 'You do not qualify for the busary';
    }
}

// Call the calculateGrade functio
calculateGrade(76);
ave = calculateAverage(67, 89, 90, 76, 89);
checkPass(ave);
year = getYearLevel(3);
checkBursary(ave, year);

