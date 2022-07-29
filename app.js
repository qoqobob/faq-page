document.addEventListener('DOMContentLoaded', () => {

const questions = document.getElementsByClassName('question-container');

for (i = 0; i < questions.length; i++) {
    questions[i].addEventListener('click', function() {
        this.classList.toggle('active');
    });
};

})

