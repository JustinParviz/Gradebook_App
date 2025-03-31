
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

// console.log(getGrade(81));     // Succefully received the correct Grade for any score!




