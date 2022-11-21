const hideLoadingPlaceholder = () => {
    const body = document.body;
    body.style.overflow = 'auto';

    const loader = document.querySelector('.loadingPlaceholder');
    loader.classList.add('loadingPlaceholder-hidden');

    setTimeout(() => {
        body.removeChild(loader);
        // remove <style> tag
        document.querySelector('#loadingPlaceholderStyles').remove();
    }, 350);
};

export default hideLoadingPlaceholder;
