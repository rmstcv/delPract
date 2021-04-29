export default class Form {
    constructor(form, input, nameInputs, telInputs, messageInputs, agreement, modal) {
        this.form = document.querySelector(form);
        this.input = document.querySelectorAll(input);
        this.nameInputs = document.querySelector(nameInputs);
        this.telInputs = document.querySelector(telInputs);
        this.messageInputs = document.querySelector(messageInputs);
        this.agreement = document.querySelector(agreement);
        this.modal = document.querySelector(modal);
        this.incorrectName = document.createElement('div');
        this.incorrectTel = document.createElement('div');
        this.incorrectMessage = document.createElement('div');
        this.incorrectAgreement = document.createElement('div');
    }

    checkTel () {
        this.incorrectTel.classList.add("errorInput");
        this.incorrectTel.remove();
        this.telInputs.style.borderColor = "";

        if (this.telInputs.value.match(/[0-9]+$/)) { 
            return true;
        }

        if (this.telInputs.value == "+7 ( _ _ _ ) _ _ _ - _ _ - _ _") {
            this.telInputs.after(this.incorrectTel);
            this.incorrectTel.innerHTML = "<span>Заполните поле</span> <img src='./icons/err.svg' alt='img'>";
            this.telInputs.style.borderColor = "red";
            return false;  
        } else {
            this.telInputs.after(this.incorrectTel);
            this.incorrectTel.innerHTML = "<span>Не верно</span> <img src='./icons/err.svg' alt='img'>";
            this.telInputs.style.borderColor = "red";
            console.log(this.telInputs.value);
            return false;   
        }
    };

    checkName () {
        this.incorrectName.classList.add("errorInput");
        this.incorrectName.remove();
        this.nameInputs.style.borderColor = "";

        if (this.nameInputs.value.match(/[а-я]+$/)) { 
            return true;
        }
        if (!this.nameInputs.value) {
            this.nameInputs.after(this.incorrectName);
            this.incorrectName.innerHTML = "<span>Заполните поле</span> <img src='./icons/err.svg' alt='img'>";
            this.nameInputs.style.borderColor = "red";
            return false; 
        } else {
            this.nameInputs.after(this.incorrectName);
            this.incorrectName.innerHTML = "<span>Не верно</span> <img src='./icons/err.svg' alt='img'>";
            this.nameInputs.style.borderColor = "red";
            return false;   
        }
    };

    checkMessage () {
        this.incorrectMessage.classList.add("errorInput");
        this.incorrectMessage.remove();
        this.messageInputs.style.borderColor = "";
        if (!this.messageInputs.value) {
            this.messageInputs.after(this.incorrectMessage);
            this.incorrectMessage.innerHTML = "<span>Заполните поле</span> <img src='./icons/err.svg' alt='img'>";
            this.messageInputs.style.borderColor = "red";
            return false;
        }
    }

    checkAgreement () {
        this.incorrectAgreement.classList.add("errorInput");
        this.incorrectAgreement.remove();
        if (!this.agreement.ch) {
            this.agreement.after(this.incorrectAgreement);
            this.incorrectAgreement.innerHTML = "<span>Заполните поле</span> <img src='./icons/err.svg' alt='img'>";
        }
    }

    telMask () {
        let element = document.getElementById('mask');
        let maskOptions = {
        mask: '+{7} ( 0 0 0 ) 0 0 0 - 0 0 - 0 0',
        lazy: false
        };
        let mask = IMask(element, maskOptions);
    }

    initForm () {
        this.telMask();
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.checkName();
            this.checkTel();
            this.checkMessage ();
            this.checkAgreement ();
        });
    };
}