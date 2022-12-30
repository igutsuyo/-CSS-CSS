(() => {
    window.addEventListener('load', () => {
        // init();
        setTimeout(init, 2000);
    });

    function init() {
        const border = document.querySelector('.-border');
        border.classList.add('-active');
        const img = document.querySelector('.img');
        img.classList.add('-img-active');
    }
})();