document.addEventListener('DOMContentLoaded', () => {
    const videoContainers = document.querySelectorAll('.embed-responsive');

    videoContainers.forEach(container => {
        const overlay = container.querySelector('.video-overlay');
        const youtubeId = container.getAttribute('data-youtube-id');

        if (overlay && youtubeId) {
            overlay.addEventListener('click', () => {
                const iframe = document.createElement('iframe');
                
                // Hapus semua konten di dalam container (placeholder dan overlay)
                container.innerHTML = ''; 

                // Atribut untuk iframe YouTube
                iframe.setAttribute('src', `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`);
                iframe.setAttribute('frameborder', '0');
                iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
                iframe.setAttribute('allowfullscreen', 'true');
                iframe.style.width = '100%';
                iframe.style.height = '100%';
                iframe.style.position = 'absolute';
                iframe.style.top = '0';
                iframe.style.left = '0';

                // Tambahkan iframe ke container
                container.appendChild(iframe);
            });
        }
    });
});