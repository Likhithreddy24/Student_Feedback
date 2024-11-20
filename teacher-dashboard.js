// Array to store the details of 15 students
const studentsData = [
    { name: "John Doe", grade: "A", strengths: "Leadership, Creativity", weaknesses: "Time Management", feedback: "Keep improving your time management skills.",parentContact: '+1-555-1234' },
    { name: "Jane Smith", grade: "B", strengths: "Teamwork, Communication", weaknesses: "Procrastination", feedback: "Work on reducing procrastination.",parentContact: '+1-555-5678' },
    { name: "Emily Johnson", grade: "A", strengths: "Analytical thinking, Problem-solving", weaknesses: "Perfectionism", feedback: "Be more comfortable with making decisions quickly.",parentContact: '+1-555-6677'  },
    { name: "Michael Brown", grade: "C", strengths: "Curiosity, Self-motivation", weaknesses: "Organization", feedback: "Focus on organizing your tasks better.", parentContact: '+1-555-9876'},
    { name: "Sophia Davis", grade: "B", strengths: "Creativity, Attention to detail", weaknesses: "Confidence", feedback: "Believe in your abilities more.",parentContact: '+1-555-6543'  },
    { name: "David Wilson", grade: "A", strengths: "Critical thinking, Collaboration", weaknesses: "Public speaking", feedback: "Try to speak up more in class.",parentContact: '+1-555-1122' },
    { name: "Olivia Martinez", grade: "B", strengths: "Empathy, Teamwork", weaknesses: "Perfectionism", feedback: "Don't be afraid to make mistakes.", parentContact: '+1-555-2233' },
    { name: "Daniel Anderson", grade: "A", strengths: "Math skills, Focus", weaknesses: "Overthinking", feedback: "Trust your instincts and avoid overthinking.", parentContact: '+1-555-3344'},
    { name: "Isabella Thomas", grade: "B", strengths: "Creativity, Leadership", weaknesses: "Delegation", feedback: "Delegate tasks more effectively.", parentContact: '+1-555-4455'},
    { name: "James Moore", grade: "C", strengths: "Consistency, Hard-working", weaknesses: "Lack of initiative", feedback: "Take more initiative and be proactive.",parentContact: '+1-555-5566'  },
    { name: "Mia Jackson", grade: "B", strengths: "Communication, Teamwork", weaknesses: "Stress management", feedback: "Work on managing stress during exams.", parentContact: '+1-555-7788'},
    { name: "Lucas Lee", grade: "A", strengths: "Problem-solving, Leadership", weaknesses: "Organization", feedback: "Work on staying organized.", parentContact: '+1-555-8899' },
    { name: "Amelia Perez", grade: "C", strengths: "Determination, Creativity", weaknesses: "Time management", feedback: "Improve your time management.", parentContact: '+1-555-9900'},
    { name: "Ethan Harris", grade: "B", strengths: "Math skills, Critical thinking", weaknesses: "Speaking up in class", feedback: "Contribute more to class discussions.", parentContact: '+1-555-1123'},
    { name: "Avery Clark", grade: "A", strengths: "Leadership, Research", weaknesses: "Focus", feedback: "Focus on staying on task.", parentContact: '+1-555-2234'}
];

// Function to populate the table with student data
function populateStudentData() {
    const tableBody = document.getElementById('studentsTable').getElementsByTagName('tbody')[0];

    studentsData.forEach(student => {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = student.name;

        const gradeCell = document.createElement('td');
        gradeCell.textContent = student.grade;

        const strengthsCell = document.createElement('td');
        strengthsCell.textContent = student.strengths;

        const weaknessesCell = document.createElement('td');
        weaknessesCell.textContent = student.weaknesses;

        const feedbackCell = document.createElement('td');
        feedbackCell.textContent = student.feedback;

        const parentContactCell = document.createElement('td');
        parentContactCell.textContent = student.parentContact;

        row.appendChild(nameCell);
        row.appendChild(gradeCell);
        row.appendChild(strengthsCell);
        row.appendChild(weaknessesCell);
        row.appendChild(feedbackCell);
        row.appendChild(parentContactCell);

        tableBody.appendChild(row);
    });
}

// Call the function to populate data when the page loads
window.onload = populateStudentData;