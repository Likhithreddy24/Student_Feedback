// Student data
const studentsData = {
    "student1": { name: "John Doe", grade: "A", strengths: "Leadership, Creativity", weaknesses: "Time Management", feedback: "Keep improving your time management skills." },
    "student2": { name: "Jane Smith", grade: "B", strengths: "Teamwork, Communication", weaknesses: "Procrastination", feedback: "Work on reducing procrastination." },
    "student3": { name: "Emily Johnson", grade: "A", strengths: "Analytical thinking, Problem-solving", weaknesses: "Perfectionism", feedback: "Be more comfortable with making decisions quickly." },
    "student4": { name: "Michael Brown", grade: "C", strengths: "Curiosity, Self-motivation", weaknesses: "Organization", feedback: "Focus on organizing your tasks better." },
    "student5": { name: "Sophia Davis", grade: "B", strengths: "Creativity, Attention to detail", weaknesses: "Confidence", feedback: "Believe in your abilities more." },
    "student6": { name: "David Wilson", grade: "A", strengths: "Critical thinking, Collaboration", weaknesses: "Public speaking", feedback: "Try to speak up more in class." },
    "student7": { name: "Olivia Martinez", grade: "B", strengths: "Empathy, Teamwork", weaknesses: "Perfectionism", feedback: "Don't be afraid to make mistakes." },
    "student8": { name: "Daniel Anderson", grade: "A", strengths: "Math skills, Focus", weaknesses: "Overthinking", feedback: "Trust your instincts and avoid overthinking." },
    "student9": { name: "Isabella Thomas", grade: "B", strengths: "Creativity, Leadership", weaknesses: "Delegation", feedback: "Delegate tasks more effectively." },
    "student10": { name: "James Moore", grade: "C", strengths: "Consistency, Hard-working", weaknesses: "Lack of initiative", feedback: "Take more initiative and be proactive." },
    "student11": { name: "Mia Jackson", grade: "B", strengths: "Communication, Teamwork", weaknesses: "Stress management", feedback: "Work on managing stress during exams." },
    "student12": { name: "Lucas Lee", grade: "A", strengths: "Problem-solving, Leadership", weaknesses: "Organization", feedback: "Work on staying organized." },
    "student13": { name: "Amelia Perez", grade: "C", strengths: "Determination, Creativity", weaknesses: "Time management", feedback: "Improve your time management." },
    "student14": { name: "Ethan Harris", grade: "B", strengths: "Math skills, Critical thinking", weaknesses: "Speaking up in class", feedback: "Contribute more to class discussions." },
    "student15": { name: "Avery Clark", grade: "A", strengths: "Leadership, Research", weaknesses: "Focus", feedback: "Focus on staying on task." }
};

// Get the username from the URL (query string)
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');

// Display the student details
const student = studentsData[username];

if (student) {
    document.getElementById('name').textContent = student.name;
    document.getElementById('grade').textContent = student.grade;
    document.getElementById('strengths').textContent = student.strengths;
    document.getElementById('weaknesses').textContent = student.weaknesses;
    document.getElementById('feedback').textContent = student.feedback;
} else {
    window.location.href = "index.html"; // Redirect back to the login page if no valid student found
}