create DATABASE pois;

create table jobs(
    id serial PRIMARY KEY,
    title TEXT,
    company TEXT,
    job_description TEXT,
    source_url UNIQUE TEXT,
    date_scraped TIMESTAMP DEFAULT NOW()
);
