# Erasmus+ SDS project
The Courses for Erasmus+ Students (CES) is a web application that helps Erasmus+ students choose suitable courses for their learning agreement by providing a list of available courses, official descriptions, comments from other students, and the ability to add comments and materials. CES also facilitates the creation of the learning agreement by allowing students to add or delete courses to their basket and export the selected courses as a Learning Agreement document.
The CES web application will be built using Laravel as the backend framework, ReactJS as the frontend library, and MySQL as the database management system.

## Roles and responsibilities
- Kalvin LUCAS (Product Owner and Front End Developer) is responsible for:
  - Defining the product vision and goals and managing the product backlog.
  - Developing and maintaining the front end of the web application.
- Hassan KHALIFE (Scrum Master and Full-Stack Developer) is responsible for:
  - Facilitating the Scrum events and ensuring the Agile methodology is implemented effectively.
  - Developing and maintaining the backend of the web application.
  - Developing and maintaining the front end of the web application.
- Mostapha (Full-Stack Developer) is responsible for:
  - Developing and maintaining both the front end and the back end of the web application.
  - Ensuring that the code is well-written, documented, and tested, and that the application is deployed and maintained properly.
- Damien and Mohamad (Front End Developers) are responsible for:
  - Developing and maintaining the user interface and user experience of the web application.
  - Ensuring that the front end is aligned with the product vision and that the application is user-friendly and responsive.

## Communication strategies
- Discord will be used for day-to-day communication within the team. Team members can use channels to discuss specific topics, share updates on their progress, and ask for feedback or assistance. Meetings, such as weekly stand-ups, sprint reviews, and retrospectives, will be held on Discord voice channels to allow for real-time discussions and collaboration. The use of Discord will also allow team members to stay connected and informed even if they are working remotely.

## Installation manual
### Prerequisites
- Node.js (version 14.x or later)
- PHP (version 7.3 or later)
- Composer

### Installation Steps
- Clone the repository:
  - Copy code
      - git clone https://github.com/hassankh0/erasmus-sds.git
- Navigate to the backend folder and install the dependencies:
  - Copy code
      - cd backend
      - composer install
- Create a copy of the .env.example file and name it .env:
  - Copy code
      - cp .env.example .env
- Create a new MySQL database for the project and update the DB_DATABASE, DB_USERNAME, and DB_PASSWORD variables in the .env file accordingly.
- Run the database migrations to create the necessary tables:
  - Copy code
      - php artisan migrate
- (Optional) Run the database seeder to populate the database with some sample data:
  - Copy code
      - php artisan db:seed
- Start the Laravel server:
  - Copy code
      - php artisan serve
- Open a new terminal window, navigate to the frontend folder and install the dependencies:
  - Copy code
      - cd ../frontend
      - npm install
- Start the React server:
  - Copy code
      - npm start
- Access the application by navigating to http://localhost:3000 in your browser.

### Additional Notes

- To build the React application for production, run the following command from the frontend folder:
  - Copy code
      - npm run build
  - The built files will be located in the frontend/build folder.

