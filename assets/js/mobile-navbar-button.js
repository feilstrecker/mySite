const menu = document.querySelector('.mobile-navbar-content');
const menuButton = document.querySelector('.open-close-mobile-navbar');
const bar1 = document.querySelector('.mobile-navbar-bar1');
const bar2 = document.querySelector('.mobile-navbar-bar2');
const bar3 = document.querySelector('.mobile-navbar-bar3');

class buttonMenu {
    constructor() {
        this.closed = true;
        menuButton.addEventListener('click', ()=>{
            this.changeButton();
    
            if (this.closed === false) {
                this.closed = true;
            } else {
                this.closed = false;
            }
        })
    }

    changeButton() {
        if (this.closed === true) {
            /* OPEN MENU */
    
            bar3.style.display = "flex"
            bar1.style.display = "flex"

            bar3.style.rotate = "-45deg"
            bar1.style.rotate = "45deg"
            
            bar3.style.top = "1.5rem"
            bar1.style.top = "1.5rem"
            bar3.style.right = "10.5rem"
            bar2.style.right = "10.5rem"
            bar2.style.width = "0px"
            bar1.style.right = "10.5rem"

            menu.style.width = '9.5rem'

        }
        else {
            /* CLOSE MENU */
            bar3.style.display = "flex"
            bar1.style.display = "flex"

            bar3.style.rotate = "0deg"
            bar1.style.rotate = "0deg"
            
            bar3.style.top = "2.2rem"
            bar1.style.top = "0.8rem"
            bar3.style.right = "0.5rem"
            bar2.style.right = "0.5rem"
            bar2.style.width = "35px"
            bar1.style.right = "0.5rem"

            menu.style.width = '0rem'
    
        }
    
    }




    
}

const p1 = new buttonMenu()