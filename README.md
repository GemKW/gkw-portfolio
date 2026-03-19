# My Portfolio

Welcome to my portfolio! This project showcases my work, skills and experience using SvelteKit, TypeScript, and Vite.

## Features
- Responsive design
- Resume section
- Projects showcase
- Contact form
- Theme toggle (light/dark)

## Detailed Sections

### Resume
The Resume section presents my professional experience, education, and skills in a clean, readable format. It includes anchor links for easy navigation. 
(Main code in routes/resume/+page.svelte)

### Projects
The Projects section displays a list of my work, including descriptions, technologies used and Notion links to live demos and repositories. Projects are rendered dynamically and styled for clarity and responsiveness.
(Main code in routes/projects/+page.svelte)

### Contact Form
The Contact section features a form where visitors can send me messages. The form uses SvelteKit's server-side actions to handle submissions securely, with validation and feedback for users. 
Resend is also used as an environmnetal variable, set up in .env and called in the contact page server. It is an email API for developers that facilitates sending of transactional email through a clean REST API and SDK. Messages are processed and can be sent to my email or stored as needed.
(Main code in routes/contact/+page.svelte) 

Environmental variable (.env) contained the following code: 
```
RESEND_API_KEY=re_H8r4UvM9_EozgJx1uYUxXbndiuemaaBqq
CONTACT_TO_EMAIL=gemkawira@outlook.com
```
which had to be manually added to Vercel upon deployment since GitHub excludes it from the repository.


## Tech Stack
- [SvelteKit](https://kit.svelte.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)

## Project Structure
```
my-portfolio/
├── src/
│   ├── lib/
│   │   └── components/
│   │       └── ThemeToggle.svelte
│   ├── routes/
│   │   ├── contact/
│   │   ├── projects/
│   │   └── resume/
│   ├── app.css
│   └── app.html
├── static/
│   └── images/
├── package.json
├── svelte.config.js
├── tsconfig.json
└── vite.config.ts
```

## Getting Started
1. Install dependencies:
	```bash
	npm install
	```
2. Start the development server:
	```bash
	npm run dev
	```
3. Open your browser at [http://localhost:5173](http://localhost:5173)

## Building for Production
```bash
npm run build
```
```bash
npm run preview
```

## Deploying
The built project was deployed on Vercel after being added as a repository on GitHub. (https://gkw-portfolio.vercel.app/)

To facilitate updates to the code, I ran 
```bash
git clone https://github.com/GemKW/gkw-portfolio.git
```
This created a fresh local copy of the repo Vercel is connected to.
I then switched the workspace to the gkw-portfolio folder to work directly with the correct repository.

I added 
```bash
npm run preview
```
to "Building for Production" to confirm I could commit and push updates. Then I ran 
```bash
git push origin main
```
This sent the update to the GitHub repository Vercel is watching.

README changes automatically appeared on GitHub.  
In case I need to make changes to the code, I would follow the same procedure and Vercel would automatically detect the push, start a new deployment and update the site.

