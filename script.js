// появление элементов при загрузке

window.addEventListener("load", () => {

    const elements = document.querySelectorAll(
        ".menu, .title, .left-text, .right-text, .glasses, .book, .star, .big-flower"
    );


    elements.forEach((element, index) => {

        element.style.opacity = "0";
        element.style.transform += " translateY(30px)";


        setTimeout(() => {

            element.style.transition = "1s ease";

            element.style.opacity = "1";
            element.style.transform =
                element.style.transform.replace(
                    " translateY(30px)",
                    ""
                );

        }, index * 150);

    });


});


// движение градиента мышкой

const screen = document.querySelector(".screen");


screen.addEventListener("mousemove", (event)=>{

    const x = event.clientX / window.innerWidth * 100;
    const y = event.clientY / window.innerHeight * 100;


    screen.style.background =
    `
    radial-gradient(circle at ${x}% ${y}%,
    rgba(255,120,40,.55),
    transparent 18%),
    #101010
    `;


});
