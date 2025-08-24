# 🔍 DEV-LENS

<div align="center">

![GitHub License]()
![GitHub Stars](https://img.shields.io/github/stars/H0NEYP0T-466/DEV-LENS?style=for-the-badge&color=yellow)
![GitHub Forks](https://img.shields.io/github/forks/H0NEYP0T-466/DEV-LENS?style=for-the-badge&color=blue)
![Contributions Welcome](https://img.shields.io/badge/Contributions-Welcome-brightgreen?style=for-the-badge)
![GitHub Issues](https://img.shields.io/github/issues/H0NEYP0T-466/DEV-LENS?style=for-the-badge&color=red)

</div>

**DEV-LENS** is a cutting-edge AI-powered code review platform 🚀 that revolutionizes the way developers analyze, optimize, and improve their code. Built with modern web technologies and powered by Google's Gemini AI, DEV-LENS provides intelligent code analysis, error detection, and automated suggestions to enhance code quality and developer productivity.

<div align="center">

[🚀 Live Demo](https://dev-lens-mu.vercel.app/) • [📖 Documentation](#-table-of-contents) • [🤝 Contributing](#-contributing) • [🐛 Report Bug](https://github.com/H0NEYP0T-466/DEV-LENS/issues)

</div>

---

## 📚 Table of Contents

- [🔧 Installation](#-installation)
- [🎯 Usage](#-usage)
- [✨ Features](#-features)
- [📂 Folder Structure](#-folder-structure)
- [🤝 Contributing](#-contributing)
- [📜 License](#-license)
- [🗺️ Roadmap](#️-roadmap)
- [🙏 Acknowledgements](#-acknowledgements)

---

## 🔧 Installation

### Prerequisites

- **Node.js** (v16.0.0 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/H0NEYP0T-466/DEV-LENS.git
   cd DEV-LENS
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

4. **Set up environment variables**
   ```bash
   # Create .env file in backend directory
   cd backend
   echo "geminiApiKey=your_gemini_api_key_here" > .env
   ```

5. **Start the development servers**
   ```bash
   # Terminal 1: Start backend server
   cd backend
   npm start

   # Terminal 2: Start frontend development server
   cd ..
   npm run dev
   ```

6. **Open your browser**
   - Frontend: `http://localhost:5173`
   - Backend API: `http://localhost:8000`

---

## 🎯 Usage

### Basic Code Review Workflow

1. **Launch the Application**
   - Navigate to the DEV-LENS interface
   - You'll see a clean, intuitive code review dashboard

2. **Submit Your Code**
   ```javascript
   // Example: Paste your code in the input area
   function calculateSum(a, b) {
     return a + b;
   }
   ```

3. **Get AI-Powered Analysis**
   - Click "Review Code" to trigger AI analysis
   - Receive comprehensive feedback including:
     - ✅ Code quality assessment
     - ❌ Bug detection and fixes
     - ⚠️ Performance optimization suggestions
     - 🔧 Best practice recommendations

4. **Review and Implement**
   - Review the AI-generated suggestions
   - Apply recommended improvements
   - Iterate and refine your code

### API Usage

```javascript
// Example API call for code review
const response = await fetch('http://localhost:8000/reveiw', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    prompt: 'Your code here...'
  })
});

const analysis = await response.json();
console.log(analysis);
```

---

## ✨ Features

### 🤖 AI-Powered Analysis
- **Smart Code Review**: Leverages Google Gemini AI for intelligent code analysis
- **Multi-Language Support**: Supports JavaScript, Python, Java, C++, HTML, CSS, and more
- **Real-time Feedback**: Instant code analysis and suggestions

### 🔍 Comprehensive Detection
- **Bug Detection**: Identifies logical errors, syntax issues, and potential runtime problems
- **Security Analysis**: Flags security vulnerabilities and unsafe practices
- **Performance Optimization**: Suggests improvements for better code efficiency
- **Best Practices**: Enforces coding standards and conventions

### 🎨 User Experience
- **Intuitive Interface**: Clean, responsive design for seamless interaction
- **Real-time Rendering**: Markdown-based response rendering for clear feedback
- **Multi-Panel Layout**: Side-by-side code input and analysis output
- **Loading States**: Visual feedback during analysis processing

### 🛠️ Technical Excellence
- **Modern Tech Stack**: Built with React, Node.js, Express, and Vite
- **API Integration**: Seamless Google Gemini AI integration
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Error Handling**: Robust error management and user feedback

---

## 📂 Folder Structure

```
DEV-LENS/
├── 📁 Router/                    # Application routing components
│   └── Router.jsx
├── 📁 backend/                   # Backend API server
│   ├── 📁 controller/
│   │   └── controller.js         # API route handlers
│   ├── 📁 model/
│   │   └── ai_model.js          # AI integration logic
│   ├── .gitignore
│   ├── index.js                 # Express server entry point
│   ├── package.json             # Backend dependencies
│   └── package-lock.json
├── 📁 public/                    # Static assets
│   ├── favi.jpg                 # Favicon
│   └── vite.svg
├── 📁 src/                       # Frontend source code
│   ├── 📁 components/
│   │   ├── Nav_bar.css          # Navigation styles
│   │   ├── Nav_bar.jsx          # Navigation component
│   │   ├── Page.css             # Landing page styles
│   │   ├── Page.jsx             # Landing page component
│   │   ├── Reveiw_Page.css      # Review interface styles
│   │   └── Reveiw_page.jsx      # Code review component
│   ├── App.css                  # Main app styles
│   ├── App.jsx                  # Root application component
│   ├── index.css                # Global styles
│   └── main.jsx                 # Application entry point
├── .gitignore                   # Git ignore rules
├── README.md                    # Project documentation
├── eslint.config.js             # ESLint configuration
├── index.html                   # HTML template
├── package.json                 # Frontend dependencies
├── package-lock.json
└── vite.config.js              # Vite build configuration
```

---

## 🤝 Contributing

We welcome contributions from developers of all skill levels! 🌟 Here's how you can help make DEV-LENS even better:

### 🚀 Getting Started

1. **Fork the repository** on GitHub
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes** and test thoroughly
4. **Commit your changes**: `git commit -m 'Add amazing feature'`
5. **Push to the branch**: `git push origin feature/amazing-feature`
6. **Open a Pull Request** with a detailed description

### 📋 Contribution Guidelines

- 🐛 **Bug Reports**: Use the issue template to report bugs
- 💡 **Feature Requests**: Propose new features through issues
- 📝 **Code Style**: Follow the existing code style and ESLint rules
- ✅ **Testing**: Ensure your changes don't break existing functionality
- 📖 **Documentation**: Update documentation for new features

### 🔧 Development Setup

```bash
# Install dependencies
npm install
cd backend && npm install

# Run development servers
npm run dev          # Frontend
cd backend && npm start  # Backend

# Run linting
npm run lint

# Build for production
npm run build
```

### 🎯 Areas for Contribution

- 🔧 Backend API improvements
- 🎨 UI/UX enhancements
- 🤖 AI model optimization
- 📱 Mobile responsiveness
- 🔒 Security enhancements
- 📚 Documentation improvements

---

## 📜 License

This project is licensed under the **MIT License** - see the full license below:

```
MIT License

Copyright (c) 2024 H0NEYP0T-466

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 🗺️ Roadmap

### 🎯 Current Phase (v1.0)
- [x] ✅ AI-powered code review engine
- [x] ✅ React-based frontend interface
- [x] ✅ Express.js backend API
- [x] ✅ Google Gemini AI integration
- [x] ✅ Multi-language code support

### 🚀 Next Phase (v1.1)
- [ ] 🔐 User authentication and profiles
- [ ] 📊 Code review history and analytics
- [ ] 🏷️ Code categorization and tagging
- [ ] 📱 Progressive Web App (PWA) support
- [ ] 🌙 Dark/light theme toggle

### 🌟 Future Vision (v2.0)
- [ ] ☁️ Cloud synchronization
- [ ] 👥 Team collaboration features
- [ ] 🔄 Version control integration
- [ ] 📈 Advanced analytics dashboard
- [ ] 🤖 Custom AI model training
- [ ] 🔌 IDE plugin support

### 🎮 Community Requests
- [ ] 📚 Code snippet library
- [ ] 🏆 Gamification elements
- [ ] 🎓 Educational tutorials
- [ ] 🌐 Internationalization (i18n)

---

## 🙏 Acknowledgements

### 🤝 Special Thanks

- **Google AI** for providing the powerful Gemini AI API
- **React Team** for the amazing frontend framework
- **Vite** for the lightning-fast build tool
- **Express.js** for the robust backend framework
- **Open Source Community** for inspiration and support

### 🛠️ Built With

- [React](https://reactjs.org/) - Frontend framework
- [Node.js](https://nodejs.org/) - Backend runtime
- [Express.js](https://expressjs.com/) - Web framework
- [Google Gemini AI](https://ai.google.dev/) - AI integration
- [Vite](https://vitejs.dev/) - Build tool
- [Axios](https://axios-http.com/) - HTTP client
- [React Router](https://reactrouter.com/) - Navigation
- [GSAP](https://greensock.com/gsap/) - Animations

### 🌟 Inspiration

This project was inspired by the need for intelligent, accessible code review tools that help developers improve their skills and code quality through AI-powered assistance.

---

<div align="center">

**Made with ❤️ by [H0NEYP0T-466](https://github.com/H0NEYP0T-466)**

⭐ Star this repository if you found it helpful!

[🚀 Live Demo](https://dev-lens-mu.vercel.app/) • [📖 Documentation](#-table-of-contents) • [🤝 Contributing](#-contributing) • [🐛 Report Bug](https://github.com/H0NEYP0T-466/DEV-LENS/issues)

</div>
