// let student1={
// name: "Hamza",
// rollNo: 420,
// teacher: "Nadir",
// };


let prevStudents=localStorage.getItem("students");
let students=prevStudents ? JSON.parse(prevStudents) : [];

function provideStudent(){

    let std= {
        name: prompt("Enter your name"),
        rollNo: +prompt("Enter your number"),
        teacher: prompt("Enter your Class Name"),
        };

        students.push(std);
console.log(students);     
let strigify=JSON.stringify(students);
localStorage.setItem("students",strigify);
}