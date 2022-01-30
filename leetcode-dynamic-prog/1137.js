var tribonacci = function(n) {
    if (n==0) {return 0}
    if (n==1) {return 1}
    if (n==2) {return 1}
    tn = 0
    tn1 = 1
    tn2 = 1
    for (let i = 3; i <= n; i++) {
        tntemp = tn
        tn = tn1
        tn1 = tn2
        tn2 = tn + tn1 + tntemp
    }
    return tn2
};