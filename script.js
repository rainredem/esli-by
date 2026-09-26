const screen = document.querySelector(".screen-1");


screen.addEventListener("mousemove", (event)=>{

    const rect = screen.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;


    screen.style.background =
    `
    radial-gradient(circle at ${x}px ${y}px,
    rgba(255,120,40,.45),
    transparent 18%),
    #101010
    `;

});
