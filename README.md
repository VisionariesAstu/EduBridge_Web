# EduBridge (Home-Tutor Automation)

## Overview
The Home Tutoring Automation System is a platform designed to connect qualified teachers with students for home tutoring sessions. The system addresses concerns of safety and convenience by leveraging technology to create a secure and efficient environment for home teaching. Key features include a database of verified teachers, advanced filtering options, and integrated video conferencing optimized for teaching and learning.

## Table of Contents
- Overview
- Features
- Technology Stack
- Project Structure
- Getting Started
- Setup
- Contributing
- License

## Features
- Secure and verified teacher database
- Advanced search and filtering options
- User authentication and authorization
- User-friendly dashboards for students, parents, and teachers
- Integrated video conferencing with virtual whiteboard
- Booking and payment gateway integration
- Responsive design for all devices

## Technology Stack
- Frontend: Next.js, Tailwind CSS
- Backend: Next.js
- Database: mysql
- Video Conferencing: [To be determined]
- Authentication: Jwt
- CI/CD: GitHub Actions

## Project Structure
```
EduBridge_Web/
├── public/                     # Public assets
├── src/                        # Source files
│   ├── components/             # Reusable UI components
│   ├── pages/                  # Next.js pages
│   ├── styles/                 # Global and component-specific styles
│   ├── utils/                  # Utility functions
│   └── ...                     # Other folders
├── .eslintrc.js                # ESLint configuration
├── .prettierrc                 # Prettier configuration
├── next.config.js              # Next.js configuration
├── package.json                # Package dependencies and scripts
└── README.md                   # Project documentation
```

## Getting Started

### Prerequisites
- Node.js (v14 or above)
- npm or yarn

### Setup
1. Clone the repository:

```
git clone git@github.com:VisionariesAstu/EduBridge_Web.git
cd EduBridge_Web
```

2. Install dependencies:

```
npm install
# or
yarn install
```

3. Run the development server:

```
npm run dev
# or
yarn dev
```

4. Open your browser:

Navigate to http://localhost:3000 to see the application in action.

### Contributing
We welcome contributions to enhance the Home Tutoring Automation System. To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (git checkout -b feature-branch).
3. Commit your changes (git commit -m 'Add some feature').
4. Push to the branch (git push origin feature-branch).
5. Open a pull request.

Please ensure your code adheres to our coding standards and includes necessary tests.


