document.querySelectorAll('.model-selection-card').forEach(card => {
    card.addEventListener('click', () => {
        const title = card.querySelector('.card-title')?.textContent || '—';
        const sub = card.querySelector('.card-sub')?.textContent || '';
        document.getElementById('active-model-name').textContent = title.toUpperCase();
        document.getElementById('active-model-meta').textContent = sub;
        document.getElementById('empty-state').style.opacity = '0';
        document.querySelectorAll('.model-selection-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');

        document.getElementById("model-preview").src = card.dataset.modelSrc;
    });
});

document.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
        document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');

        const filter = chip.dataset.filter;
        document.querySelectorAll('.model-selection-card').forEach(card => {
            const match = filter === 'all' || card.dataset.category === filter;
            card.style.display = match ? '' : 'none';
        });
    });
});
