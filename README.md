Project Overview: Digital Boost Landing Page

Design Decisions
●	User-Centric Design: The landing page was designed with a user-friendly interface to ensure easy navigation. Clear sections were created for features, testimonials, and contact information to enhance user engagement.
●	Responsive Layout: The design is responsive to provide a seamless experience across various devices, including desktops, tablets, and mobile phones. CSS Flexbox and Grid were utilized to achieve this responsiveness.
●	Visual Aesthetics: High-quality images and a cohesive color scheme were selected to align with the branding of "The Digital Boost" service, ensuring a professional look and feel.

Tools Used
●	Frontend: The frontend is built using React, allowing for a dynamic and responsive user interface. CSS was utilized for styling, and the React Lazy Load Image Component was used for efficient image loading.
●	Backend: The backend is built using Express and MongoDB to handle data storage and retrieval for contact form submissions.
●	Google Analytics: Integrated for tracking user interactions and measuring the effectiveness of marketing strategies.
●	SEO Optimization: Meta tags were implemented to enhance visibility in search engine results, focusing on keywords relevant to digital marketing services.

Challenges Encountered
●	CORS Issues: Initially faced challenges with Cross-Origin Resource Sharing (CORS) when making API requests from the frontend to the backend. This was resolved by configuring the server to accept requests from the frontend domain. Deploy frontend on Vercel and Backend on Render.
●	Form Validation: Ensuring the contact form captured all necessary data while providing clear error messages to users was a challenge. This was addressed by using controlled components in React and handling errors effectively.
●	Responsive Design: Ensuring that the design was responsive across various devices required extensive testing and adjustments in CSS.

Suggestions for Future Improvements
●	User Feedback Mechanism: Implement a feedback mechanism to gather user opinions on the landing page, which can inform future enhancements.
●	Performance Optimization: While the current setup is efficient, further performance optimizations could be explored, such as implementing lazy loading for other resources and minimizing the bundle size.
●	Advanced Analytics: Consider implementing more advanced analytics tools, such as heatmaps, to better understand user interactions and improve user experience.
●	Accessibility Improvements: Future iterations should focus on enhancing accessibility features to cater to users with disabilities, ensuring compliance with web accessibility standards.

Deployed Link - https://digital-boost-landing-page-frontend.vercel.app/ 
Github Repo - https://github.com/JP-7808/digital-boost-landing-page 
