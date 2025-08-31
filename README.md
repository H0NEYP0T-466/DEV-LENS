# DEV-LENS

![GitHub License](https://img.shields.io/github/license/H0NEYP0T-466/DEV-LENS?style=for-the-badge&color=brightgreen)
![GitHub Stars](https://img.shields.io/github/stars/H0NEYP0T-466/DEV-LENS?style=for-the-badge&color=yellow)
![GitHub Forks](https://img.shields.io/github/forks/H0NEYP0T-466/DEV-LENS?style=for-the-badge&color=blue)
![Contributions Welcome](https://img.shields.io/badge/Contributions-Welcome-brightgreen?style=for-the-badge)
![GitHub Issues](https://img.shields.io/github/issues/H0NEYP0T-466/DEV-LENS?style=for-the-badge&color=red)

A cutting-edge AI-powered code review platform that revolutionizes the way developers analyze, optimize, and improve their code. Built with modern web technologies and powered by Google's Gemini AI, DEV-LENS provides intelligent code analysis, error detection, and automated suggestions to enhance code quality and developer productivity.

• [🚀 Live Demo](https://dev-lens-mu.vercel.app/)
• [📖 Documentation](#table-of-contents)
• [🐛 Report Issue](https://github.com/H0NEYP0T-466/DEV-LENS/issues)
• [🤝 Contribute](#-contributing)

## Table of Contents

- [✨ Features](#-features)
- [🧰 Tech Stack](#-tech-stack)
- [🚀 Installation](#-installation)
- [🧪 Usage](#-usage)
- [🗂 Project Structure](#-project-structure)
- [🗺 Roadmap](#-roadmap)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [🙏 Acknowledgements](#-acknowledgements)

## ✨ Features

- **🤖 AI-Powered Analysis**: Leverages Google's Gemini AI for intelligent code review and analysis
- **🔍 Multi-Language Support**: Supports JavaScript, Python, Java, C++, and more programming languages
- **⚡ Real-time Feedback**: Instant code analysis and suggestions as you paste your code
- **🐛 Bug Detection**: Identifies logical errors, potential runtime issues, and code smells
- **🔒 Security Analysis**: Highlights security vulnerabilities and unsafe coding practices
- **📈 Performance Optimization**: Spots inefficient patterns and suggests performance improvements
- **🎨 Modern UI**: Clean, responsive interface that works on desktop and mobile devices
- **📋 Copy-Friendly Output**: Easy-to-copy suggestions and formatted recommendations
- **🚀 Fast Processing**: Optimized for quick analysis and response times
- **📚 Best Practices**: Enforces coding standards and industry best practices

## 🧰 Tech Stack

### Languages
![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

### Frameworks/Libraries
![React](https://img.shields.io/badge/React-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Express.js](https://img.shields.io/badge/Express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/Vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

### Cloud/AI Services
![Google AI](https://img.shields.io/badge/Google%20Gemini-8E75B2?style=for-the-badge&logo=googlegemini&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

### Tools/Utilities
![Node.js](https://img.shields.io/badge/Node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-%23000000.svg?style=for-the-badge&logo=greensock&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-%235A29E4.svg?style=for-the-badge&logo=axios&logoColor=white)

## 🚀 Installation

### Prerequisites

- **Node.js** (v16.0.0 or higher)
- **npm** package manager
- **Git** for version control
- **Google Gemini API Key** (for AI functionality)

### Steps

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

## 🧪 Usage

### UI Usage

1. **Navigate to the application** at `http://localhost:5173`
2. **Paste your code** into the text area on the main page
3. **Click "Review Code"** to get AI-powered analysis
4. **Review the feedback** including bugs, optimizations, and security suggestions
5. **Copy and implement** the suggested improvements

### API Usage

**Base URL**: `http://localhost:8000`

**Endpoint**: `POST /reveiw`

**Request Body**:
```json
{
  "code": "your code here"
}
```

**Example Request**:
```bash
curl -X POST http://localhost:8000/reveiw \
  -H "Content-Type: application/json" \
  -d '{"code": "function add(a, b) { return a + b; }"}'
```

**Response**:
```json
{
  "analysis": "AI-generated code review and suggestions"
}
```

## 🗂 Project Structure

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
├── 📁 docs/                      # Documentation files
│   └── documentation-generator-prompt.md
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
├── LICENSE                      # MIT License
├── README.md                    # Project documentation
├── eslint.config.js             # ESLint configuration
├── index.html                   # HTML template
├── package.json                 # Frontend dependencies
├── package-lock.json
└── vite.config.js              # Vite build configuration
```

## 🗺 Roadmap

### Current
- ✅ AI-powered code review using Google Gemini
- ✅ Multi-language support
- ✅ Responsive web interface
- ✅ Real-time code analysis

### Planned
- 🔄 Integration with popular IDEs (VS Code, JetBrains)
- 🔄 Support for additional AI models (OpenAI, Claude)
- 🔄 Code diff visualization
- 🔄 Team collaboration features
- 🔄 Performance metrics dashboard

### Future Vision
- 🌟 GitHub/GitLab integration for PR reviews
- 🌟 Custom rule configuration
- 🌟 Code quality scoring system
- 🌟 Advanced security vulnerability scanning
- 🌟 Machine learning model training on team codebases

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details on how to submit pull requests, report issues, and contribute to the project.

## 📄 License

This project is licensed under the [MIT License](LICENSE) - see the LICENSE file for details.

## 🙏 Acknowledgements

### Dependencies
- **Google Gemini AI** - For providing powerful AI capabilities
- **React** - For the robust frontend framework
- **Vite** - For fast development and build tooling
- **Express.js** - For the lightweight backend framework
- **GSAP** - For smooth animations and interactions

### Inspiration
This project was inspired by the need for intelligent, accessible code review tools that help developers improve their skills and code quality through AI-powered assistance.

---

<div align="center">

**Made with ❤️ by [H0NEYP0T-466](https://github.com/H0NEYP0T-466)**

</div>