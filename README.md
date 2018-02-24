# Project-Team-8
**Team Name:** MegaHertz

**Team Members:**
1)	Shraddha Chadha
2)	Shreya Shah
3)	Tarang Dhulkotia
4)	LakshmiPrasanna Kona

**Title:** *Company Insider for Software Engineers*

**Description:** Company Insider provides a list of software companies based on user's zip code. The application takes the data from glassdoor and creates cloud tags from user's reviews in a visual representation. This way any user gets a quick glance of company insights and doesn't have to go through a long list of reviews in glassdoor. Also, the application fetches data from United States Department of Labor and provides the information about the H1-B applications that the company issued on an average every year. This application would prove to be of great help to all the job seekers in deciding their dream company.

**Proposed Methodology:**  The application will be a website that consumes glassdoor API (https://www.glassdoor.com/developer/companiesApiActions.htm ). User's location will be detected automatically and passed to the API and the response (which will be the list of nearby software companies) will be represented. The application will then analyze glassdoor's user reviews and ratings and create cloud tags that will be visually represented.  The data from the United States Department of Labor for H1B will be inserted in Mongo DB. By analyses on the data set, application will provide the number of H1-B applications that the company issued on an average every year.

**Title:** *Disease Detection*

**Description:** This application is based on a crowd-sourced model. The application captures users symptoms through a user-friendly questionnaire on a website and provides information about the most probable diseases they might be suffering from. The application would also provide a recommendation of doctors that are best suited to treat the disease based on user's location. The application will take the generated data from users to create a trend analysis of diseases.
This will help with disease management.

**Proposed Methodology:**  The application will be a website that consumes a third-party API (https://developer.infermedica.com/docs/medical-concepts#conditions). User's input will be passed to the API and the response (which will be the disease name) will be represented. Also, the application will detect user's location and using another API (https://developer.betterdoctor.com/) it will list all the nearby doctors that can treat the disease. It will also plot the disease data on google map. 
