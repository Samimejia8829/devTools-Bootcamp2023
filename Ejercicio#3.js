function countNameRepetitions(names) {
    const nameCounts = {};

    names.forEach(element => {
        if(element in nameCounts) {
            nameCounts[element] = nameCounts[element] + "*"
        } else{
            nameCounts[element] = "*"
        }
    });
    return nameCounts;
}

const array = ["johany", "sandra", "santiago", "nicolas", "sandra", "nicolas", "nicolas","santiago"]
console.log(countNameRepetitions(array))