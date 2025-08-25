# Task
Generate a complete, professional documentation setup for ANY GitHub repository provided.

# Inputs (provide or auto-detect)
- repo_url: Full GitHub URL to the repository (e.g., https://github.com/<owner>/<repo>)
- owner, repo: Derive from repo_url when not provided.
- default_branch: Auto-detect via GitHub API; fallback: main, then master.
- description: Short summary of the project (auto-generate from repo metadata and files; allow override).
- demo_url, docs_url: Optional; omit the link if not provided.
- license_type: Auto-detect from existing LICENSE; fallback: MIT.
- contribution_guidelines: Optional notes; otherwise use defaults below.
- install_instructions, usage_examples: Auto-generate from manifests, scripts, and docs; allow override.
- depth_for_tree: Default 2 (limit folder tree depth).
- author_display_name: Use GitHub username (owner) unless overridden.

# Deliverables (return EXACTLY three files)
- README.md
- LICENSE
- CONTRIBUTING.md

Return them as separate code blocks using file headers:
- Use four backticks for Markdown files.
- Name each file with the name=... attribute as shown below.

# General Requirements
- Be concise, organized, and modern. Use emojis for section headers.
- Populate dynamic repo data (owner, repo, branch, counts) from the provided repo.
- If a section has no data, omit it rather than leaving placeholders.
- Use absolute links to the repo (not relative).
- Render all badges using Shields.io with style=for-the-badge.
- Keep line length reasonable (~100 chars) and use consistent heading levels.
- Keep README skimmable: strong first screen (title, badges, short pitch, quick links).
- Respect existing license; only create MIT if none detected.

# Detection Heuristics
Auto-detect these from the repository:
- Languages by file extensions and GitHub Linguist.
- Package managers and ecosystems:
  - JS/TS: package.json, pnpm-lock.yaml, yarn.lock, tsconfig.json
  - Python: pyproject.toml, requirements.txt, Pipfile
  - Go: go.mod
  - Rust: Cargo.toml
  - Java: pom.xml, build.gradle
  - C#/.NET: *.csproj, global.json
  - PHP: composer.json
  - Ruby: Gemfile
- Frameworks/libraries by dependency names (examples, non-exhaustive):
  - Web: React, Next.js, Vue, Nuxt, Svelte, Angular, Astro, Vite
  - Server: Express, NestJS, Koa, Fastify, Flask, Django, FastAPI, Spring Boot, Rails, Laravel, ASP.NET Core, Gin, Echo, Actix, Axum
  - Mobile/Desktop: React Native, Electron, Tauri, Flutter
  - Testing: Jest, Vitest, Mocha, PyTest, JUnit, RSpec, xUnit
- Databases/Queues by deps/config: MongoDB, PostgreSQL, MySQL, SQLite, Redis, RabbitMQ, Kafka, Prisma, Sequelize, TypeORM, Mongoose, SQLAlchemy
- DevOps/Infra: Dockerfile, docker-compose, Kubernetes manifests, Terraform, Ansible
- CI/CD and project hygiene: .github/workflows, pre-commit, eslint, prettier, husky, commitlint, semantic-release
- Cloud SDKs: AWS, GCP, Azure, Supabase, Firebase, Clerk, Auth0, Stripe, Sentry, OpenAI, LangChain
- CLI hints: presence of bin/, console_scripts, Makefile, npm scripts marked as start/build/test/dev.

# Badges
- Top badges (replace <owner> and <repo> dynamically):
  - ![GitHub License](https://img.shields.io/github/license/<owner>/<repo>?style=for-the-badge&color=brightgreen)
  - ![GitHub Stars](https://img.shields.io/github/stars/<owner>/<repo>?style=for-the-badge&color=yellow)
  - ![GitHub Forks](https://img.shields.io/github/forks/<owner>/<repo>?style=for-the-badge&color=blue)
  - ![Contributions Welcome](https://img.shields.io/badge/Contributions-Welcome-brightgreen?style=for-the-badge)
  - ![GitHub Issues](https://img.shields.io/github/issues/<owner>/<repo>?style=for-the-badge&color=red)
- Tech stack badges use this exact pattern (adjust label, logo, and color):
  - ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
  - Derive logos from Simple Icons names. Group badges by category.

# Folder Tree
- Render a compact tree of the repo (depth=N, default 2).
- Exclude common noise: node_modules, .git, .next, .cache, build, dist, .venv, venv, target, .terraform, .DS_Store.
- Include key config files and entry points.

# README.md Structure (exact order)
1. H1 Project Title: use repository name (humanize if needed).
2. Badges row (license, stars, forks, contributions, issues).
3. Short Description (1–3 sentences).
4. Quick Links (bulleted): Demo, Documentation, Report Issue, Contribute, Discussions (only if present).
5. Table of Contents.
6. ✨ Features.
7. 🧰 Tech Stack (badges grouped):
   - Languages
   - Frameworks/Libraries
   - Databases/Storage
   - DevOps/Infrastructure
   - Cloud/CI/CD/Monitoring
   - Tools/Utilities
8. 🚀 Installation
   - Prerequisites (versions, package managers, DBs, env vars).
   - Steps (copy-paste ready).
9. 🧪 Usage
   - CLI usage (if applicable): commands and examples.
   - API usage (if applicable): base URL, auth, example request/response.
   - UI usage (if applicable): how to run locally and login defaults.
10. 🗂 Project Structure (tree).
11. 🗺 Roadmap
   - Current
   - Planned (short bullets)
   - Future Vision
12. 🤝 Contributing (link to CONTRIBUTING.md).
13. 📄 License (link to LICENSE).
14. 🙏 Acknowledgements (top deps/services and inspirations).
15. Footer centered: Made with ❤ by <owner>.

# CONTRIBUTING.md Requirements
Include:
- How to fork and create a feature branch.
- Local setup, env, and running tests.
- Code style and linters (autodetect: eslint/prettier/black/ruff/gofmt/clang-format, etc).
- Commit message convention (Conventional Commits if no standard found).
- How to open issues (bug_report/feature_request templates if present).
- PR checklist (lint, tests, docs updated, screenshots for UI).
- Security disclosures path (SECURITY.md if present; else brief note).
- Maintainer review process.

# LICENSE
- If a LICENSE file exists, detect and replicate the same license with correct year and owner.
- If none exists, use MIT with current year and owner (personal or org).

# Output Format (return exactly three files)
- README.md (markdown)
- CONTRIBUTING.md (markdown)
- LICENSE (plain text)

Examples of file block wrappers you MUST use:

````markdown name=README.md
# <title> …
````

````markdown name=CONTRIBUTING.md
# Contributing …
````

```text name=LICENSE
MIT License …
```

# Quality Guardrails
- Validate links (repo URLs, issues, pulls, actions, releases).
- Avoid dead badges (only include what exists; e.g., Discussions only if enabled).
- Prefer versioned commands and explicit ports.
- Ensure commands are copy-paste runnable on macOS/Linux; add Windows notes if needed.
- Do not include placeholder TODOs; omit sections if unknown.

# Post-Generation Checks
- Does README first screen clearly explain what and why?
- Do install + usage steps succeed with just the repo and prerequisites?
- Are tech badges accurate and grouped?
- Are the three files present and self-consistent?

# Now Generate
Produce the three files as code blocks with the exact file headers described above.