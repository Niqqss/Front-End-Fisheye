function lightboxFactory(media, photographer) {
    const { name } = photographer;
    const { image, video, title } = media;
    const type = media.video ? 'video' : 'image';
    let src;
    if (type === 'video') {
        src = `assets/images/${name}/${video}`
    } else {
        src = `assets/images/${name}/${image}`;
    }

    function LightboxDOM() {
        const lightboxContainer = document.createElement('div');
        const leftArrow = document.createElement('i');
        leftArrow.className = "fa-solid fa-chevron-left left-arrow";
        leftArrow.setAttribute("tabindex", "0");
        leftArrow.setAttribute("role", "link");
        leftArrow.setAttribute("aria-label", "previous image");
        lightboxContainer.appendChild(leftArrow);
        const figure = document.createElement('figure');

        const mediaElement = type === 'video' ? document.createElement('video') : document.createElement('img');
        mediaElement.src = src;
        mediaElement.className = "lightbox-media";
        mediaElement.setAttribute("alt", `${title}`);
        if (type === 'video') {
            mediaElement.setAttribute("controls", "");
        }
        figure.appendChild(mediaElement);

        const mediaTitle = document.createElement('figcaption');
        mediaTitle.className = "lightbox-media-name";
        mediaTitle.textContent = title;
        lightboxContainer.appendChild(figure);
        figure.appendChild(mediaTitle);
        const rightArrow = document.createElement('i');
        rightArrow.className = "fa-solid fa-chevron-right right-arrow";
        rightArrow.setAttribute("tabindex", "0");
        rightArrow.setAttribute("role", "link");
        rightArrow.setAttribute("aria-label", "next image");
        lightboxContainer.appendChild(rightArrow);
        const closeButton = document.createElement('i');
        closeButton.className = "fa-solid fa-xmark close-button";
        closeButton.setAttribute("tabindex", "0");
        closeButton.setAttribute("role", "button");
        closeButton.setAttribute("aria-label", "close dialog");
        lightboxContainer.appendChild(closeButton);

        return (lightboxContainer);
    }
    return { LightboxDOM };
}