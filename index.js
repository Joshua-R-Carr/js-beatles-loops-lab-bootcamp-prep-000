function theBeatlesPlay(array1, array2){
    var sol = [];
    for(var i = 0, len = array1.length; i < len; i++){
        var a = String(array1[i]) + " plays " + String(array2[i]);
        sol.push(a);
    }
    return sol;
}

function johnLennonFacts(facts){
    var sol = [];
    var i = 0;
    while( i < facts.length){
        var a = String(facts[i]) + '!!!';
        sol.push(a);
        i++;
    }
    return sol;
}