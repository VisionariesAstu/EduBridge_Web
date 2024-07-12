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

```bash
EduBridge_Web/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   ├── utils/
│   └── ...
├── .eslintrc.js
├── .prettierrc
├── next.config.js
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v14 or above)
- npm or yarn

### Setup

1. Clone the repository:

```bash
git clone git@github.com:VisionariesAstu/EduBridge_Web.git
cd EduBridge_Web
```

2. Install dependencies:

```bash
npm install
# or
pnpm install
# or
yarn install
# or
bun install
```

3. run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
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

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
