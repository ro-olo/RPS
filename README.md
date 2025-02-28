# Rock Paper Scissors Game

A modern implementation of the classic Rock Paper Scissors game, featuring a clean UI and smooth animations.

## Features

- 🎮 Interactive gameplay with animated buttons
- 🎯 Score tracking system
- 🎨 Modern UI with hover and click effects
- ⌨️ Keyboard support (Enter key to progress)
- 🏆 Game end detection and victory/defeat animations
- 📱 Responsive design

## How to Play

1. Click "Play Round" or press Enter to start
2. Choose your move (Rock, Paper, or Scissors)
3. Watch the result and see if you won!
4. First to reach 5 points wins the game
5. Press Enter or click "Play Again" to start a new game

## Controls

- Mouse: Click on the buttons to make your choice
- Keyboard: Press Enter to start round or restart game
- Buttons light up and animate when interacted with

## Technical Details

Built using:
- HTML5
- SCSS (with 7-1 pattern architecture)
- Vanilla JavaScript (ES6+ with Class-based architecture)

### SCSS Architecture (7-1 Pattern)

```
styles/
├── abstracts/          # Variables, mixins, functions
│   ├── _variables.scss # Global variables
│   └── _mixins.scss   # Reusable mixins
├── base/               # Base styles
│   └── _reset.scss    # Reset and base styles
├── components/         # Reusable components
│   └── _buttons.scss  # Button styles
├── layout/            # Layout components
│   └── _game.scss    # Game container layout
├── pages/             # Page-specific styles
├── themes/            # Theme variations
├── vendors/           # Third-party styles
└── main.scss          # Main file that imports all modules
```

### Project Structure

```
RPS/
├── css/               # Compiled CSS output
│   └── style.css     # Compiled and minified CSS
├── images/           # Game assets
│   ├── rock.jpg
│   ├── paper.jpg
│   └── scissors.jpg
├── styles/           # SCSS source files (see above)
├── index.html        # Main game interface
├── javascript.js     # Game logic and controls
└── package.json      # Project dependencies and scripts
```

## Development

To work on this project:

1. Install dependencies:
```bash
npm install
```

2. Run SCSS compiler:
```bash
npm run sass
```

The SCSS compiler will watch for changes and automatically compile to CSS.

## Future Improvements

- Add sound effects
- Implement local storage for high scores
- Add multiplayer support
- Create different themes
- Add animation transitions between game states
- Implement responsive design for mobile devices

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
