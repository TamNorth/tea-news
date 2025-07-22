<a id="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/TamNorth/tea-news">
    <img src="src/assets/tea_news.svg" alt="Tea News logo" width="160" height="160"> 
  </a>

<h1 align="center">Tea News</h1>

  <p align="center">
    A demonstration news server with articles, voting and comments
    <br />
    <a href="https://github.com/TamNorth/tea-news"><strong>See it on Github</strong></a>
    &middot;
    <a href="https://tea-news.netlify.app"><strong>See it in action</strong></a>
    <br />
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#using-the-repo">Using the Repo</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#installing-packages">Installing packages</a></li>
        <li><a href="#running-a-local-instance">Running a local instance</a></li>
      </ul>
    </li>
    <li><a href="#about-the-author">About the Author</a>
      <ul>
        <li><a href="#other-projects">Other Projects</a></li>
      </ul></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

![Tuse Screen Shot](/public/images/Site_demo.png)

Tea News is a mock-up news server, created in order to practice developing CRUD functionality in the back- and front-end. Features include:

- A homepage feed containing article cards with some metadata
- Options to sort the feed by date, comment count or number of votes, in ascending or descending order
- Options to filter the feed by topic
- Voting on articles, with instant feed-back
- Commenting on articles
- Deleting comments that belong to your user account
- A responsive interface with helpful error handling

Please note, some aspects of the site are placeholders or for demonstration purposes only, such as:

- User login - user authentication is not implemented and the user is instead given a list of accounts to use in order to demonstrate other features of the site
- Some buttons, such as the top-left menu button and the voting panel for comments, are placeholders for now

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![React][React.dev]][React-url]
- [![Node.js][NodeJS.org]][Node-url]
- [![PostgreSQL][PostgreSQL.org]][Postgresql-url]
- [![Express][ExpressJS.com]][Express-url]
- [![Jest][JestJS.io]][Jest-url]
- [![Supertest][Github]][Supertest-Github-url]
- [![styled-components][Styled-Components.com]][Styledcomponents-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Using the repo

If you like the project and want to play with your own version, go ahead and fork the repo! You can provide credit in your project readme if you want, but please do give the project a star!

This repo contains only the front-end of the project. you can find the back-end repo and documentation [here](https://github.com/TamNorth/NC-news#readme). Otherwise, read below for a quick-start guide in getting the repo set up on your local machine.

### Prerequisites

Ensure you have the following installed:

- Node.js v23.11+
- npm v11.3+
- PostgreSQL v16.9+

### Installation

- Clone the repo into your chosen directory
  ```bash
  git clone https://github.com/TamNorth/tea-news.git
  ```
- Navigate into the repo
  ```bash
  cd tea-news/
  ```

### Installing packages

- Install the module's dependencies:
  ```bash
  npm install
  ```

### Running a local instance

The project is currently set up to request data from the back-end at https://nc-news-gwte.onrender.com/api/. If you wish to set up your own back-end, you will have to change this url. To do so:

- Modify the baseUrl variable found on _line 10_ in _/api/index.js_, e.g.:

```js
const baseUrl = "http://localhost:5500/";
```

This module includes the Vite build tool to provide Hot Module Replacement (HMR) so you can test updates to the code without refreshing your browser.

- A script has been set up to run a local instance using Vite:

```bash
npm run dev
```

- The local instance will be available on your browser at http\://localhost:5173/, by default.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

If nothing is loading, it is possible you are not receiving any data from the back-end. If you're using the default url for the back-end, two things might have happened:

- The back-end is hosted on a free server at Render, and takes a while to spin-up. Give it a minute or two and see if things are loading up quicker.
- If nothing is loading after a minute or two, it might be that the database hosted on Supabase has gone dormant - please send a message to the [author](https://github.com/TamNorth) to wake it up!

## About the Author

[![Tam North][TamNorth]][TamNorth-url]

Tam is a full-stack JavaScript developer and [Northcoders](https://www.northcoders.com/) alumna. She is a published author in planetary science, having conducted research in meteoritics and sedimentology at the University of Cambridge, Imperial College London and the California Institute of Technology. In her free-time, she likes to skateboard, climb, and run D&D, which provides her with endless inspiration for more coding projects.

### Other projects

<a href=https://github.com/uimran19/Tuse>
  <img src=https://raw.githubusercontent.com/uimran19/Tuse/main/images/tuse_logo.png alt="Tuse" height="40"/>
</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

This project was built as part of the [Northcoders](https://www.northcoders.com/) Software Development Bootcamp. The author's sincere thanks go to the fine folks over there.

Funding for the bootcamp was provided by the UK [Department for Education](https://www.gov.uk/government/organisations/department-for-education).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[product-screenshot]: public/images/site_demo.png
[React.dev]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://react.dev/
[NodeJS.org]: https://img.shields.io/badge/Node.js-black?style=for-the-badge&logo=nodedotjs&logoColor=5FA04E
[Node-url]: https://nodejs.org/
[ExpressJS.com]: https://img.shields.io/badge/Express-black?style=for-the-badge&logo=express&logoColor=white
[Express-url]: https://expressjs.com/
[PostgreSQL.org]: https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white
[Postgresql-url]: https://www.postgresql.org/
[JestJS.io]: https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white
[Jest-url]: https://jestjs.io/
[Github]: https://img.shields.io/badge/Supertest-000000?style=for-the-badge&logo=github&logoColor=white
[Supertest-Github-url]: https://github.com/forwardemail/supertest
[Styled-Components.com]: https://img.shields.io/badge/styled_components-20232A?style=for-the-badge&logo=styled-components&logoColor=DB7093
[Styledcomponents-url]: https://styled-components.com/
[TamNorth]: https://avatars.githubusercontent.com/u/200278157
[TamNorth-url]: https://github.com/TamNorth
[Tuse-logo]: https://raw.githubusercontent.com/uimran19/Tuse/main/images/tuse_logo.png
[Tuse-url]: https://github.com/uimran19/Tuse
