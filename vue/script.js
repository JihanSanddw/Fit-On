document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleksi Semua Section Form
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    const verifEmail = document.getElementById('verifEmail');

    // Fungsi Helper untuk menyembunyikan semua section
    const hideAll = () => {
        registerForm.classList.add('hidden');
        loginForm.classList.add('hidden');
        verifEmail.classList.add('hidden');
    };

    // 2. Event Listener untuk Navigasi Link
    document.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        if (!link) return;

        const href = link.getAttribute('href');

        // Navigasi ke Login
        if (href === 'logForm') {
            e.preventDefault();
            hideAll();
            loginForm.classList.remove('hidden');
        } 
        // Navigasi ke Register
        else if (href === 'regForm' || href === '/view/register.html') {
            // Kita cegah default kalau dia cuma mau pindah antar section di file yang sama
            if (href === 'regForm') e.preventDefault();
            hideAll();
            registerForm.classList.remove('hidden');
        }
        // Navigasi ke Forgot Password (Lupa Kata Sandi)
        else if (link.innerText.includes('Forgot Password?')) {
            e.preventDefault();
            hideAll();
            verifEmail.classList.remove('hidden');
        }
    });

    // 4. Logika Mata (Password Visibility)
    const setupEye = (form) => {
        const eye = form.querySelector('.fa-eye-slash');
        const pass = form.querySelector('input[type="password"]');
        
        if (eye && pass) {
            eye.style.cursor = 'pointer';
            // Pastikan ikon berada di posisi yang benar (z-index)
            eye.style.zIndex = "10"; 

            eye.addEventListener('click', () => {
                const isPass = pass.type === 'password';
                pass.type = isPass ? 'text' : 'password';
                
                // Toggle icon class
                eye.classList.toggle('fa-eye-slash', !isPass);
                eye.classList.toggle('fa-eye', isPass);
            });
        }
    };

    setupEye(registerForm);
    setupEye(loginForm);
});