function highestScore(scores){
    return Math.max(...scores);
}

function lowestScore(scores){
    return Math.min(...scores);
}

function averageScore(scores){
    let total = 0;

    for(let i = 0; i < scores.length; i++){
        total += scores[i];
    }

    return total / scores.length;
}