
// *** Gradebook App ***


// function getAverage(scores) {
//     let sum = 0;
//     for (let i = 0; i < scores.length; i++) {
//         sum += scores[i];
//     }
//     let average = sum / scores.length;
    
//     return average
// }

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
      return `Your score is ${score}, your Grade is A++`;
    } else if (score >= 90) {
      return `Your score is ${score}, your Grade is A`;
    } else if (score >= 80) {
      return `Your score is ${score}, your Grade is B`;
    } else if (score >= 70) {
      return `Your score is ${score}, your Grade is C`;
    } else if (score >= 60) {
      return `Your score is ${score}, your Grade is D`;
    } else {
      return `Your score is ${score}, your Grade is F`;
    }
}

// console.log(getGrade(81));     // Succefully received the correct Grade for any score!



