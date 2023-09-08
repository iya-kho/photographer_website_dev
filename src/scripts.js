import './assets/style.css';
import './assets/bootstrap/bootstrap.css';
import './assets/maugallery.js';
import './assets/bootstrap/bootstrap.bundle.js';


$(document).ready(function () {
    $('.gallery').mauGallery({
        columns: {
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 3
        },
        lightBox: true,
        lightboxId: 'myAwesomeLightbox',
        showTags: true,
        tagsPosition: 'top'
    });
});
