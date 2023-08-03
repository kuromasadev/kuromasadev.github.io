const navTemplate = document.createElement('template');
navTemplate.innerHTML = `

<style>
    .flex-container {
      display: flex;
      gap: 10px;
      position: fixed;
      top: 10px;
      right: 10px;
      z-index: 10;
    }
    
    .Icon {
      width: 28px;
      cursor: pointer;
    }
   
</style>

<div id="menu" class="flex-container" >
    <div>
        <img class="Icon home-icon" alt="Home">
    </div>
    <div id="infoIcon">
        <img class="Icon info-icon" alt="Info">
    </div>
    <div>
        <img class="Icon github-icon" alt="Github">
    </div>
</div>
`

class navMenu extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(navTemplate.content);

        const homeIcon = shadowRoot.querySelector('.home-icon');
        homeIcon.src = this.resolveRelativePath('../../Materials/Icon/Home.png');
        homeIcon.addEventListener('click', () => {
            homeIcon.src = this.resolveRelativePath('../../Materials/Icon/Home-invert.png');
            window.location.href = this.resolveRelativePath('../../index.html');
        });

        const infoIcon = shadowRoot.querySelector('.info-icon');
        infoIcon.src = this.resolveRelativePath('../../Materials/Icon/Info.png');
        infoIcon.addEventListener('click', () => {
            infoIcon.src = this.resolveRelativePath('../../Materials/Icon/Info-invert.png');
            window.location.href = this.resolveRelativePath('../../Pages/Hello World.html');
        });

        const githubIcon = shadowRoot.querySelector('.github-icon');
        githubIcon.src = this.resolveRelativePath('../../Materials/Icon/github-rev.png');
        githubIcon.addEventListener('click', () => {
            window.open('https://github.com/kuromasadev');
        });

        const menuIcon = shadowRoot.querySelector('.menu-icon');
        menuIcon.src = this.resolveRelativePath('../../Materials/Icon/Menu.png');
        menuIcon.addEventListener('click', () => {
            this.showHideCheckerDropDown(
                shadowRoot.getElementById('menuDropdown'),
                menuIcon,
                this.resolveRelativePath('../../Materials/Icon/Menu-revert.png'),
                this.resolveRelativePath('../../Materials/Icon/Menu.png')
            );
        });
    }
    resolveRelativePath(relativePath) {
        const pathParts = window.location.pathname.split('/');
        pathParts.pop(); // Remove current page filename from path
        const basePath = pathParts.join('/') + '/';
        return basePath + relativePath;
    }
}

customElements.define('nav-menu', navMenu);


function infoShowAnim(hoverContentDiv) {
    // console.log("run show function");
    if (hoverContentDiv.classList.contains("hidden-slide")) {
        hoverContentDiv.classList.remove("hidden-slide");
    }
    hoverContentDiv.classList.add("visible-slide");
}

function infoShyAnim(hoverContentDiv) {
    // console.log("run hide function");
    if (hoverContentDiv.classList.contains("visible-slide")) {
        hoverContentDiv.classList.remove("visible-slide");
    }
    hoverContentDiv.classList.add("hidden-slide");
}

var showHideController = 0;

function showHideChecker(hoverContent, icon, iconNewAddress, iconPrevAddress) {
    // console.log("run checker");

    if (showHideController === 0) {
        icon.src = iconNewAddress;
        infoShowAnim(hoverContent);
        ++showHideController;
    }
    else if(showHideController === 1) {
        icon.src = iconPrevAddress;
        infoShyAnim(hoverContent);
        showHideController = 0;
        topFunction();
    }
}

var showHideControllerDropDown = 0;

function showHideCheckerDropDown(hoverContent, icon, iconNewAddress, iconPrevAddress) {
    // console.log("run checker");

    if (showHideControllerDropDown === 0) {
        icon.src = iconNewAddress;
        infoShowAnim(hoverContent);
        ++showHideControllerDropDown;
    }
    else if(showHideControllerDropDown === 1) {
        icon.src = iconPrevAddress;
        infoShyAnim(hoverContent);
        showHideControllerDropDown = 0;
    }
}

function topFunction() {
    console.log("scroll to top");

    document.getElementById("siteDiv").scrollTo({top: 0, behavior: 'smooth'});
    document.body.scrollTo({top: 0, behavior: 'smooth'}); // For Safari
    document.documentElement.scrollTo({top: 0, behavior: 'smooth'}); // For Chrome, Firefox, IE and Opera
}
