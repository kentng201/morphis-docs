# Morphis Docs Plan

## Objective

Build a complete documentation site for Morphis with Nextra, using clear feature-based pages and subpages so users can move from installation to production deployment without gaps.

## Information Architecture

### 1. Overview
- Home
- Why Morphis
- Release notes / changelog summary

### 2. Getting Started
- Installation requirements
- Create a new project
- Folder structure tour
- Local development workflow
- Environment setup

### 3. Core Concepts
- Request lifecycle
- Controllers
- Services
- Context object
- Error handling
- Transformers

### 4. CLI
- CLI overview
- new project
- new controller
- new service
- new model
- new migration
- environment helpers
- deploy/build commands

### 5. HTTP
- Routing
- Route decorators
- Controllers
- Middleware pipeline
- Validation middleware
- CORS and logging
- OpenAPI generation

### 6. Validation
- Validator basics
- Required fields
- Request body validation
- Query and params validation
- Error response format

### 7. Database
- Database overview
- Connections
- Models
- Migrations
- Query patterns
- D1 / cloud database notes

### 8. Deployment
- Local Bun deployment
- Serverless deployment
- Cloudflare deployment
- Environment variables
- Production checklist

### 9. Examples
- Chat API example
- CRUD posts example
- OpenAPI + Scalar preview example

## Delivery Phases

### Phase 1 — Foundation
- [x] Create Nextra project
- [x] Add package name as @morphis/docs
- [x] Add initial navigation and page skeletons
- [x] Add roadmap page

### Phase 2 — Core Content
- [x] Fill Getting Started with working commands
- [x] Document all CLI generators
- [x] Explain HTTP decorators and middleware flow
- [x] Add validation examples from the framework
- [x] Add model and migration examples

### Phase 3 — Production Readiness
- [x] Add deployment guides for each target
- [x] Add troubleshooting pages
- [x] Add searchable API reference links
- [x] Add real project examples and tutorials

## Page Readiness Checklist

For each page or subpage:
- Purpose is clear in the first section
- Includes install or usage example
- Includes expected output / result
- Links to related sections
- Notes common errors or gotchas
- Is reviewed against the current Morphis source code
