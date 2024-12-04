
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
mektepKosu()
console.log(school);

function sanAuystyru() {
    school[0].students = 800
}
sanAuystyru()
console.log(school);

function obshiSanDirect() {
     return city.districts.reduce((total,pop) => total + pop.population, 0)
    
}
function obshiSanStudent() {
    return school.reduce((total,pop) => total + pop.students, 0)
}

console.log(obshiSanDirect());
console.log(obshiSanStudent());



function findDistrict() {
    let find = prompt("Enter destrict:")

    return city.districts.filter(fin => fin.name == find)
}

console.log(findDistrict());

