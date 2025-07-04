# job-listing-platform
Description
A modern full-stack job listing platform built with Next.js and styled using Tailwind CSS. Key features include:
Job Posting Form – Submit new job listings with fields like title, company, and description.
Job Cards – Display each job in a clean, responsive card layout with essential details.
Search Bar – Filter jobs instantly by company name.
View Details Button – Navigate to a dedicated page with full job information.

How It Works
To create a job list, the Admin needs to visit: (/admin/post), where the listing form exists.
The Admin will be directed back to the home page where jobs are listed with short job details on cards.
Each card has a button that directs individual to a page populated with its full job details.
It also has a search bar where a company can be filtered by its name.

Any Decisions I Made
I decided to used react hook useState sate manager to manage form inputs, even though useActionState method is the best and more secure for input validation, securty, form state management and granullar rendring(page revalidation)
I decided to useEffect to handle immediate fetching of job data in a client component and rendered the client component in the reserved page file: (/) because Next.js does not allow direct http internal calls during production, but is allowed during development.
I decided to also used http deu to time limit and a local database, instead of https which is the best and more secured fetch mehtod.
I decided to used fs(file system) and path to read and write into the json database system.
I also decided to used toLowerCase method on both the input and value name from the array for smooth search experience.


What I would have improve if I have more chance
I would have used action server (useActionState) for more input validation, and more.
I would have used a third party database for well structure query data, scalability and load-balancing.
I would also been able to implement all the bonus tasks.
I would have used external database such as postgreSQL, MongoDB, or SQLite(better-sqlite3) which allows parallel fetching of data at both in development and production environment instead of db.json database file system which no enough scalling for thousand requests and not well secured.
I would have also used https to fetch for securty purpose. 
I would have used xss(cross-site-scripting) to prevent cross-site attackers.

