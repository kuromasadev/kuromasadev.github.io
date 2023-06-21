const creditInfo = document.createElement('template');

creditInfo.innerHTML = `
    
    <link href="https://fonts.googleapis.com/css?family=Roboto+Mono:300,400&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../../css/style.css">
         
    <h2 class="h2-Dec" style="margin-top:40px; margin-bottom: 0;">
        Credit
    </h2>
    <p class="p-HoverInfo">
    Project Designer: Alberto Ponce<br>
    Design collaborators: Steven Loutherback, Tyler McBeth<br>
    Web Template Developer: Qihang Fan<br>
    </p>
    <p class="p-HoverInfo" style="margin-bottom:10px;">
        Copyright © 2020 Qihang Fan. All Rights Reserved
    </p>
`

class overlayCredit extends HTMLElement {

    constructor() {
        // Always call super first in constructor
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(creditInfo.content);
    }
}

customElements.define('overlay-credit', overlayCredit);