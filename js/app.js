const containerFluid = document.querySelector('.container-fluid');
const main = document.querySelector('.main');

setTimeout(function () {
    containerFluid.style.display = 'block'
    main.style.display = 'none';
}, 3000)






// Smooth Scrolling
const btn = document.getElementById('btn');

        document.body.onscroll = () => {
            let top = document.documentElement.scrollTop;
            if (top > 700) {
                btn.style.opacity = 1;
            } else {
                btn.style.opacity = 0;
            }
        }

        btn.onclick = () => {
            let current = document.documentElement.scrollTop;
            let scroll = setInterval(() => {
                window.scrollTo(0, current -= 30)
                if (current < 1) {
                    clearInterval(scroll);
                }
            }, 5)
        }