## Purpose
This is a portfolio site coded with React rather than vanilla HTML or CSS. This allowed the user to navigate the pages of the project instantly.
## Description
The portfolio site is a single page application built with React. The user can navigate the site instantly due to the page being made of two main components, a header on the far left side of the page, and a main body component that can be cycled.
## Features
Multipage like navigation that loads instantly using components as views for the body of the page. 
## Languages
- HTML via JSX
- CSS
- JavaScript
- React
## Skills
- Components as page views
## Build Process
### Inspiration
This portfolio site design was inspired by Webb Montgomery, Janice Chu, and Lena Raine's online portfolios. These sites use a gallery view of their projects with details about that project opening a detailed page with a description. 
### Basic Page Structure
I created my project via `npx create-react-app` and created a component for the `<Header />` on the far left of the page. 
```JSX
export default function Header(props) {

return (
	<header className="app-header">
		<h1 className='title'>Don's Portfolio</h1>
		
		<div className='button-container'>
			<button className='primary-btn btn' onClick={props.handleHome}>Home</button>

			<a className='resume-btn btn center' href='/resume/resume.pdf' rel='noreferrer' target='_blank'>Resume</a>
		
			<hr />
		
			<button className='btn' onClick={props.handleArt}>Art</button>
			<button className='btn' onClick={props.handleProgramming}>Programming</button>
			<button className='btn' onClick={props.handleWriting}>Writing</button>
			<button className='btn' onClick={props.handleEducation}>Education</button>
			<button className='btn' onClick={props.handleAbout}>About</button>
		</div>
	</header>
	)
}
```
The `<Header />` contains a simple `<h1>` and `<button>` within a Flexbox container. Using the class of `btn`, the buttons were all styled to match each other in appearance and was standardized across the application. 
### Body Component Cycling
The right side of the page was the body and was cycled between various views using `useState` in the main `<App />` component. 
The state of the current page was held as a `body` with the default being `home` as shown in the following. 
```JSX
const [body, setBody] = useState('home');
```
Various handler functions were created that control the state of the page. 
```JSX
function handleHome() {
	setBody('home');
}
```
Each of these handler functions were passed to the `<Header />` as props with the `onClick` event handler. The state of the page could only be set in the main `<App />` component but in functionality is being controlled by the user with the buttons in the `<Header />`. This was my method for controlling this React limitation. 
For every state, there is a return value in the JSX that determines which component is displayed as shown in the following. 
```JSX
if (body === 'home') {
	return (
		<main className='app'>
			<Header
				handleHome={handleHome}
				handleArt={handleArt}
				handleProgramming={handleProgramming}
				handleWriting={handleWriting}
				handleEducation={handleEducation}
				handleAbout={handleAbout}
			/>
			<Home
				handleArt={handleArt}
				handleProgramming={handleProgramming}
				handleWriting={handleWriting}
				handleEducation={handleEducation}
			/>
		</main>
	)
}
```
Using `if` conditions, the body displayed to the right of the `<Header />` is determined based on the state. Each of these components also pass the handler functions as props to their components for additional navigation if necessary. 
### Galleries
The main feature of the portfolio sites that inspired mine were their gallery displays. For this, I created a `gallery` class for `<div>` elements that can hold `<Card />` components. For future simplicity, these `<Card />` components were designed to be reusable code for multiple `gallery` displays and could accept props.
```JSX
<div className='gallery'>
	<Card />
</div>
```
These cards were arranged in a `gallery` container that uses `flexbox` for arranging into 3 columns on a large screen and less columns on smaller screens using to `flex-wrap`.
### Cards
The `<Card />` components originally accepted props as directly coded attributes such as the following.
```JSX
<Card
	title='Sleep Calculator'
	description='React Web Application'
/>
```
However, to simplify the code even future, I chose to store the information for these cards in a `JSON` file which allowed the attributes of the `<Card />` components to be standardized such as the following. 
```JSX
<Card
	title={data.programming.program1.title}
	description={data.programming.program1.description}
	href={data.programming.program1.href}
	src={data.programming.program1.src}
	alt={data.programming.program1.alt}
/>
```
### JSON Data Storage for Projects
The information to be displayed for each of the projects was stored in a `JSON` file with the intention of displaying the values of directly on the `<Card />` props.
Each main navigational component had its own section of the `JSON` file with an object holding each of its components.
```JSON
{
	"art": {
	
	}
}
```
Then each `<Card />` to be displayed had its own arrangement of key/value pairings as follows. 
```JSON
"img1": {
	"src": "images/paintings/painting1.jpg",
	"alt": "tile church"
},
"img2": {
	"src": "images/paintings/painting2.jpg",
	"alt": "Bread bowl"
},
"img3": {
	"src": "images/paintings/painting3.jpg",
	"alt": "Red hat woman"
}
```
Combined, this allowed for a large database that can be updated at anytime to add additional projects. A simple addition of the file itself to the `images/` folder, or a link via `href` to the `JSON` file would allow the project to be viewable on the portfolio site. After that, only a simple addition of a `<Card />` such as the following is needed. 
```JSX
<Card
	title={data.programming.program2.title}
	description={data.programming.program2.description}
	href={data.programming.program2.href}
	src={data.programming.program2.src}
	alt={data.programming.program2.alt}
/>
```
The creation of every aspect of the `<Card />` is not necessary and significantly reduces the time to implement projects compared to vanilla HTML or Handlerbars.
### Hosting
When ready for hosting, I used `npm run build` to create a build folder of the portfolio site and uploaded it's files to my hosting platform. Within a couple minutes, my portfolio site was live with my domain. 
### Maintenance of the Site
After hosting the portfolio site, I can add more projects to the site with additions to the projects `JSON` file.
Additional visual updates to the site will come to the CSS files.
