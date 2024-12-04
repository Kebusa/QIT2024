
const city = {
    name: "Алматы",
    population: 2000000,
    districts: [
        {name: "Бостандық", population:300000},
        {name: "Алмалы", population:250000},
    ]
}

const school = [
    {name: "№1 Мектеп", district: "Алмалы", students:500},
    {name: "№2 Мектеп", district: "Бостандық", students:700},
]


function   mektepKosu() {
    let nameSchool = prompt("Enter school")
    let newSchool = {name: "№"+nameSchool}

    school.push(newSchool)
}
// mektepKosu()
// console.log(school);

function sanAuystyru() {
    school[0].students = 800
}
// sanAuystyru()
// console.log(school);

function obshiSany() {
    return city.districts.flatMap(pop => pop.population )
}

console.log(obshiSany());


function findDistrict() {
    let find = prompt("Enter destrict:")

    return city.districts.filter(fin => fin.name == find)
}

// console.log(findDistrict());

