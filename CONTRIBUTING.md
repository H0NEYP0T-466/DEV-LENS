# Contributing to DEV-LENS

Thank you for your interest in contributing to DEV-LENS! We welcome contributions from developers of all skill levels. This guide will help you get started with contributing to our AI-powered code review platform.

## 🚀 Getting Started

### Fork and Clone

1. **Fork the repository** on GitHub by clicking the "Fork" button
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/DEV-LENS.git
   cd DEV-LENS
   ```
3. **Add the original repository** as upstream:
   ```bash
   git remote add upstream https://github.com/H0NEYP0T-466/DEV-LENS.git
   ```

### Create a Feature Branch

```bash
git checkout -b feature/your-feature-name
```

Use descriptive branch names like:
- `feature/add-python-support`
- `bugfix/fix-api-timeout`
- `docs/update-installation-guide`

## 🛠️ Local Development Setup

### Prerequisites

- **Node.js** v16.0.0 or higher
- **npm** package manager
- **Git**
- **Google Gemini API Key** (for AI functionality)

### Environment Setup

1. **Install dependencies**:
   ```bash
   # Frontend dependencies
   npm install
   
   # Backend dependencies
   cd backend
   npm install
   cd ..
   ```

2. **Create environment file**:
   ```bash
   cd backend
   cp .env.example .env  # If available, otherwise create manually
   echo "geminiApiKey=your_api_key_here" > .env
   ```

3. **Start development servers**:
   ```bash
   # Terminal 1: Backend server
   cd backend
   npm start
   
   # Terminal 2: Frontend server
   cd ..
   npm run dev
   ```

### Running Tests

Currently, the project uses manual testing. When running your changes:

1. **Test the frontend** at `http://localhost:5173`
2. **Test the API** at `http://localhost:8000`
3. **Verify all features** work as expected
4. **Test on different browsers** (Chrome, Firefox, Safari)
5. **Test responsive design** on mobile devices

## 📝 Code Style and Standards

### ESLint Configuration

We use ESLint for code quality and consistency:

```bash
# Lint your code before committing
npm run lint

# Auto-fix linting issues where possible
npm run lint -- --fix
```

### Code Style Guidelines

- **JavaScript**: Use ES6+ features, arrow functions where appropriate
- **React**: Use functional components with hooks
- **CSS**: Use consistent naming conventions and organize styles logically
- **File Naming**: Use descriptive names, follow existing patterns
- **Comments**: Add comments for complex logic, avoid obvious comments

### Code Quality Checklist

- [ ] Code follows existing style patterns
- [ ] No console.log statements in production code
- [ ] Proper error handling implemented
- [ ] Components are properly modularized
- [ ] No hardcoded values (use constants/config)
- [ ] Code is readable and well-commented

## 💻 Commit Message Convention

We follow the Conventional Commits specification:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Types

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect code meaning (white-space, formatting)
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools

### Examples

```bash
feat: add Python syntax highlighting support
fix: resolve API timeout issues on large code files
docs: update installation instructions for Windows
style: format code according to ESLint rules
refactor: extract AI response parsing logic into separate module
```

## 🐛 Reporting Issues

### Bug Reports

When reporting bugs, please include:

- **Description**: Clear description of the issue
- **Steps to Reproduce**: Detailed steps to reproduce the problem
- **Expected Behavior**: What you expected to happen
- **Actual Behavior**: What actually happened
- **Environment**: Browser, OS, Node.js version
- **Screenshots**: If applicable, add screenshots
- **Code Sample**: Minimal code that reproduces the issue

### Feature Requests

For feature requests, provide:

- **Problem Statement**: What problem does this solve?
- **Proposed Solution**: How should this feature work?
- **Alternatives**: Other solutions you've considered
- **Use Cases**: Real-world scenarios where this would be helpful

## 🔍 Pull Request Process

### Before Submitting

- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex logic
- [ ] Documentation updated if needed
- [ ] Manual testing performed
- [ ] No conflicts with main branch

### PR Checklist

- [ ] **Title**: Clear, descriptive title
- [ ] **Description**: Explains what changes were made and why
- [ ] **Type**: Bug fix, feature, documentation, etc.
- [ ] **Testing**: How the changes were tested
- [ ] **Screenshots**: For UI changes, include before/after screenshots
- [ ] **Breaking Changes**: Note any breaking changes
- [ ] **Dependencies**: List any new dependencies added

### Review Process

1. **Automated Checks**: Ensure all automated checks pass
2. **Code Review**: At least one maintainer will review your code
3. **Testing**: Changes will be tested in different environments
4. **Feedback**: Address any feedback from reviewers
5. **Merge**: Once approved, maintainers will merge your PR

## 🔒 Security

### Reporting Security Issues

**Do not** report security vulnerabilities through public GitHub issues.

Instead, please send an email to the maintainers with:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)

### Security Guidelines

- Never commit API keys, passwords, or sensitive data
- Sanitize all user inputs
- Use HTTPS for all external requests
- Keep dependencies up to date
- Follow OWASP security practices

## 🎯 Areas for Contribution

We particularly welcome contributions in these areas:

### Frontend
- **UI/UX improvements**: Better user interface and experience
- **Mobile responsiveness**: Improved mobile support
- **Accessibility**: Better accessibility features
- **Performance**: Frontend optimization

### Backend
- **API improvements**: Better error handling, validation
- **Performance**: Optimization and caching
- **Security**: Enhanced security measures
- **Documentation**: API documentation

### AI/ML
- **Model integration**: Support for additional AI models
- **Prompt engineering**: Better prompts for code analysis
- **Language support**: Extended programming language support
- **Analysis quality**: Improved analysis accuracy

### DevOps
- **CI/CD**: Automated testing and deployment
- **Docker**: Containerization improvements
- **Monitoring**: Application monitoring and logging
- **Performance**: Infrastructure optimization

## 📞 Getting Help

- **GitHub Discussions**: Ask questions and discuss ideas
- **Issues**: Report bugs and request features
- **Discord/Slack**: Join our community (if available)
- **Email**: Contact maintainers directly for sensitive matters

## 📜 Code of Conduct

We are committed to providing a welcoming and inclusive experience for everyone. We expect all contributors to:

- Be respectful and considerate
- Welcome newcomers and help them get started
- Be patient with questions and mistakes
- Focus on constructive feedback
- Respect different viewpoints and experiences

## 🎉 Recognition

Contributors will be recognized through:

- **GitHub Contributors**: Listed in the repository
- **Release Notes**: Mentioned in release documentation
- **Social Media**: Highlighted on project social accounts
- **README**: Featured in acknowledgements section

Thank you for contributing to DEV-LENS! Together, we're building better tools for code review and developer productivity.

---

**Questions?** Feel free to reach out by opening an issue or contacting the maintainers directly.