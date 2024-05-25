# data-harvest-web

Build a web-based platform that allows users to crawl specified websites and extract data based on user-defined prompts. The system should automatically generate XPath or CSS selectors for the specified data. The platform should include the following features:

1. **User Interface:**
   - A form to input the target domain (e.g., example.com).
   - Fields to specify desired data (e.g., "Extract article titles", "Get product prices").
   - Options for crawling settings:
     - Depth (e.g., 3 levels deep)
     - Breadth (e.g., 10 links per page)
     - Frequency (e.g., once daily)
   - Buttons to start, stop, and pause the crawling process.

2. **Backend System:**
   - A web server (Flask or Django) to handle requests from the frontend.
   - Crawling manager to coordinate and execute web scraping tasks based on user inputs.
   - Use Scrapy or BeautifulSoup for extracting data.
   - Implement machine learning models or heuristic algorithms to automatically generate XPath or CSS selectors based on user-specified data elements (e.g., article titles, product prices).

3. **Data Storage:**
   - Design a database schema to store the extracted data.
   - Implement logic to save data in MongoDB or PostgreSQL.
   - Ensure efficient indexing and querying of the stored data.

4. **Legal and Ethical Compliance:**
   - Respect `robots.txt` files of target domains.
   - Implement rate limiting to avoid overloading servers.
   - Ensure compliance with data protection regulations (e.g., GDPR).

### Example User Prompt for Crawling:

Domain: example.com

Prompts:

Extract all article titles from the blog section.
Gather all product prices from the e-commerce section.
Retrieve contact emails from the contact page.
Crawling Settings:

Depth: 3 (crawl up to 3 levels deep)
Breadth: 10 (crawl up to 10 links per page)
Frequency: Once daily
Output Format:

JSON Schema:
{
"blog_articles": [
{
"title": "Example Title"
}
],
"products": [
{
"price": "Price"
}
],
"contacts": [
{
"email": "example@example.com"
}
]
}
markdown
Copy code

### Steps to Implement:

1. **Set Up the Frontend:**
   - Create a form with fields for domain, desired data, and crawling settings.
   - Implement dynamic input fields for multiple data requirements.

2. **Develop the Backend:**
   - Set up the web server to handle incoming requests and manage crawling tasks.
   - Implement the crawling manager using Scrapy or BeautifulSoup.
   - Develop machine learning models or heuristic algorithms to automatically detect and generate XPath or CSS selectors:
     - Train models using labeled data to recognize patterns and identify elements like titles, prices, emails, etc.
     - Use models to generate selectors dynamically during the crawl.
   - Use Celery for task queue management.

3. **Data Storage:**
   - Design the database schema and set up MongoDB or PostgreSQL.
   - Implement data storage logic to save the extracted data.

4. **Processing and Analysis:**
   - Implement data cleaning and preprocessing steps.
   - Add basic analytics and visualization tools for the extracted data.

5. **Testing and Deployment:**
   - Test the platform with various domains and prompts.
   - Ensure compliance with legal and ethical guidelines.
   - Deploy the platform on a cloud service like AWS or Heroku.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/data-harvest-web.git
cd data-harvest-web
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
