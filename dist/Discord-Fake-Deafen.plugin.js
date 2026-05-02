/**
 * @name Discord-Fake-Deafen
 * @author MatthewRackley
 * @description Implement a fake deafen button in the Discord UI that toggles the deafen state without actually muting the user's microphone, allowing users to appear deafened while still being able to hear and speak in voice channels.
 * @version 0.0.1
 */

const originalWebSocketSend = WebSocket.prototype.send;
const vcControlPanelSelector = 'div#app-mount > div[class^="appAsidePanelWrapper_"] > div[class^="notAppAsidePanel_"] > div[class^="app_"] > div[class^="app__"] > div[class^="layers__"] > div[data-layer="base"][class^="layer__"] > div[class^="container__"] > div[class^="base__"] > div[class^="content__"] > div[class^="sidebar__"] > section[class^="panels__"][aria-label="User status and settings"]';
const voiceControlsSelector = 'div[class*="containerRtcOpened__"] > div[class^="buttons__"]';
let isFakeDeafenActive = false;
function enableFakeDeafen () {
    const text = new TextDecoder("utf-8");
    if (WebSocket.prototype.send === originalWebSocketSend) {
        WebSocket.prototype.send = function (data) {
            if (Object.prototype.toString.call(data) === "[object ArrayBuffer]") { //@ts-ignore
                if (text.decode(data).includes("self_deaf")) {
                    console.log("[Discord-Fake-Deafen] Found mute/deafen"); //@ts-ignore
                    data = data.replace('"self_mute":false', "NiceOneDiscord");
                    console.log("[Discord-Fake-Deafen] Deafen state toggled, WebSocket data modified to prevent detection.");
                }
            }
            return originalWebSocketSend.apply(this, [data]);
        };
    }
}
function restoreWebSocketSend () {
    WebSocket.prototype.send = originalWebSocketSend;
}
/**
 * Finds the control panel element in the Discord UI where the voice controls are located.
 * @function getControlPanel
 * @returns {HTMLElement}
 */
function getControlPanel () {
    const vcControlPanel = document.querySelector(vcControlPanelSelector);
    if (!vcControlPanel || !(vcControlPanel instanceof HTMLElement))
        throw new Error('VC Control Panel not found');
    return vcControlPanel;
}
/**
 * Finds the voice controls container within the control panel element.
 * @function getVoiceControls
 * @param {HTMLElement} vcControlPanel
 * @returns {HTMLDivElement}
 */
function getVoiceControls (vcControlPanel) {
    const voiceControls = vcControlPanel.querySelector(voiceControlsSelector);
    if (!voiceControls || !(voiceControls instanceof HTMLDivElement))
        throw new Error('Voice Controls not found');
    return voiceControls;
}

/**
 * Gets the deafen button from the voice controls.
 *
 * @param {HTMLDivElement} voiceControls The voice controls container.
 * @returns {HTMLButtonElement}  The deafen button.
 */
function getDeafenButton (voiceControls) {
    if (!voiceControls || !(voiceControls instanceof HTMLDivElement))
        throw new Error('Voice Controls not found');
    const deafenButton = voiceControls.querySelector('button[aria-label="Deafen"][type="button"]');
    if (!deafenButton || !(deafenButton instanceof HTMLButtonElement))
        throw new Error('Deafen button not found');
    return deafenButton;
}
/**
 * Gets the mute button from the voice controls.
 *
 * @param {HTMLDivElement} voiceControls The voice controls container.
 * @returns {HTMLButtonElement}  The mute button.
 */
function getMuteButton (voiceControls) {
    if (!voiceControls || !(voiceControls instanceof HTMLDivElement))
        throw new Error('Voice Controls not found');
    const muteButton = voiceControls.querySelector('button[aria-label="Mute"][type="button"]');
    if (!muteButton || !(muteButton instanceof HTMLButtonElement))
        throw new Error('Mute button not found');
    return muteButton;
}
/**
 * Finds the settings button within the voice controls and extracts its class names to apply to the fake deafen button for consistent styling.
 * @function getSettingsButtonClasses
 * @param {HTMLDivElement} voiceControls
 * @returns {{buttonClasses: string[], childDivClasses: string[], childDivsChildClasses: string[]}} An object containing the class names of the settings button and its child elements.
 */
function getSettingsButtonClasses (voiceControls) {
    const settingsSiblingSelector = 'button[aria-label="User Settings"][type="button"][class^="button__"]';
    const settingsButton = voiceControls.querySelector(settingsSiblingSelector);
    if (!settingsButton)
        throw new Error('Settings button not found');
    const buttonClasses = Array.from(settingsButton.classList);
    const childDivClasses = Array.from(settingsButton.children[0].classList);
    const childDivsChildClasses = Array.from(settingsButton.children[0].children[0].classList);
    return { buttonClasses, childDivClasses, childDivsChildClasses };
}
/**
 * @function assignStyles
 * @param {HTMLButtonElement} button - The fake deafen button.
 * @param {HTMLDivElement} childDiv - The child div of the fake deafen button.
 * @param {HTMLDivElement} childDivChild - The child div of the child div.
 * @description This function retrieves the necessary elements from the Discord UI and applies the appropriate classes to the fake deafen button and its child elements to ensure consistent styling with the existing voice control buttons.
 * It first gets the control panel, then finds the voice controls container, and finally extracts the class names from the settings button to apply them to the fake deafen button.
 */
function assignStyles (button, childDiv, childDivChild) {
    const vcControlPanel = getControlPanel();
    const voiceControls = getVoiceControls(vcControlPanel);
    const { buttonClasses, childDivClasses, childDivsChildClasses } = getSettingsButtonClasses(voiceControls);
    button.classList.add(...buttonClasses);
    button.classList.add('fake-deafen-button');
    button.classList.add('theme-dark');
    button.classList.add('theme-darker');
    childDiv.classList.add(...childDivClasses);
    childDivChild.classList.add(...childDivsChildClasses);
}

/**
 * Creates the CSS styles for the fake deafen button.
 */
function createFakeDeafenStyles () {
    const fakeDeafenCss = `
.fake-deafen-button {
  color: #FFFFFF;
}
.fake-deafen-button.fake-state-active {
  background-color: #701a1a;
}
.fake-deafen-button.fake-state-active:hover {
  background-color: #861919;
}
.spy-icon-path {
  color: #FFFFFF;
  stroke: #FFFFFF;
}
.spy-icon-path.fake-state-active {
  background-color: #701a1a;
  color: #ad0000;
  stroke: var(--icon-voice-muted);
}
.spy-icon-path.fake-state-active:hover {
  background-color: #861919;
}`;
    const fakeDeafenStyleSheet = document.createElement('style', { is: 'text/css' });
    fakeDeafenStyleSheet.id = 'fake-deafen-styles';
    fakeDeafenStyleSheet.appendChild(document.createTextNode(fakeDeafenCss));
    document.head.appendChild(fakeDeafenStyleSheet);
};
/**
 * Creates an SVG element representing the spy icon to be used as the content of the fake deafen button.
 * @function createSpyIcon
 * @returns {SVGSVGElement} An SVG element representing the spy icon.
 */
function createSpyIcon () {
    const NS = 'http://www.w3.org/2000/svg';
    const spyIcon = document.createElementNS(NS, 'svg');
    spyIcon.setAttribute('width', '24');
    spyIcon.setAttribute('height', '24');
    spyIcon.setAttribute('viewBox', '0 0 24 24');
    spyIcon.setAttribute('fill', 'none');
    spyIcon.setAttribute('aria-hidden', 'true');
    spyIcon.classList.add('fake-deafen-button');
    const path1 = document.createElementNS(NS, 'path');
    path1.id = 'spy-icon-path-1';
    path1.classList.add('spy-icon-path');
    path1.setAttribute('stroke', 'currentColor');
    path1.setAttribute('stroke-width', '2');
    path1.setAttribute('d', 'M10 15.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm9 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z');
    const path2 = document.createElementNS(NS, 'path');
    path2.id = 'spy-icon-path-2';
    path2.classList.add('spy-icon-path');
    path2.setAttribute('stroke', 'currentColor');
    path2.setAttribute('stroke-linecap', 'round');
    path2.setAttribute('stroke-linejoin', 'round');
    path2.setAttribute('stroke-width', '2');
    path2.setAttribute('d', 'm10 15 .211-.106a4 4 0 0 1 3.578 0L14 15m3-6-1.65-4.125a1 1 0 0 0-1.245-.577l-1.473.491a2 2 0 0 1-1.264 0L9.894 4.3a1 1 0 0 0-1.245.576L7 9m-4 1c7.5-1 11-1 18 0');
    spyIcon.append(path1, path2);
    return spyIcon;
}

/**
 * Fixes the state of the deafen button.
 *
 * @param {HTMLButtonElement} deafenButton
 * @param {HTMLButtonElement} [muteButton]
 */
function fixDeafenState (deafenButton, muteButton) {
    setTimeout(() => {
        if (isChecked(deafenButton)) {
            deafenButton.click();
        }
    }, 500);
    if (muteButton) {
        setTimeout(() => {
            if (!isChecked(muteButton)) {
                muteButton.click();
            }
        }, 1000);
    }
}
/**
 * Checks if the user is currently deafened.
 *
 * @param {HTMLButtonElement} button  The deafen button to check.
 * @returns {boolean} True if the user is deafened, false otherwise.
 */
function isChecked (button) {
    const ariaChecked = button.ariaChecked;
    if (!ariaChecked) return false;
    return ariaChecked === 'true';
}

/**
 * Creates the fake deafen button and appends it to the voice controls.
 * @function createFakeDeafenButton
 */
function createFakeDeafenButton () {
    const spyIcon = createSpyIcon();
    const fakeDeafenButton = document.createElement("button");
    fakeDeafenButton.ariaLabel = "Fake Deafen";
    fakeDeafenButton.type = "button";
    const fakeDeafenDiv = document.createElement("div");
    const fakeDeafenDivChild = document.createElement("div");
    const vcControlPanel = getControlPanel();
    const voiceControls = getVoiceControls(vcControlPanel);
    const deafenButton = getDeafenButton(voiceControls);
    const muteButton = getMuteButton(voiceControls);
    assignStyles(fakeDeafenButton, fakeDeafenDiv, fakeDeafenDivChild);
    fakeDeafenButton.onclick = function (e) {
        e.preventDefault();
        isFakeDeafenActive = !isFakeDeafenActive;
        if (isFakeDeafenActive) {
            deafenButton.click();
            enableFakeDeafen();
            fakeDeafenButton.classList.toggle('fake-state-active');
            document.getElementById('spy-icon-path-1')?.classList.toggle('fake-state-active');
            document.getElementById('spy-icon-path-2')?.classList.toggle('fake-state-active');
            fixDeafenState(deafenButton, muteButton);
        }
        else {
            restoreWebSocketSend();
            if (!isChecked(deafenButton)) {
                deafenButton.click();
            }
            fakeDeafenButton.classList.toggle('fake-state-active');
            document.getElementById('spy-icon-path-1')?.classList.toggle('fake-state-active');
            document.getElementById('spy-icon-path-2')?.classList.toggle('fake-state-active');
            fixDeafenState(deafenButton, muteButton);
        }

    };
    fakeDeafenDivChild.appendChild(spyIcon);
    fakeDeafenDiv.appendChild(fakeDeafenDivChild);
    fakeDeafenButton.appendChild(fakeDeafenDiv);
    voiceControls.appendChild(fakeDeafenButton);
}
/**
 * Creates the necessary elements for the fake deafen button.
 * @function createElements
 */
function createElements () {
    const vcControlPanel = document.querySelector(vcControlPanelSelector);
    if (vcControlPanel) {
        const voiceControls = vcControlPanel.querySelector(voiceControlsSelector);
        if (voiceControls) {
            createFakeDeafenButton();
        }
        else {
            setTimeout(createElements, 1000);
        }
    }
    else {
        setTimeout(createElements, 1000);
    }
}

module.exports = () => {
    return {
        start: () => {
            createFakeDeafenStyles();
            createElements();
        },
        stop: () => {
            const fakeDeafenButton = document.querySelector('button[aria-label="Fake Deafen"][type="button"]');
            if (fakeDeafenButton) {
                fakeDeafenButton.remove();
            }
            const fakeDeafenStyleSheet = document.getElementById('fake-deafen-styles');
            if (fakeDeafenStyleSheet) {
                fakeDeafenStyleSheet.remove();
            }
        }
    };
};
