// https://github.com/mdn/web-components-examples/blob/master/popup-info-box-external-stylesheet/main.js

class PopUpInfo extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });

    const wrapper = document.createElement('span');
    wrapper.setAttribute('class', 'wrapper');

    const icon = document.createElement('span');
    icon.setAttribute('class', 'icon');
    icon.setAttribute('tabindex', 0); // Tabキーによるフォーカスの移動順序を指定する属性

    const info = document.createElement('span');
    info.setAttribute('class', 'info');
 
    const text = this.getAttribute('data-text');
    info.textContent = text;

    let imgUrl;
    if (this.hasAttribute('img')) {
      imgUrl = this.getAttribute('img');
    } else {
      imgUrl = 'img/default.png';
    }

    const img = document.createElement('img');
    img.src = imgUrl;
    icon.appendChild(img);

    switch (imgUrl) {
      case '../img/alt.png':
        info.style.backgroundColor = '#67cebf';
        break;
      case '../img/alt_danger.png':
        info.style.backgroundColor = '#fee';
        break;
      case '../img/alt_success.png':
        info.style.backgroundColor = '#efb';
        break;
      default:
        info.style.backgroundColor = 'white';
    }

    // Apply external styles to the shadow dom
    const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    linkElem.setAttribute('href', 'style_link.css');

    shadow.appendChild(linkElem);
    shadow.appendChild(wrapper);
    wrapper.appendChild(icon);
    wrapper.appendChild(info);
  }
}

// Define the new element
customElements.define('popup-info', PopUpInfo);
