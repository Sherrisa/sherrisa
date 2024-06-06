This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server: npm run dev
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

## My Development Process

- Create high-fidelity mockups of mobile first and then desktop in Figma.
- [Installation](https://nextjs.org/docs/getting-started/installation) - Create a new Next.js app using create-next-app.
- Remove everything between the main tags in page.js & change the title metadata in layout.js.
- remove everything in the globals.css file except the three lines of @tailwind code; Add a max-width and padding to the body and center it.
- Setup fonts.js file with exports of heading, subheading, and body fonts & import the body font into layout.js file.
- Add an images folder inside the public folder; place all home page above-the-fold images in the folder; add these images to the page in the page.js file.
- Set up the pages for the first sprint of the project with their page.tsx files in the app folder. Add a components folder inside the app folder.
- Build the navbar and the footer.

## Installing Multiple Custom Google Fonts

[Font Optimization: Using Multiple Fonts](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts#using-multiple-fonts)

## Set Up the Color Palette

[Using Custom Colors](https://tailwindcss.com/docs/customizing-colors)

## Footer & Font Awesome

- VS Code shortcut to make a React export default function => rfc; make the function semantic by changing the <div></div> to <footer></footer>
- In layout.js import the Footer component and add to the RootLayer component
- Review the Font Awesome [Set Up with React](https://docs.fontawesome.com/web/use-with/react/)
- Add SVG Core: npm i --save @fortawesome/fontawesome-svg-core
- Add Icon Packages: npm i --save @fortawesome/free-solid-svg-icons
- Add the React Component: npm i --save @fortawesome/react-fontawesome@latest
- Review the troubleshooting page on [Using the Font Awesome React component with Next.js and Typescript](https://docs.fontawesome.com/web/use-with/react/use-with)
- Note: The three lines of code this article indicates putting in an app.js file goes at the top of the layout.js file
- Add the code: Add the Link import and links for the email & phone; Make the "text" for each link be a Font Awesome icon
- Add the Tailwind styling: Give it a background color, a padding top & bottom of 2rem (py-8), center the icons (flex, justify-center)

## Footer & React-Icon

I decided to switch over to from Font Awesome to react-icons for my icons.

- In the [React-Icon Documentation](https://www.npmjs.com/package/react-icons), copy the code to install react-icons: npm install react-icons --save
- Add the import for each of the five icons I used in this project footer
- Add the component, ex: <FaLinkedin /> in the function
- Style the icons directly inside the component, ex: size={"2rem"} color="#fff". This YouTube video shows how: [React.js react-icons Example to Change Size and Color in Browser Using Javascript](https://www.youtube.com/watch?v=LXscNQWPnX0)
- The Stack Overflow article, [React changing react-icon color on mouse hover](https://stackoverflow.com/questions/68214305/react-changing-react-icon-color-on-mouse-hover), shows how to implement the hover => I added className="footerIcon" to the component and then .footerIcon:hover {fill: #000;} to the globals.css file

## Navbar

I learned how to create a navbar with Tailwind and Next.js from the video [Creating a Navigation Bar with Next.js & Tailwind CSS: A Step-by-Step Guide](https://www.youtube.com/watch?v=8s4DK5PkRNQ).

## Using v0.dev, Shadcn.ui & ChatGPT

I used v0.dev for ideas for the home page layout. This is where I learned about shadcn.ui.

- I watched Dave Grey's [Build Your UI Component Library in React & Next.js | ShadCN UI for Beginners](https://www.youtube.com/watch?v=v0_AT8zaLo8) for an introduction to shadcn.ui.
- Typescript: Dave Grey also has an 8-hour course on TypeScript called [TypeScript Full Course for Beginners | Complete All-in-One Tutorial](https://www.youtube.com/watch?v=gieEQFIfgYc) I decided to rebuild the project from scratch using Typescript instead of JavaScript.
- ChatGPT: To convert my first files to TypeScript, I asked ChatGPT what I would need to change about the files.
- v0.dev: [v0.dev](https://v0.dev/r/kavZKGwFMVG) gave me the idea for the card layout on the home page and began to expose me to grids with Tailwind.

## Grid Layout

I learned grid layout with Tailwind for this project.

- The YouTube video [Easy Grid Layouts with Tailwind CSS for Beginners](https://www.youtube.com/watch?v=-P8rvj8-1_w) was very helpful.
- I learned how to control how elements are sized and placed across grid columns from the [Tailwind Grid Column Start/End Documentation](https://tailwindcss.com/docs/grid-column).

## Project Mockup Images

To give my project images a more professional feel, I used mockup templates from stock.adobe.com and Photoshop.

- The video [How to Use Mockup Templates with Photoshop](https://www.youtube.com/watch?v=sFtFF4cajmU) showed me how to do this.
- I used the Go Full Page Chrome extension to take screenshots of the browser window.
- I then cropped these images to the dimensions indicated in the mockup templates using Photoshop.
- I was inspired by looking at[Sofie Brittain's Website](https://www.sophiebritt.com/), which I found by reading blogposts about the best portfolio websites.

## Initial Testing

- I tested every link.
- I viewed every page with the Chrome developer tools on each of the following dimensions: iPhone 12 Pro, iPad Pro, and Desktop in Full Screen mode.
- I changed the desktop viewport size in and out on all pages to see how the responsive design appeared at varying widths.

## Pushing to GitHub & Deploying to Vercel

- Create repository
- git init
- git add .
- git commit -m "First commit"
- git branch -M main
- git remote add origin https://github.com/sherrisa/sherrisa
- git push -u origin main
- Login to vercel
- Click new project => import the project => click deploy
- Note: The project will build at this time

[Deploy a Next JS Application by Code Commerce](https://www.youtube.com/watch?v=Vcm1anCcuU0) has a great tutorial on this process.

## Deploy on Vercel Documentation

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

To add the custom domain sherrisa.com, read this documentation: [Adding and Configuring a Custom Domain](https://vercel.com/docs/projects/domains/add-a-domain?utm_source=next-site&utm_medium=learnpages&utm_campaign=no-campaign)

## Image Optimization

Optimization was necessary for speed and SEO.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
