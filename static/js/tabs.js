document.addEventListener('DOMContentLoaded', () => {
    const containers = document.querySelectorAll('.tab-container');

    containers.forEach(container => {
        const nav = container.querySelector('.tab-nav');
        const panels = container.querySelectorAll('.tab-panel');

        if (!nav || panels.length === 0) return;

        panels.forEach((panel, index) => {
            const title = panel.getAttribute('data-title') || `Tab ${index + 1}`;
            const button = document.createElement('button');

            button.textContent = title;
            button.className = 'tab-btn';
            button.setAttribute('role', 'tab');
            button.setAttribute('aria-selected', 'false');
            button.setAttribute('tabindex', '-1');

            // Default to first tab active
            if (index === 0) {
                button.classList.add('active');
                button.setAttribute('aria-selected', 'true');
                button.removeAttribute('tabindex');
                panel.removeAttribute('hidden');
            }

            button.addEventListener('click', () => {
                // Deactivate all
                nav.querySelectorAll('.tab-btn').forEach(b => {
                    b.classList.remove('active');
                    b.setAttribute('aria-selected', 'false');
                    b.setAttribute('tabindex', '-1');
                });
                panels.forEach(p => p.setAttribute('hidden', ''));

                // Activate current
                button.classList.add('active');
                button.setAttribute('aria-selected', 'true');
                button.removeAttribute('tabindex');
                panel.removeAttribute('hidden');
            });

            // Keyboard navigation (Arrows)
            button.addEventListener('keydown', (e) => {
                let targetBtn = null;
                const buttons = Array.from(nav.querySelectorAll('.tab-btn'));
                const currentIndex = buttons.indexOf(button);

                if (e.key === 'ArrowRight') {
                    targetBtn = buttons[(currentIndex + 1) % buttons.length];
                } else if (e.key === 'ArrowLeft') {
                    targetBtn = buttons[(currentIndex - 1 + buttons.length) % buttons.length];
                }

                if (targetBtn) {
                    targetBtn.focus();
                    targetBtn.click(); // Optional: Automatic activation
                }
            });

            nav.appendChild(button);
        });
    });
});
