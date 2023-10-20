const passwordInput = document.querySelector('.pass-field input');
const eyeIcon = document.querySelector('.pass-field i');
const requirementList = document.querySelectorAll('.requirement-list li');

// An array of password requirements with correponding
//regular expressions and index of the requirent list item

// Una serie de requisitos de contraseña con sus correspondientes
//expresiones regulares e índice del elemento de la lista requerido

const requirements = [
    {regex: /.{8,}/, index:0}, //Minimum of 8 characters
    {regex: /[0-9]/, index:1},//At least one number
    {regex: /[a-z]/, index:2}, // At leat one lowecase letter
    {regex: /[^A-Za-z0-9]/, index:3}, // At least one special charactar
    {regex: /[A-Z]/, index:4}, // At least one uppercase letter
]

passwordInput.addEventListener('keyup',(e)=>{
    requirements.forEach(item =>{
        // Check if the password  marches the requirement regex
        // Comprobar si la contraseña cumple con el requisito regex
        const isValid = item.regex.test(e.target.value);
        const requirementItem = requirementList[item.index];
        

        // Updating class and icon of requiremtn item if requirement matched or not
        // Actualizando la clase y el ícono del elemento requerido si el requisito coincide o no
        if(isValid){
            requirementItem.firstElementChild.className='fa-solid fa-check';
            requirementItem.classList.add('valid');
        }else{
            requirementItem.firstElementChild.className='fa-solid fa-circle';
            requirementItem.classList.remove('valid');
        }
    });
})


eyeIcon.addEventListener('click',()=>{
    // Toggle the password input type between 'password' and 'text'
    // Alternar el tipo de entrada de contraseña entre 'contraseña' y 'texto'
    passwordInput.type =  passwordInput.type === 'password' ? 'text':'password'

    //Update the eye icon class based on the password input type
    //Actualiza la clase del ícono del 'eye' según el tipo de entrada de contraseña
    eyeIcon.className = `fa-solid fa-eye${passwordInput.type ==='password'?'': '-slash' }`
})