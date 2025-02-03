cat << 'EOF' > ARCHITECTURE.md
# Architecture Documentation

## Overview
This document outlines the architecture for the Teacher Time Tracking project. It covers:
- Service responsibilities
- API endpoints
- Deployment notes
- Naming conventions

## Service Responsibilities

### Teacher Time Tracking Angular
- **Role:** Frontend user interface
- **Responsibilities:** 
  - Provide a responsive UI for task management.
  - Handle user interactions (login, task CRUD operations, filtering).

### Teacher Time Tracking Authentication Service
- **Role:** User authentication and session management
- **Responsibilities:** 
  - Manage user registration and login.
  - Secure endpoints using OAuth2/JWT.
  - Interact with a PostgreSQL database on AWS RDS.

### Teacher Time Tracking Tracking Microservice
- **Role:** Task management and time tracking
- **Responsibilities:** 
  - Handle CRUD operations for tasks.
  - Manage task categories, deadlines, and statuses.
  - Use DynamoDB for scalable data storage.

## API Endpoints

### Authentication Service
- **POST /users:** Create a new user account.
- **POST /login:** Authenticate a user and return a token.
- **GET /validateToken:** Validate the provided token.

### Tracking Microservice
- **POST /tasks:** Create a new task.
- **GET /tasks:** Retrieve a list of tasks.
- **PUT /tasks/{id}:** Update a specific task.
- **DELETE /tasks/{id}:** Delete a specific task.

## Deployment Notes

- **AWS Infrastructure:**
  - **Frontend:** Hosted on AWS S3 with CloudFront.
  - **Authentication Service:** Deployed via AWS Elastic Beanstalk.
  - **Tracking Service:** Deployed on AWS Lambda or Elastic Beanstalk.
- **CI/CD:** Utilize GitHub Actions (or another CI/CD tool) for automated builds and deployments.
- **Monitoring:** AWS CloudWatch for logging and performance metrics.

## Naming Conventions

- **Repositories:**
  - teacher-time-tracking-angular
  - teacher-time-tracking-auth
  - teacher-time-tracking-tracking
- **Branches:**
  - Use `main` or `master` as the default branch.
  - Feature branches should follow the pattern: `feature/<description>`.
- **API Endpoints:**
  - Follow RESTful conventions (use plural nouns where applicable, e.g., `/tasks`).

EOF
