//---------- task 1 ----------//

function min(a, b) {
    return a < b ? a : b;
}

console.log(min(3, 4));

//---------- task 2 ----------//

function degree(c, d) {
    return c ** d;
}

console.log(degree(2, 2));

//---------- task 3 ----------//

const calculate = (n1, n2, op) => 
    op === '+' ? n1 + n2 :
    op === '-' ? n1 - n2 :
    op === '*' ? n1 * n2 :
    op === '/' ? n1 / n2 :

console.log(calculate(5, 3, '+'));

//---------- task 4 ----------//

const prime = (num) => {
    if (num <= 1) 
        return false;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) 
            return false;
    }
    return true;
};

console.log(prime(2));
console.log(prime(4));


//---------- task 5 ----------//

console.log('----------------------');
function Table(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
    console.log('----------------------');
}

for (let i = 2; i <= 9; i++) {
    Table(i);
}




