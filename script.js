const numbers = [10, -12, [231, 1, -32], -0.001, [75, 123, 21], 12, 321, [292, 21]]
for(i = 0; i < numbers.length; i++){
    if(Array.isArray(numbers[i])) {
        console.log(numbers[i])
    }
}


let people = [{name: 'Bradly', age: 74}, {name: 'Juliya', age: 20}, 
{name: 'Walter', age: 35}, {name: 'Kristen', age: 12}, {name: 'Sam', age: 2}];

for(i = 0; i < people.length; i++) {
    console.log(people[i].name)
}
for(i = 0; i < people.length; i++) {
    if(people[i].age > 18) {
        console.log(people[i].name)
    }
}
for(i = 0; i < people.length; i++) {
    if(people[i].age > 65) {
        console.log(people[i].name)
    }
}

const addPeople = (name, age) => {
    people.push({name:name, age: age})
}
addPeople('Alex', 49)
console.log(people)
const arr = [1, 2, -5, -220, 67, 120, -90]
const getPositiveArr = (arr) => {
    const newArr = []
    for(i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            newArr.push(arr[i])
        }
    }
    return newArr
}
console.log(getPositiveArr(arr))