
            const toggleMenu = () => {
                document.querySelector('nav > ul').classList.toggle('activo');
                document.querySelector('.menu-hamburguesa').classList.toggle('activo');
            };

            const toggleSubMenu = (e) => {
                const submenu = e.currentTarget.nextElementSibling;
                if (submenu && submenu.classList.contains('submenu')) {
                submenu.classList.toggle('activo');
                e.preventDefault(); // evita que el enlace navegue
                }
            };

            document.addEventListener('DOMContentLoaded', () => {
                document.querySelector('.menu-hamburguesa')?.addEventListener('click', toggleMenu);

                const enlacesConSubmenu = document.querySelectorAll('nav > ul > li > a + ul');
                enlacesConSubmenu.forEach(ul => {
                const padre = ul.previousElementSibling;
                ul.classList.add('submenu'); // marcar para el CSS
                padre.addEventListener('click', toggleSubMenu);
                });
            });