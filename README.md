# Portfolio

**Software Engineer Portfolio**
*Showcasing expertise in defense, DevOps, and scenario system design.*

## Table of Contents

- [Portfolio](#portfolio)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Tech Stack](#tech-stack)
  - [Project Structure](#project-structure)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running the Development Server](#running-the-development-server)
  - [Adding a New Micro Project](#adding-a-new-micro-project)
  - [CI/CD Pipeline](#cicd-pipeline)
  - [Branching and Contribution Guidelines](#branching-and-contribution-guidelines)
  - [Environment Variables](#environment-variables)
  - [License](#license)

## Overview

This portfolio serves as a central hub to demonstrate my technical skills and projects. Each micro project highlights specific competencies in areas such as:

- Solution architecture
- Kubernetes and containerization
- CI/CD pipelines
- Secure system design
- Visualization and simulation
- Cloud computing models (FaaS, PaaS, SaaS, IaaS)

## Tech Stack

- **Frontend:** Next.js 15.2.4 with TypeScript
- **Styling:** Tailwind CSS with dark theme support
- **Version Control:** Git with GitHub
- **Deployment:** Vercel
- **CI/CD:** GitHub Actions
- **Security Tools:** Trivy, CodeQL, Snyk, SonarCloud, semgrep

## Project Structure

```bash
portfolio/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Homepage
│   │   └── projects/
│   │       ├── [project]/    # Individual project pages
│   │       │   └── page.tsx
│   └── styles/
│       └── globals.css       # Global styles
├── .github/
│   └── workflows/
│       └── ci.yml            # CI/CD pipeline
├── public/
│   └── assets/               # Static assets
├── .env.example              # Example environment variables
├── package.json
├── README.md
└── tsconfig.json
```

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js:** Latest LTS version (v22.14.0 as of March 26, 2025) citeturn0search0
- **npm:** Comes with Node.js
- **Git:** Version control system

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/jonathan-lee-king/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

### Running the Development Server

Start the development server:

```bash
npm run dev
```

Visit `http://localhost:3000` to view the portfolio.

## Adding a New Micro Project

To add a new micro project:

1. **Create a new directory:**

   ```bash
   mkdir src/app/projects/project-name
   ```

2. **Add a `page.tsx` file in the new directory:**

   ```tsx
   import React from 'react';

   const ProjectName = () => (
     <main className="min-h-screen bg-gray-950 text-white px-8 py-16">
       <h1 className="text-4xl font-bold mb-4">Project Name</h1>
       <p className="text-gray-400 max-w-2xl mb-8">
         Project description goes here.
       </p>
       {/* Additional content */}
     </main>
   );

   export default ProjectName;
   ```

3. **Link the new project on the homepage:**

   In `src/app/page.tsx`, add a link to the new project:

   ```tsx
   import Link from 'next/link';

   // Inside the component
   <Link href="/projects/project-name">
     <a className="project-card">Project Name</a>
   </Link>
   ```

## CI/CD Pipeline

This project utilizes GitHub Actions for continuous integration and deployment. The pipeline includes:

- **Build:** Ensures the project compiles successfully.
- **Test:** Runs unit and integration tests.
- **Security Scanning:**
  - **Code Scanning:** Uses tools like CodeQL to detect vulnerabilities.
  - **Dependency Scanning:** Uses tools like Snyk to check for vulnerable packages.
- **Deployment:** Automatically deploys to Vercel upon successful merge into the `main` branch.

## Branching and Contribution Guidelines

- **Branch Protection:** Direct pushes to the `main` branch are restricted. All changes must go through pull requests.
- **Feature Branches:** Develop new features or fixes in separate branches named descriptively, e.g., `feature/add-new-project`.
- **Pull Requests:** Submit pull requests for review before merging. Ensure all CI checks pass.

**Note:** This portfolio is a personal project. External contributions are not accepted at this time.

## Environment Variables

Create a `.env` file in the root directory to define environment-specific variables. Refer to `.env.example` for required variables:

```.env
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
