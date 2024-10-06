function celebrate() {
    const celebrationContainer = document.querySelector('.personalinfo');

    for (let i = 0; i < 30; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        const xPos = Math.random() * 100; 
        const delay = Math.random() * 0.5; 

        star.style.left = `${xPos}vw`;
        star.style.animationDelay = `${delay}s`;

        celebrationContainer.appendChild(star);

        star.addEventListener('animationend', () => {
            star.remove();
        });
    }
    
}

function openModal() {
    document.getElementById("editModal").style.display = "block";
}

function closeModal() {
    document.getElementById("editModal").style.display = "none";
}

function saveChanges() {

    const updatedUsername = document.getElementById('editUsername').value;
    const updatedRole = document.getElementById('editRole').value;
    const updatedBirthdate = document.getElementById('editBirthdate').value;

    document.querySelector('.username h2').innerText = updatedUsername;
    document.querySelector('.username h3').innerText = updatedRole;
    document.querySelector('.btd p').innerText = new Date(updatedBirthdate).toDateString();

    closeModal();
}

document.querySelector('.edit button').addEventListener('click', openModal);
