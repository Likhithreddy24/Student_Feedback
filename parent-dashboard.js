// Student data
const studentsData = {
    "parent1": { name: "John Doe", grade: "A" ,teacherContact: 'teacher1@example.com'},
    "parent2": { name: "Jane Smith", grade: "B", teacherContact: 'teacher1@example.com'},
    "parent3": { name: "Emily Johnson", grade: "A", teacherContact: 'teacher1@example.com'},
    "parent4": { name: "Michael Brown", grade: "C", teacherContact: 'teacher1@example.com'},
    "parent5": { name: "Sophia Davis", grade: "B", teacherContact: 'teacher1@example.com'},
    "parent6": { name: "David Wilson", grade: "A", teacherContact: 'teacher1@example.com'},
    "parent7": { name: "Olivia Martinez", grade: "B", teacherContact: 'teacher1@example.com'},
    "parent8": { name: "Daniel Anderson", grade: "A", teacherContact: 'teacher1@example.com'},
    "parent9": { name: "Isabella Thomas", grade: "B", teacherContact: 'teacher1@example.com'},
    "parent10": { name: "James Moore", grade: "C", teacherContact: 'teacher1@example.com'},
    "parent11": { name: "Mia Jackson", grade: "B", teacherContact: 'teacher1@example.com'},
    "parent12": { name: "Lucas Lee", grade: "A", teacherContact: 'teacher1@example.com'},
    "parent13": { name: "Amelia Perez", grade: "C", teacherContact: 'teacher1@example.com'},
    "parent14": { name: "Ethan Harris", grade: "B", teacherContact: 'teacher1@example.com'},
    "parent15": { name: "Avery Clark", grade: "A", teacherContact: 'teacher1@example.com'}
};

// Get the username from the URL (query string)
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('parent');

// Display the student details
const student = studentsData[username];

if (student) {
    document.getElementById('name').textContent = student.name;
    document.getElementById('grade').textContent = student.grade;
    document.getElementById('teacherContact').textContent = student.teacherContact;
} 
else {
     window.location.href = "index.html"; // Redirect back to the login page if no valid student found
}