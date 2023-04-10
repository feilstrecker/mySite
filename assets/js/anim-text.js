const textToAnim = document.querySelector('#p-about')
const text = "Hello, my name is Leonardo and I'm a beginner programmer with experience in various technologies, including Python, JavaScript, Node.js, HTML, CSS, Docker, Kubernetes, and virtualization of machines. With my passion for technology and my willingness to learn, I'm always looking for new ways to improve my skills and expand my knowledge."
let counter = 0

function typeAnim(text, callback) {
    if(counter < text.lastIndexOf("")) {
        setTimeout(() => {
            textToAnim.textContent += text.charAt(counter)
            counter++
            typeAnim(text, callback)
        }, 50)
    } else {
        if (callback) callback();
    }
}
typeAnim(text, typeAnim(text))
