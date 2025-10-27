const checkBoxList = document.querySelectorAll('.custom-checkbox');
const inputFields = document.querySelectorAll('.goal-input');
const errorLabel = document.querySelector('.error-label');
const progressBar = document.querySelector('.progress-bar');
const progressVal = document.querySelector('.progress-value');

const allGoals = JSON.stringify(localStorage.getItem('allGoals'))|| {}

checkBoxList.forEach((checkBox) => {
  checkBox.addEventListener('click', () => {
    const allInputFields = [...inputFields].every((input) => input.value);

    if (allInputFields) {
      checkBox.parentElement.classList.toggle('completed');
      progressVal.style.width='33.33%';
      errorLabel.classList.remove('show-error');
    } else {
      errorLabel.classList.add('show-error');
    }
  });
});
inputFields.forEach((input)=>{
  input.value = allGoals[input.id].name
   input.addEventListener('focus',()=>{
    errorLabel.classList.remove('show-error')
   })
   input.addEventListener('input' , (e)=>{
     allGoals[input.id] = {
       name : input.value,
       completed : false,
     }
     localStorage.setItem('allGoals',JSON.stringify(allGoals));
   })
})
