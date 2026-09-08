# Pomodoro Timer

A modern, productivity-focused Pomodoro Timer built with React. This application helps you manage your work and break time effectively using the Pomodoro Technique.

## Features

- **25-Minute Work Session**: Focused work timer with a clean, distraction-free interface
- **5-Minute Break Timer**: Quick break timer to recharge between sessions
- **Auto-Routing**: Automatically transitions from work session to break timer when completed
- **Sound Effects**: 
  - Click sounds on button interactions for tactile feedback
  - Ring notification sound when timer completes
- **Clean UI**: Minimalist, responsive design for better focus
- **Real-time Display**: Clear, large timer display showing minutes and seconds
- **Start/Pause/Reset Controls**: Full control over your timer sessions

## Technologies Used

- **React** - Frontend library
- **React Hooks** - State management with useState and useEffect
- **React Router DOM** - Client-side routing between pages
- **HTML5 Audio** - Sound effects and notifications

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Steps
1. Clone the repository:
```bash
git clone <https://github.com/Syed-Nalain-Abbas143/Pomodoro-Timer.git>
cd "Pomodoro Timer"
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to:
http://localhost:3000/

## Usage

### Starting a Work Session
1. Click the **Start** button to begin the 25-minute work timer
2. Focus on your tasks without distractions
3. Use **Pause** to temporarily stop the timer if needed

### Break Timer
1. When the work session completes, you'll automatically transition to the 5-minute break page
2. The ring sound will notify you that it's time to take a break
3. After the break timer completes, manually navigate back to start a new work session or click the provided button

## Customization

### Adjust Timer Durations

Edit the timer durations in your component files:

**For Work Session:**
```javascript
const WORK_DURATION = 25 * 60; // in seconds
```

**For Break Session:**
```javascript
const BREAK_DURATION = 5 * 60; // in seconds
```

### Add Custom Sounds

Replace the audio files in `src/assets/sounds/` with your own:
- `click.mp3` - For button interactions
- `ring.mp3` - For timer completion

Update the paths in your SoundManager component accordingly.

## Features Breakdown

### React Hooks

- **useState**: Manages timer state (time remaining, isRunning, etc.)
- **useEffect**: Handles timer countdown interval and cleanup

### React Router DOM

- Routes between `/work` and `/break` pages
- Automatic navigation when timer completes
- Navigation buttons for manual page switching

### Audio Management

- Click sounds provide immediate feedback on interactions
- Ring sound alerts you when a session is complete
- Audio files are played through a centralized sound manager

## Tips for Effective Use

1. **Minimize Distractions**: Close notifications and irrelevant tabs during work sessions
2. **Use During Deep Work**: Best for focused, uninterrupted work tasks
3. **Take Real Breaks**: Step away from your screen during break time
4. **Experiment**: Adjust timer durations based on your productivity patterns
5. **Track Sessions**: Keep a log of completed sessions for motivation

## Acknowledgments

- Built with [React](https://reactjs.org/)
- Routing powered by [React Router](https://reactrouter.com/)
- Inspired by the Pomodoro Technique by Francesco Cirillo

---

**Happy Productivity!**
