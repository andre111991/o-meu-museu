// Register a component to handle the painting rotation and switching
AFRAME.registerComponent('painting-handler', {
  init: function() {
      this.paintings = [
          './assets/monalisa.jpg',
          './assets/grito.jpg',
          './assets/venus.jpg',
          './assets/david.jpg'
      ];
      this.currentPainting = 0;

      // Create the front painting plane
      const paintingEl = document.createElement('a-plane');
      paintingEl.setAttribute('rotation', '0 0 0');
      paintingEl.setAttribute('position', '0 0 0');
      paintingEl.setAttribute('width', '1');
      paintingEl.setAttribute('height', '1.5');
      paintingEl.setAttribute('material', {
          src: this.paintings[0],
          side: 'double'
      });

      // Add a small description text that's visible from the back
      const textEl = document.createElement('a-text');
      textEl.setAttribute('value', 'Mona Lisa');
      textEl.setAttribute('align', 'center');
      textEl.setAttribute('position', '0 -0.8 -0.01');
      textEl.setAttribute('rotation', '0 180 0');
      textEl.setAttribute('scale', '0.5 0.5 0.5');
      textEl.setAttribute('color', '#000000');
      paintingEl.appendChild(textEl);

      this.el.appendChild(paintingEl);
      this.paintingEl = paintingEl;
      this.textEl = textEl;

      // Set up rotation animation
      this.rotationSpeed = 0.5;
      this.isRotating = true;

      // Method to change painting
      this.changePainting = (index) => {
          if (index < 0 || index >= this.paintings.length) return;

          this.currentPainting = index;
          const paintingNames = ['Mona Lisa', 'The Scream', 'Venus', 'David'];

          // Update the painting texture
          this.paintingEl.setAttribute('material', {
              src: this.paintings[this.currentPainting],
              side: 'double'
          });

          // Update the text
          this.textEl.setAttribute('value', paintingNames[index]);

          // Update button states
          const buttons = document.querySelectorAll('.painting-button');
          buttons.forEach((btn, i) => {
              if (i === index) {
                  btn.style.backgroundColor = '#333';
                  btn.style.color = 'white';
              } else {
                  btn.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
                  btn.style.color = '#333';
              }
          });

          console.log('Switched to painting:', paintingNames[index]);
      };

      // Set up buttons for each painting
      const buttonContainer = document.getElementById('buttonContainer');
      const paintingNames = ['Mona Lisa', 'The Scream', 'Venus', 'David'];

      // Clear any existing buttons
      buttonContainer.innerHTML = '';

      paintingNames.forEach((name, index) => {
          const button = document.createElement('button');
          button.textContent = name;
          button.className = 'painting-button';
          if (index === this.currentPainting) {
              button.style.backgroundColor = '#333';
              button.style.color = 'white';
          }
          button.onclick = () => this.changePainting(index);
          buttonContainer.appendChild(button);
      });
  },

  tick: function(time, deltaTime) {
      if (this.isRotating) {
          const currentRotation = this.paintingEl.getAttribute('rotation');
          this.paintingEl.setAttribute('rotation', {
              x: currentRotation.x,
              y: (currentRotation.y + this.rotationSpeed) % 360,
              z: currentRotation.z
          });
      }
  }
});