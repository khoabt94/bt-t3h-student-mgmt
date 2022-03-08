const { create } = require("tar");
var readlineSync = require('readline-sync');
var fs = require('fs');

const helperFindIndex = criteria => student.findIndex(el => el.name === criteria)

const readFile = () => JSON.parse(fs.readFileSync('data.txt','utf8'))
let student = readFile()
const writeFile = () => fs.writeFileSync('data.txt', JSON.stringify(student))



const showMenu = () => {

    console.log("               Student Management                  ");
    console.log("====================================================");
    console.log(" 1. Show all student ");
    console.log(" 2.Create student and return Menu");
    console.log(" 3.Delete student");
    console.log(" 4.Edit student");
    console.log(" 5.Find student by name");
    console.log(" 6.Sort student by name ascending");
    console.log(" 7.Sort student by age ascending");
    console.log(" 8.Delete all student");
    console.log(" 9. Sum student age");
    console.log(" 10.Exit");
};



const navigation = () => {
    showMenu()
    const choice = readlineSync.question('Ban muon lam gi? ')

    switch(choice) {
        case '1':
            student = readFile();
            console.log(student);
            navigation()
            break;
        case '2':
            createStudent()
            break;
        case '3':
            deleteStudent()
            break;
        case '4':
            editStudent()
            break;
        case '5':
            findStudent()
            break;
        case '6':
            sortName()
            break;
        case '7':
            sortAge()
            break;
        case '8':
            deleteAll()
            break;
        case '9':
            sumAge()
            break;
        case '10':
            process.exit()
            break;
        default:
            console.log("Please input valid option!")
            navigation()
    }

}



const createStudent = () => {
    const name = readlineSync.question('Nhap ten:')
    const age = +readlineSync.question('Nhap tuoi:')
    const sex = readlineSync.question('Nhap gioi tinh:')
    const id = new Date().getTime()

    const newStudent = {
        id,
        name,
        age,
        sex,
    }

    student.push(newStudent)
    writeFile()
    student = readFile()
    navigation()
}

const deleteStudent = () => {
    const deleteName = readlineSync.question('Nhap ten muon xoa:')
    const deleteIndex = helperFindIndex(deleteName)

    student.splice(deleteIndex, 1)
    writeFile()
    student = readFile()
    navigation()
}

const editStudent = () => {
    const editName = readlineSync.question('Nhap ten muon sua:')
    const editIndex = helperFindIndex(editName)
    if (editIndex === -1) navigation()
    const editAge = +readlineSync.question('Nhap tuoi muon sua:')
    const editSex = readlineSync.question('Nhap gioi tinh muon sua:')

    student[editIndex].age = editAge
    student[editIndex].sex = editSex
    writeFile()
    student = readFile()
    navigation()
}

const findStudent = () => {
    const findName = readlineSync.question('Nhap ten muon tim:')
    const findIndex = helperFindIndex(findName)
    if (findIndex === -1) navigation()

    console.log(student[findIndex])
    navigation()
}

const sortName = () => {
    console.log(student.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)))
    navigation()
}

const sortAge = () => {
    console.log(student.sort((a, b) => a.age - b.age))
    navigation()
}

const deleteAll = () => {
    const confirm = readlineSync.question('Ban co chac chan muon xoa het khong (Y/N)?').toLowerCase()
    if (confirm === 'y' ) student.splice(0,student.length)

    writeFile()
    student = readFile()
    navigation()
}

const sumAge = () => {
    console.log(student.reduce((acc, el) => acc + el.age, 0))
    navigation()
}

navigation()






