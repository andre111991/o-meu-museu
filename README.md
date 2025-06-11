# O Meu Museu Virtual com WebAR

Este projeto é um museu virtual que combina uma experiência 3D navegável com recursos de Realidade Aumentada (AR).

## Configuração do AR

### Gerar os Marcadores AR

1. Visite o site AR.js Marker Training: https://ar-js-org.github.io/AR.js/three.js/examples/marker-training/examples/generator.html

2. Para cada pintura, gere um marcador:
   - Faça o upload da imagem da pintura
   - Defina o padrão como "Pattern Ratio: 0.75"
   - Clique em "Download marker"
   - Guarde o ficheiro .patt na pasta `assets/` com o nome correspondente

### Utilização dos Marcadores AR

1. Imprima o QR code gerado
2. No museu virtual, clique no botão "Entrar em AR"
3. Permita o acesso à câmara quando solicitado
4. Aponte a câmara para o QR code impresso
5. A pintura aparecerá em 3D, rodando sobre o marcador
6. Utilize os botões no ecrã para alternar entre as diferentes obras

## Estrutura do Projeto

```
o-meu-museu/
├── assets/
│   ├── floor-texture.jpg
│   ├── wall-marble.jpg
│   ├── textura-quadros.jpg
│   ├── monalisa.jpg
│   ├── grito.jpg
│   ├── venus.jpg
│   ├── david.jpg
│   └── pattern-not-louvre.patt
├── js/
│   ├── ar.js
│   └── vr.js
├── styles/
│   ├── ar.css
│   └── vr.css
├── ar.html
├── vr.html
└── README.md
```

## Características

- Navegação 3D imersiva em modo VR
- Experiência AR interativa com marcador único
- Alternância entre obras através de botões intuitivos
- Informações detalhadas sobre cada obra
- Animações suaves de rotação
- Interface responsiva e moderna
- Suporte para visualização em AR e VR

## Obras Apresentadas

- Mona Lisa (Leonardo da Vinci)
- O Grito (Edvard Munch)
- Vénus de Milo (Alexandros de Antioquia)
- David (Michelangelo)

## Tecnologias Utilizadas

- A-Frame 1.4.0
- AR.js
- HTML5
- CSS3
- JavaScript

## Como Utilizar

1. Modo VR:
   - Aceda à página inicial
   - Clique em "Entrar em VR"
   - Utilize WASD para se movimentar
   - Use o rato para olhar em redor
   - Aproxime-se das obras para ver detalhes

2. Modo AR:
   - Clique em "Entrar em AR"
   - Permita o acesso à câmara
   - Aponte para o marcador
   - Use os botões para mudar de obra
   - Observe a obra em 3D no seu espaço real