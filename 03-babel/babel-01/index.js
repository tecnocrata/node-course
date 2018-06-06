//Please run with node 8.10
//Downgrade node to 4.2 LTS
//Afterwards configure Babel
let calculateMonthlyPayment = function(principal, years, rate) {
    let monthlyRate = 0;
    if (rate) {
        monthlyRate = rate / 100 / 12;
    }
    let monthlyPayment = principal * monthlyRate / 
                         (1 - (Math.pow(1/(1 + monthlyRate), years * 12)));
    return monthlyPayment;
};

let result = calculateMonthlyPayment (10, 20, 0.5);
console.log(result);