class HomeNavComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });

        // Create a style tag
        const style = document.createElement('style');
        style.textContent = `
            .Icon {
                width: 28px;
                cursor: pointer;
            }
        `;

        // Append the style tag to the shadow root
        shadowRoot.appendChild(style);       

        // Create a container for the icons
        const container = document.createElement('div');
        container.style.display = 'flex';
        container.style.justifyContent = 'space-between';

        // Create the GitHub icon
        const githubIcon = document.createElement('img');
        githubIcon.className = 'Icon github-icon';
        githubIcon.alt = 'Github';
        githubIcon.src = this.resolveRelativePath('Materials/Icon/github-rev.png');
        githubIcon.addEventListener('click', () => {
            window.open('https://github.com/kuromasadev');
        });
        container.appendChild(githubIcon);

        // Create the Instagram icon
        const instagramIcon = document.createElement('img');
        instagramIcon.className = 'Icon';
        instagramIcon.src = this.resolveRelativePath('Materials/Icon/instagram.png');
        instagramIcon.alt = 'Ins';
        instagramIcon.addEventListener('click', () => {
            window.open('https://www.instagram.com/modernplann3r/');
        });
        container.appendChild(instagramIcon);

        // Create the LinkedIn icon
        const linkedinIcon = document.createElement('img');
        linkedinIcon.className = 'Icon';
        linkedinIcon.src = this.resolveRelativePath('Materials/Icon/linkedin.png');
        linkedinIcon.alt = 'LinkedIn';
        linkedinIcon.addEventListener('click', () => {
            window.open('https://www.linkedin.com/in/albrponce/');
        });
        container.appendChild(linkedinIcon);

        // Append the container to the shadow root
        shadowRoot.appendChild(container);
    }

    resolveRelativePath(relativePath) {
        const pathParts = window.location.pathname.split('/');
        pathParts.pop(); // Remove current page filename from path
        const basePath = pathParts.join('/') + '/';
        return basePath + relativePath;
    }
}

customElements.define('home-nav-component', HomeNavComponent);
