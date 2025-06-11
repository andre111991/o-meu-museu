document.addEventListener('DOMContentLoaded', function() {
  const scene = document.querySelector('a-scene');
  const loadingScreen = document.querySelector('.loading-screen');

  scene.addEventListener('loaded', function () {
    loadingScreen.classList.add('fade-out');
    setTimeout(() => {
      loadingScreen.style.display = 'none';
    }, 500);
  });

  // Add interaction for paintings
  const paintings = document.querySelectorAll('.painting');
  paintings.forEach(painting => {
    painting.addEventListener('mouseenter', () => {
      // Add hover effect
    });
    painting.addEventListener('mouseleave', () => {
      // Remove hover effect
    });
    painting.addEventListener('click', () => {
      // Show painting details
    });
  });
});

// Painting info component
AFRAME.registerComponent('painting-info', {
  schema: {
    title: {type: 'string', default: ''},
    artist: {type: 'string', default: ''},
    year: {type: 'string', default: ''},
    description: {type: 'string', default: ''}
  },

  init: function() {
    // Create info panel
    const infoPanel = document.createElement('a-entity');
    infoPanel.setAttribute('visible', false);
    infoPanel.setAttribute('position', '0 2 0.1');

    // Background panel
    const background = document.createElement('a-plane');
    background.setAttribute('color', '#FFF');
    background.setAttribute('width', '2.5');
    background.setAttribute('height', '1.4');
    background.setAttribute('material', 'opacity: 0.9');
    infoPanel.appendChild(background);

    // Title text
    const titleText = document.createElement('a-text');
    titleText.setAttribute('value', this.data.title);
    titleText.setAttribute('color', '#000');
    titleText.setAttribute('position', '-0.9 0.5 0.01');
    titleText.setAttribute('width', '1.8');
    titleText.setAttribute('font', 'mozillavr');
    infoPanel.appendChild(titleText);

    // Artist text
    const artistText = document.createElement('a-text');
    artistText.setAttribute('value', `Artista: ${this.data.artist}`);
    artistText.setAttribute('color', '#000');
    artistText.setAttribute('position', '-0.9 0.3 0.01');
    artistText.setAttribute('width', '1.8');
    artistText.setAttribute('font', 'mozillavr');
    infoPanel.appendChild(artistText);

    // Year text
    const yearText = document.createElement('a-text');
    yearText.setAttribute('value', `Ano: ${this.data.year}`);
    yearText.setAttribute('color', '#000');
    yearText.setAttribute('position', '-0.9 0.1 0.01');
    yearText.setAttribute('width', '1.8');
    yearText.setAttribute('font', 'mozillavr');
    infoPanel.appendChild(yearText);

    // Description text
    const descText = document.createElement('a-text');
    descText.setAttribute('value', this.data.description);
    descText.setAttribute('color', '#000');
    descText.setAttribute('position', '-0.9 -0.3 0.01');
    descText.setAttribute('width', '1.8');
    descText.setAttribute('wrap-count', '30');
    descText.setAttribute('font', 'mozillavr');
    infoPanel.appendChild(descText);

    this.el.appendChild(infoPanel);
    this.infoPanel = infoPanel;

    // Add event listeners
    this.el.addEventListener('mouseenter', () => {
      this.infoPanel.setAttribute('visible', true);
    });

    this.el.addEventListener('mouseleave', () => {
      this.infoPanel.setAttribute('visible', false);
    });
  }
});

// Chandelier component
AFRAME.registerComponent('chandelier', {
  schema: {
    position: {type: 'vec3', default: {x: 0, y: 5.5, z: 0}},
    color: {type: 'string', default: '#333'},
    lightColor: {type: 'string', default: '#fff3c2'},
    lightIntensity: {type: 'number', default: 1.5}
  },

  init: function() {
    // Create chandelier structure
    const pole = document.createElement('a-cylinder');
    pole.setAttribute('position', {x: 0, y: 0, z: 0});
    pole.setAttribute('radius', 0.03);
    pole.setAttribute('height', 1);
    pole.setAttribute('color', this.data.color);

    const base = document.createElement('a-cylinder');
    base.setAttribute('position', {x: 0, y: -0.5, z: 0});
    base.setAttribute('radius', 0.15);
    base.setAttribute('height', 0.3);
    base.setAttribute('color', '#111');

    const light = document.createElement('a-entity');
    light.setAttribute('light', {
      type: 'spot',
      color: this.data.lightColor,
      intensity: this.data.lightIntensity,
      angle: 45,
      distance: 20,
      penumbra: 0.4,
      decay: 2,
      castShadow: true
    });
    light.setAttribute('position', {x: 0, y: -0.6, z: 0});
    light.setAttribute('rotation', '-90 0 0');

    // Create container entity and append all parts
    const container = document.createElement('a-entity');
    container.setAttribute('position', this.data.position);
    container.appendChild(pole);
    container.appendChild(base);
    container.appendChild(light);

    this.el.appendChild(container);
  }
});