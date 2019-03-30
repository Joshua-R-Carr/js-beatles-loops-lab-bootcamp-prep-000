function theBeatlesPlay(array1, array2){
    sol = [];
    for(i = 0, len = array1.length; i < len; i++){
        a = String(array1[i]) + " plays " + String(array2[i]);
        sol.push(a);
    }
    return sol;
}