
// *** Gradebook App ***


// function getAverage(scores) {
//     let sum = 0;
//     for (let i = 0; i < scores.length; i++) {
//         sum += scores[i];
//     }
//     let average = sum / scores.length;

//     return average
// }

// - Created shortened version of the getAverage function, as seen below:
// NOTE: getAverage is for the CLASS average.

function getAverage(scores) {
    let sum = 0
    for (const score of scores) {
        sum += score;
    }
    let average = sum / scores.length;

    return average
}

// console.log(getAverage([65, 88, 73, 97, 85, 81, 92, 78]))     // Test scores worked!


function getGrade(score) {
    if (score === 100) {
        return "A++";
    } else if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

// console.log(getGrade(81));     // Successfully received the correct Grade for any score!


function hasPassingGrade(score) {
    return getGrade(score) !== "F";
}

// Ran tests below to make sure the function works and that for all scores that are a passing 
// grade, the function returns true. Otherwise the function returns false.  

// console.log(hasPassingGrade(100));    // Returns: true
// console.log(hasPassingGrade(53));     // Returns: false
// console.log(hasPassingGrade(87));     // Returns: true


function studentMsg(totalScores, studentScore) {

    let classAverage = getAverage(totalScores);
    let studentsGrade = getGrade(studentScore);
    let passedCourse = hasPassingGrade(studentScore);

    if (passedCourse === true) {
        return "Class average: " + classAverage + ". Your grade: " + studentsGrade + ". You passed the course."
    } else {
        return "Class average: " + classAverage + ". Your grade: " + studentsGrade + ". You failed the course."
    }
}

// Ran tests for function below and each test output returned the correct message based on the student's score and the class average.

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));    // Returns: Class average: 71.7. Your grade: F. You failed the course.
console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));    // Returns: Class average: 50.8. Your grade: A++. You passed the course.



