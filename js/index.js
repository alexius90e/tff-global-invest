const authContainer = document.querySelector('.auth');
const authTogglerButtons = document.querySelector('.auth__toggler');

if (authContainer) {
  authContainer.addEventListener('click', (event) => {
    const isAuthToggler = event.target.classList.contains('auth__toggler');
    if (isAuthToggler) authContainer.classList.toggle('register');
  });
}
