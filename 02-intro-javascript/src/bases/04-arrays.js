

const array = [1, 2, 3, 4];

let array2 = [...array];

const array3 = array2.map((value) => {
    return value * 2;
});

console.log(array3);
