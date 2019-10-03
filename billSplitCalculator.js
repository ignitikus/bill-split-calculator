const overall = parseFloat(process.argv[2]);
const tip = parseFloat(process.argv[3]);
const party = parseFloat(process.argv[4]);

function tipOutput(tip){
    if (tip >=25){
        return " What a generous tip!";
    } else if (tip >=10 && tip <25){
        return " Thank you, come again!";
    } else {
        return " Thanks, I guess.";
    }
}

function noParty (party){
    if (party >= 1) {
    return party;
    } else {
        return party = 1;
    }
}


const total = overall * (tip) / 100 + overall;
const result = total / noParty(party);

function notANumber(result){
    if (isNaN(result)){
    return `I'm sorry Dave, I'm afraid i can't process words.`;
    } else {
        return result;
    }
}
console.log(isNaN(result) ? `I'm sorry Dave, I'm afraid i can't process words.` : result + tipOutput(tip))
