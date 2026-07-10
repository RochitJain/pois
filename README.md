# POIS - Personal Opportunity Intelligence System

POIS (Personal Opportunity Intelligence System) is a backend application that automates job market analysis by collecting job postings, extracting in-demand skills, and generating personalized learning recommendations.

Instead of manually searching job portals and tracking market trends, POIS continuously gathers job data, analyzes skill demand, and produces weekly reports to help developers understand which technologies are currently in demand.

---

## Features

- Scrapes job listings from multiple websites
- Extracts technical skills using NLP techniques
- Stores structured data in PostgreSQL
- Prevents duplicate records using PostgreSQL `ON CONFLICT`
- Generates weekly skill-demand reports
- Scheduled automation using Cron Jobs
- REST APIs for data retrieval and reporting
- Deployable on Render

---

## Tech Stack

### Backend
- Node.js
- Express.js

### Database
- PostgreSQL

### Web Scraping
- Axios
- Cheerio

### NLP
- TF-IDF
- Keyword Extraction

### Deployment
- Render

---

## System Architecture

```
Job Portals
      │
      ▼
Axios + Cheerio Scraper
      │
      ▼
Skill Extraction (NLP)
      │
      ▼
PostgreSQL Database
      │
      ▼
REST APIs
      │
      ▼
Weekly Reports
```

---

## Database Design

The application uses a relational PostgreSQL database with normalized tables.

Example entities include:

- Jobs
- Companies
- Skills
- JobSkills
- Weekly Reports

Key design considerations:

- Foreign Key Relationships
- Normalized Schema
- Duplicate Prevention using `ON CONFLICT`
- Indexed Columns for faster querying

---

## API Overview

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /jobs | Get all jobs |
| GET | /skills | Get skill demand |
| GET | /reports | Weekly report |
| POST | /scrape | Trigger scraping |

---

## Project Structure

```
POIS/
│
├── controllers/
├── routes/
├── services/
├── models/
├── middleware/
├── config/
├── utils/
├── cron/
├── scraper/
├── app.js
└── server.js
```

---

## Workflow

1. Fetch job listings from supported websites.
2. Parse HTML using Cheerio.
3. Extract job details and required skills.
4. Clean and normalize the extracted data.
5. Store data in PostgreSQL.
6. Skip duplicate records using `ON CONFLICT`.
7. Generate weekly reports showing current market demand.

---

## Challenges Solved

- Preventing duplicate job records
- Designing a normalized relational schema
- Automating recurring scraping tasks
- Extracting skills from unstructured job descriptions
- Building scalable REST APIs

---

## Future Improvements

- User authentication
- Personalized dashboards
- Skill trend visualization
- Email notifications
- AI-based learning recommendations
- Multi-source job aggregation

---

## Learning Outcomes

Through this project, I gained practical experience in:

- Backend API development
- PostgreSQL schema design
- Web scraping
- NLP-based text processing
- Database normalization
- Cron job automation
- REST API architecture

---

## Author

**Rochit Jain**

Backend Developer

LinkedIn: https://linkedin.com/in/rochit-jain-581477134

GitHub: https://github.com/rochitjain
