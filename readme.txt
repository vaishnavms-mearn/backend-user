                     User-Management-Frontend
                    -------------------------
           1.Created a project user-management-frontend
	   2.Install 3rd party libraries
                i) React Bootstrap 
                ii) MDB Bootstrap 
                iii) Fontawsome 
                iv) React Toastify
                v) Google Fonts
            3.Components Creation
                    Pages
                        -Auth.jsx
                        -User.jsx
                        -UserDetails.jsx
                        -PasswordReset.jsx
                    Components
                        -Header.jsx
                        -Footer.jsx
                        -Banner.jsx
                        -Aboutus.jsx
                        -WhatweDo.jsx
                        -Details.jsx
                        -EditUser.jsx

            4. Installed React Router Dom for routing 
	    5.In services there are 3 files :
                     -allApi.js	         (File Used For Api Calls)
                     -base_url.js	(Contains the baseUrl of backend)
                     -commonApi.js	(common file in which axios is imported and used for fetching API Datas)
            6.Context Api folder:
            Context API provides a way to share data  across components in a React application without explicitly passing props down through every level of the component tree.
Here it is used in Editing User Profile

                     User-Management-Backend
                    -------------------------
         1.Create a backend folder - user-mangement-backend using node
         2.Install 3rd party packages
           -Express 
           -mysql
           -Cors
           -dotenv
           -multer,
           -nodemailer,
           -jsonwebtoken
        3.Folders
          -Controllers (for Logics)
          -Middlewares (jwt and multer)
           -Router (for creating routes)
           -DB (for db connection)
        

Project Overview

I have created a full-stack user management system using React.js, Node.js, MySQL, and Express. The application includes responsive registration and login pages, with security ensured through the use of JWT middleware during login. I have also developed a user page that displays available time slots and a user detail page where users can view and edit their information.

Additionally, the user detail page features an image upload function, which updates the database and reflects changes on the page. Furthermore, I have implemented a "forgot password" feature, enabling users to reset their passwords by receiving an email via Nodemailer.
            
           
