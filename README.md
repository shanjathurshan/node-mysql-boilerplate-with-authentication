# node-mysql-boilerplate-with-authentication

NodeJS + MySQL - Boilerplate API with Email Sign Up, Verification, Authentication & Forgot Password

## Key Features:

- **User Authentication:** Implement secure user authentication using Node.js and Sequelize, providing a reliable foundation for user management.

- **JWT Refresh Token:** Enhance security by implementing JSON Web Tokens (JWT) for authentication, and use refresh tokens to manage secure session management. This adds an extra layer of protection against unauthorized access.

- **Email Verification:** Enhance security and user confirmation by incorporating email verification during the registration process. Users receive a verification email with a unique link to activate their accounts.

- **Password Encryption:** Utilize strong password encryption techniques to safeguard user credentials and ensure data integrity.

- **Sequelize ORM:** Leverage the power of Sequelize as the Object-Relational Mapping (ORM) tool to interact seamlessly with your database, ensuring efficient data management.

- **Express.js Integration:** Built on top of Express.js, a fast, unopinionated, minimalist web framework for Node.js, facilitating the development of scalable and maintainable applications.

- **Customizable and Extensible:** Easily extend the functionality to meet your specific requirements or integrate additional features with the modular and well-organized codebase.

## Getting Started:

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Copy env file `cp .env.example .env`.
4. Configure the database connection in the `.env` file.
5. Create database with sequelize ORM `npm run db:create`
6. Run migrations `npm run db:migrate`.
7. Run seeder `npm run db:seed`.
8. Start the application with `npm run start:dev`.

Refer to the documentation for detailed instructions on setting up and customizing the authentication system.

### Author - [@shanjathurshan](https://github.com/shanjathurshan)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue.svg)](https://github.com/shanjathurshan)
    


# node-mysql-boilerplate-with-authentication
