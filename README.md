# ✦ Online Draw

> A modern, elegant and interactive random draw platform built with pure HTML, CSS and JavaScript.

**Online Draw** is a lightweight web application designed to make random draws simple, fair and visually engaging. Users can add participants, manage the list and randomly select a winner through an animated drawing experience.

The project was created with a strong focus on **modern UI design, responsiveness, usability and smooth interactions**, without relying on frameworks.

---

## ✨ Features

* 🎲 Random winner selection
* 👥 Add and remove participants
* 🧹 Clear the entire participant list
* 🔢 Real-time participant counter
* 🎉 Animated winner screen with confetti
* ✨ Modern glassmorphism interface
* 🌌 Animated background with particles and glow effects
* 🌍 Language selector
* 🇺🇸 English interface
* 🇧🇷 Brazilian Portuguese interface
* 📱 Fully responsive design
* ⌨️ Add participants using the `Enter` key
* 🔒 Equal chance for every participant
* ⚡ No backend required

---

## 🛠️ Technologies Used

### HTML5

Used to build the application's semantic structure and organize the interface into reusable sections.

### CSS3

Used to create the complete visual experience, including:

* Glassmorphism
* Gradients
* Responsive layouts
* Animations
* Transitions
* Glow effects
* Background grid
* Floating particles
* Custom buttons
* Winner animations
* Mobile adaptation

### JavaScript

Used to control the application's functionality and interactions, including:

* Participant management
* Random winner selection
* Input validation
* Language translation
* Dynamic DOM manipulation
* Drawing animation
* Confetti generation
* Interactive UI states

---

## 🌐 Internationalization

Online Draw includes a built-in language system that allows the interface to be switched between:

* 🇺🇸 **English**
* 🇧🇷 **Português (Brasil)**

The translation system was implemented using JavaScript, allowing interface texts and input placeholders to dynamically change without reloading the page.

---

## 🎨 Design

The interface was designed around a modern dark aesthetic with purple and pink gradients.

The visual system combines:

* Dark background
* Glassmorphism cards
* Purple neon glow
* Subtle grid patterns
* Floating particles
* Smooth transitions
* Minimal typography
* Responsive components

The goal was to create an interface that feels more like a modern SaaS product than a traditional randomizer website.

---

## 📂 Project Structure

```text
Online-Draw/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### `index.html`

Contains the complete structure of the application, including:

* Header
* Language selector
* Hero section
* Participant input
* Participant list
* Draw button
* Winner screen
* Footer

### `style.css`

Contains the entire visual system of the project:

* Layout
* Colors
* Typography
* Responsive design
* Animations
* Glass effects
* Background effects
* Buttons
* Cards
* Winner screen

### `script.js`

Controls the application's behavior:

* Adding participants
* Removing participants
* Clearing participants
* Selecting the winner
* Drawing animation
* Confetti
* Language switching
* Input validation
* Dynamic interface updates

---

## 🚀 How to Run

No installation or dependencies are required.

### 1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/online-draw.git
```

### 2. Open the project

Enter the project folder:

```bash
cd online-draw
```

### 3. Run

Simply open:

```text
index.html
```

in your browser.

That's it.

The application runs entirely on the client side.

---

## 💡 How It Works

The user enters the names of the participants and adds them to the draw.

Each participant is stored in a JavaScript array.

When the draw starts, the application generates a random index using JavaScript's `Math.random()` and selects the corresponding participant.

The selected participant is then displayed in a dedicated winner screen with an animated visual effect.

Conceptually:

```javascript
const winner =
    participants[
        Math.floor(
            Math.random() * participants.length
        )
    ];
```

This allows every participant in the current list to have an equal probability of being selected by the application's random selection logic.

---

## 📱 Responsive Design

Online Draw was designed to work across different screen sizes.

The interface adapts to:

* 💻 Desktop
* 🖥️ Large monitors
* 📱 Mobile devices
* 📲 Tablets

Responsive CSS media queries adjust spacing, typography, inputs and buttons according to the available screen width.

---

## 🔐 Privacy

Online Draw does not require:

* Account creation
* Login
* Personal information
* Database
* Server
* External API

Participants are handled locally in the browser while the page is open.

---

## 📌 Future Improvements

Possible future versions may include:

* 💾 LocalStorage support
* 📋 Import participants from `.txt` or `.csv`
* 📤 Export draw results
* 🔗 Shareable draw links
* 🏆 Draw history
* 🎨 Custom themes
* 🌐 Additional languages
* ⚙️ Custom draw settings
* 🎵 Optional sound effects
* 🌓 Additional visual themes

---

## 👨‍💻 Author

Developed by **Davi**.

A project created to practice and demonstrate skills in:

* HTML
* CSS
* JavaScript
* Responsive Web Design
* DOM Manipulation
* UI/UX
* Front-End Development

---

## 📄 License

This project is available for educational and personal use.

If you use or modify the project, giving credit to the original author is appreciated.

---

<p align="center">

**✦ Online Draw — Let fate choose.**

Made with HTML, CSS & JavaScript by **Davi**.

</p>
