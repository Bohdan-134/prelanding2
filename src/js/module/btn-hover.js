function addHoverListener(path, title, colorHover, colorLeave) {
    path.addEventListener('mousemove', function() {
        this.style.fill = colorHover;
    });

    path.addEventListener('mouseleave', function() {
        this.style.fill = colorLeave;
    });

    title.addEventListener('mousemove', function() {
        path.style.fill = colorHover;
    });

    title.addEventListener('mouseleave', function() {
        path.style.fill = colorLeave;
    });
}

const openPath = document.querySelector('#open-box svg path');
const openTitle = document.querySelector('.open-box-title');
addHoverListener(openPath, openTitle, '#c66553', '#FF836C');

const sendSvg = document.querySelector('#send svg path');
const sendTitle = document.querySelector('.send-title');
addHoverListener(sendSvg, sendTitle, '#48afb7', '#53D2DC');