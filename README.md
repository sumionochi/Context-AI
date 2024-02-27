**Why Build this**
Thing that came from my personal experiences that homeschooling is on the rise around my area. My challenge was to overcome the lacks of personal tutoring, efficient and engaging learning.

**Overview**
I am presenting my solution related to re-inventing platform education. So, the solution that I came up with is simple.
The problem I am tackling is that it overcomes the barrier of traditional e-learning planning platform.
My solution gives a more seamless, streamlined and engaging educational experience for students. 
Ex - Assignment generation, Question and answering, Code generation + debugging + summary.

**Why should I care**
It streamlines content creation through intelligent note-taking assistance and facilitates dynamic, responsive interaction. 

**The future for Edu Environment is in from my perspective as a Developer **
1. Collaboration with AI
2. Simplicity
3. Yet Robustness

**Tech Stack**
- 🔧 Used NextJS 13 with the app directory structure for the project.
- 🎨 Integrated Shadcn, a Tailwind CSS library for accessible and stylish UI components.
- 🧠 Utilized OpenAI's DALL•E for text-to-image generation and autocomplete functionality.
- 🚀 Employed the Versa Edge runtime for longer and faster AI function execution.
- 🛢️ Implemented DrizzleORM, a TypeScript object-relational mapper (ORM), for SQL database interaction.
- ☁️ Utilized Neon DB as a serverless PostgreSQL database and Firebase Storage for file storage.

**Best usecases**
1. Homeschooling and remote learning tool
2. For seamless developer experience
3. For IT professionals notes arrangment

**Challenges**
Challenge 1: Implementation of Smart Notes Taker Editor
Implementing an editor for the Smart Notes taker presented challenges, particularly in maintaining text format and customizing font sizes. We solved this issue by using TipTapEditor functions, which allowed for editable text while preserving formatting.

Challenge 2: Server Hosting Expenses
The expenses associated with server hosting posed a concern, especially when server timeout issues occurred during free-tier deployments due to resource-intensive content generation processes. Our solution involved investing in a $20 hosting plan to ensure the proper functioning of AI content generation. We explored alternative solutions like Edge runtime, but compatibility issues and lack of support with certain services prompted us to opt for hosting.

Challenge 3: DALL·E Image Expiration
DALL·E provided only a 1-hour public link for generated images, which posed a limitation. We addressed this by storing the generated images in Google Firebase storage, ensuring their availability beyond the 1-hour window.
