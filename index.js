// Your code here

function saturdayFun(activity='roller-skate') {
    return(`This Saturday, I want to ${activity}!`);
}


function mondayWork(adulting='go to the office') {
    return(`This Monday, I will ${adulting}.`)
}


function wrapAdjective(flair='*') {
    return function(emphatic='a dedicated programmer'){
    return `You are ${flair}${emphatic}${flair}!`;
    }
}