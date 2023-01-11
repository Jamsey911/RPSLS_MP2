# RPSLS Game!
(Developer: James Lynch)

![Mockup image](docs/am-i-repsonsive.png)

[Live webpage](https://jamsey911.github.io/RPSLS_MP2/index.html)

## Table of Content

1. [Introduction](#introduction)
2. [Design Goals](#design-goals)
3. [Design Features](#design-features)
4. [User Story](#user-story)
5. [Wireframes](#wireframes)
6. [Testing](#validation)
8. [Bugs](#Bugs)
9. [Deployment](#deployment)
10. [Credits](#credits)
11. [Tools used and Coding Inspiration](#tools-used-and-coding-inspiration)

## INTRODUCTION

This project was developed to showcase an evolved game of Rock Paper Scissors to incorporate two extra variables with the options of Lizard or Spock. This was made popular through the TV series, 'The Big Bang Theory'. This game creates a 1 v 1 againest the computer in a game of chance. To view the full website please use the clickable link via the heading at the top of this page or alternatively, click on the following link to access the site: [Rock Paper Scissors Lizard Spock](https://jamsey911.github.io/RPSLS_MP2/index.html)

<!-- <p ><a href="#home">Return to table of contents</a></p><p id="intro"></p> -->

## DESIGN GOALS

The project idea has been created for the purpose to build an interactive front-end site that should respond to the users' when they interact with the data presented. This site should allow users to actively engage and change the way the information is displayed to achieve an end goal.

## DESIGN FEATURES

### Header

![Header Bar](docs/features/df-header.png)

This is a simple header displaying the title of the game. 

### Footer

![Footer](docs/features/df-footer.png)

The footer has been designed to indicate to the user of where the icon's are that can be selected.

### Page Design
  The page design has been specifically created to portray a clean, fun and engaging experience for the user. The page content is presented in a clear and accessible fashion for the user to understand.

### Main Page

![Header Bar](docs/features/df-main-page.png)

The main game area is displayed below the header. It has 4 elements, the Rules, Scoreboard, Results and the Selections. The Rules is displayed in the top left with an easy to read listed format. The Scoreboard is displayed centraly to give the user clear indication of the users score compared to the computers score. The Result section is displayed in the top right to give the user the display of the selections selected. And the Selections are displayed below in which these are the icons displayed for the user to select in order to interact with the game. 

The Selections screen has two alternatives when a game is completed in which the selections are removed for a breif moment and replaced with a display based on the result of the game.A green display is created when the user wins and a red display when the user has lost.

### WIN SCREEN

![Win Screen](docs/features/df-win-screen.png)

### LOSE SCREEN

![Lose Screen](docs/features/df-lose-screen.png)


### COLOUR PALETTE
  The colour palette is purposefully simple and clean. It consists of the following six colour choices:

![Color Palette](docs/features/df-color-palette.JPG)

The colour sheme was chosen as a navy and grey/silver theme with a light pink backround in the body. This was also aided by adobe color in which a Complementary Color was selected. I feel the colour's contrast well to give the site a consistency aesthetic flow for a pleasing user experience.

### Font
Bakbak One is the font usedn for the site. I feel it has an appealing look thats complements all elements of the page. I think this font stands out well while not being too aggressive.
San-serif was used as my backup.


## USER STORY

#### First-time User
1. As a first time user, I want to find the site easy to use
2. As a first time user, I want the site to be visuallly appealing
3. As a first time user, I want all information to be present
4. As a first time user, I want all rules to the game to be clearly indicated
5. As a first time user, I want a game that is interactive
6. As a first time user, I want no confusion in regards to the exact landing page

#### Returning User
1. As a returning user, I want a game that is replayable
2. As a returnign user, I want to play a simple game of chance
3. As a returning user, I want an easy to understand game interface
4. As a returning user, I want a game that is interactive

#### Site Owner
1. As the site owner, I want users to find the site easy to use
2. As the site owner, I want the site to be visuallly appealing
3. As the site owner, I want all information to be present

## WIREFRAMES

For the site pages the wireframe preliminary layout designs can be seen below. These were created using [Balsamiq](https://balsamiq.com/):

- Main Page

![Wireframes](docs/wireframes/rpsls-wireframes.png)

- 404 Page

![Wireframe](docs/wireframes/rpsls-404-wireframe.png)

## TESTING

### HTML Validation
The W3C Markup Validation Service was used to validate the HTML of the website. All pages pass with no errors or warnings.
<details><summary>Index</summary>
<img src="docs/validation/val-html.JPG">
</details>
<!-- <details><summary>404</summary>
<img src="docs/validation/val-html-404.JPG">
</details> -->

### CSS Validation
The W3C Jigsaw CSS Validation Service was used to validate the CSS of the website.
All pages pass with no errors or warnings.
<details><summary>Index</summary>
<img src="docs/validation/val-css.JPG">
</details>
<!-- <details><summary>404</summary>
<img src="docs/validation/val-css-404.JPG">
</details> -->

### Accessibility
The WAVE WebAIM web accessibility evaluation tool was used to ensure the website met high accessibility standards. All pages pass with 0 errors.
<details><summary>Index</summary>
<img src="docs/validation/val-accessibility.png">
</details>
<!-- <details><summary>404</summary>
<img src="docs/validation/access-404.JPG">
</details> -->

### Performance 
Google Lighthouse in Google Chrome Developer Tools was used to test the performance of the website. 

<details><summary>Index</summary>
<img src="docs/validation/val-lighthouse.png">
</details>
<!-- <details><summary>404</summary>
<img src="docs/validation/light-404.JPG">
</details> -->

### Javascript Validation
[JS Hint](https://jshint.com/) was used to detect errors and potential problems in the JavaScript code.

<details><summary>Javascript Testing</summary>
<img src="docs/validation/val-js.JPG">
</details>

### Performing tests on various devices 
The website was tested on the following devices:
- HP Pavilion laptop
- Samsung S21+
- Ipad (8th Generation)

In addition, the website was tested using Google Chrome Developer Tools Device Toggeling option for all available device options.

### Browser compatability
The website was tested on the following browsers:
- Google Chrome
- Microsoft Egde
- Apple Safari

### Testing user stories

1. As a first time user, I want to find the site easy to use

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Footer section | Navigate to website | Details showing how to play the game | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/user-story-testing/">
</details>

2. As a first time user, I want the site to be visuallly appealing

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Results Section | Navigate to the home page | Results appear when selectios are chosen | Works as expected |
| Selections section | Navigate to the home page | See selections transform or be replaced when the user wins'/loses' | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/user-story-testing/">
<img src="docs/user-story-testing/">
</details>

3. As a first time user, I want all information to be present

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Home page | Navigate to the Home Page | Displayed on home page is all information needed | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/user-story-testing/">
</details>

4. As a first time user, I want all rules to the game to be clearly indicated

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Rules Section | Navigate to the home page  | Rules can be seen on the left  | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/user-story-testing/">
</details>









