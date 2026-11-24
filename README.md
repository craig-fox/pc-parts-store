
# PC Parts Store

A full-stack e-commerce application demonstrating enterprise
software engineering, microservices architecture, automated
testing and AWS infrastructure as code.

## Overview

PC Parts Store is a distributed application designed to
demonstrate the design, development, testing and deployment
of a modern e-commerce platform.

The solution comprises four independently maintained projects.

## Architecture

![System Architecture](architecture/system-architecture.png)

## Project Components

### 1. Backend API
Java 25 | Spring Boot 4 | PostgreSQL

A modular microservices backend providing authentication,
customer, product, order, inventory, payment and shipping
capabilities.

[View Backend Repository](API_REPOSITORY_URL)

### 2. Frontend Application
React | TypeScript | Vite | Tailwind CSS

A customer-facing web application integrating with the
backend services.

[View Frontend Repository](UI_REPOSITORY_URL)

### 3. End-to-End Testing
Cucumber | Automated Testing

Automated end-to-end testing of key application workflows.

[View E2E Repository](E2E_REPOSITORY_URL)

### 4. AWS Infrastructure
Terraform | AWS | ECS | ECR | RDS

Infrastructure as code for provisioning and deploying
the application on AWS.

[View Infrastructure Repository](INFRA_REPOSITORY_URL)

## Engineering Highlights

- Microservices architecture
- REST API design and implementation
- JWT authentication and authorisation
- Service-to-service communication
- Resilience and fault tolerance
- Idempotent order processing
- Database migrations with Flyway
- Unit and integration testing
- Cucumber end-to-end testing
- Infrastructure as code with Terraform
- AWS deployment architecture
- CI/CD and automated quality checks

## Technology Stack

Java 25, Spring Boot 4, React, TypeScript, PostgreSQL,
Cucumber, Maven, Docker, Terraform and AWS.

## Project Documentation

See the individual repositories for implementation
details, build instructions and technical documentation.
