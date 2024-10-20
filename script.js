// Suas credenciais da API Backendless
const APP_ID = '79D08054-368B-4D2B-95D3-6A1BA5E8306C';
const API_KEY = 'CDD6A8EC-B2C9-4FB9-BAAD-5814775152C0';

// URL base do Backendless para as requisições REST
const BASE_URL = `https://api.backendless.com/${APP_ID}/${API_KEY}/users`;

// Função para registrar um novo usuário
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const userData = {
        username: username,
        email: email,
        password: password
    };

    fetch(`${BASE_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.code) {
            document.getElementById('message').textContent = data.message;
        } else {
            document.getElementById('message').textContent = 'Cadastro realizado com sucesso!';
        }
    })
    .catch(error => console.error('Erro:', error));
});

// Função para fazer login do usuário
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const loginData = {
        login: email,
        password: password
    };

    fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.code) {
            document.getElementById('message').textContent = data.message;
        } else {
            document.getElementById('message').textContent = 'Login realizado com sucesso!';
        }
    })
    .catch(error => console.error('Erro:', error));
});
