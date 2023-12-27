var m5zan = [];
var oneProduct;

function addProduct(){

    oneProduct = {


        pName : document.getElementById("pNameId").value = ""
        pPrice : document.getElementById("pPriceId").value = ""
        pCat : document.getElementById("pCatId").value = ""
        pDesc : document.getElementById("pDescId").value = ""
    }
    
    m5zan.push(oneProduct);

    localStorage.setItem("ourLocalData" , JSON.stringify(m5zan ))
    
    clearInputs()
    
}

function clearInputs()
{

    pName : document.getElementById("pNameId").value = "";
    pPrice : document.getElementById("pPriceId").value = "";
    pCat : document.getElementById("pCatId").value = "";
    pDesc : document.getElementById("pDescId").value = "";

}


function displayProducts()
{

    var cartona = ""

    for ( var i = 0 ; i < m5zan.length ; i++)
    {

        cartona += `<tr>
        <td>` + m5zan[i].pName + `</td>
        <td>` + m5zan [i].pPrice + `</td>
        <td>` + m5zan [i].pCat + `</td>
        <td>` + m5zan [i].pDesc + `</td>
        </tr>`
    }

    document.getElementById("tBody").innerHTML = cartona;
}

function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        // Perform your AJAX/Fetch login

        setFormMessage(loginForm, "error", "Invalid username/password combination");
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "Username must be at least 10 characters in length");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});

