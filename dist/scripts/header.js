class Header extends HTMLElement {
    constructor() {
        super();
        this.link = '';
    }

    static get observedAttributes() {
        return['link'];
    }

    attributeChangedCallback(property, oldValue, newValue) {

        if (oldValue === newValue) return;
        this[ property ] = newValue;
        
      }

    connectedCallback() {
        this.innerHTML = `
        <div class="top">
            (✧ ✧).｡.:*☆
            <button onclick="window.location.href='https://neocities.org/site/purrluto';" title="Ready to leave?" >x</button>
        </div>
        <div class="dummy">
            <div><button onclick="history.back()" title="Go back" >&#8617;</button><button onclick="history.forward()" title="Go forward" >&#8618;</button></div>
            <div class="address-cont"><div>Address: </div><div id="address"><span id="lg">https://</span>purrluto.neocities.org<span id="lg">/${this.link}</span></div></div>
            <div>
                <div class="dropdown" style="float: left; margin-right: 2px;">
                    <button class="dropdown-toggle">&#128193;</button>
                    <div class="dropdown-select init-hid">
                        <span>other socials:</span>
                        <a class="dropdown-item" target="_blank" href="https://www.youtube.com/@purrluto">🖤 my youtube!</a>
                        <a class="dropdown-item" target="_blank" href="https://www.tiktok.com/@purrlut0">♠️ my tiktok!</a>
                        <a class="dropdown-item" target="_blank" href="https://purrluto.tumblr.com/">❤️ my main tumblr!</a>
                        <a class="dropdown-item" target="_blank" href="https://plutonex.tumblr.com/">💛 my art tumblr!</a>
                        <a class="dropdown-item" target="_blank" href="https://bsky.app/profile/purrluto.bsky.social">💙 my bluesky!</a>
                        <a class="dropdown-item" target="_blank" href="https://www.twitch.tv/plutorian">💜 my twitch!</a>
                    </div>
                </div>
                <div class="dropdown" style="float: right;">
                    <button class="dropdown-toggle">&#11088;</button>
                    <div class="dropdown-select init-hid">
                        <span>my pookies:</span>
                        <a class="dropdown-item">nobody here yet! o7</a>
                    </div>
                </div>
            </div>
        </div>
        <nav>
            <a href="/index.html" title="Go to the homepage!">home</a>
            <a title="A gallery of my art!"><s>gallery</s></a>
            <a title="My TTRPG (usually D&D5E) homebrew!"><s>homebrew</s></a>
            <a title="Extra information about my OCs!"><s>ocs</s></a>
            <a title="Screenshots/Thoughts about games I like!"><s>games</s></a>
            <a title="My tunes!"><s>music</s></a>
        </nav>`;
    }
}

customElements.define( 'header-bar', Header );