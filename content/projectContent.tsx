import { FaJsSquare, FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import {
  SiPostgresql,
  SiFirebase,
  SiMaterialui,
  SiBootstrap,
  SiCss3,
} from "react-icons/si";
// import { Typescript } from "@icons-pack/react-simple-icons";
import virtualbookshelf from "../public/images/vb.png";
import widgetgrid from "../public/images/wg.png";
import timer from "../public/images/timer.png";
import sidebar from "../public/images/sidebar.png";
import wiffle from "../public/images/wiffle.png";
import predictionBot from "../public/images/predictionBot.png";

let projectData = [
  {
    Icons: [
      <FaPython size={50} />,
      <FaReact size={50} />,
      <FaNodeJs size={50} />,
      <SiPostgresql size={50} />,
      <SiMaterialui size={50} />,
    ],
    language: "Python",
    title: "Prediction Bot",
    subHeader: "Python | React | TypeScript | PostgreSQL |  Node.js",
    img: "/images/predictionBot.png",
    repoUrl: "https://github.com/AlexanderOlivares/sportsPredictionBot",
    demo: "https://sports-prediction-bot.herokuapp.com/",
    shortDescrip:
      "An automated tool that scrapes predicted sports scores from the web and makes picks based on the Vegas betting line",
    longDescrip: `Prediction bot scrapes computer-predicted scores from oddShark.com and dRatings.com and averages those scores for each matchup. 
      It then makes a pick by analyzing the Vegas points spread and determining if the favored team will cover the spread`,
  },
  {
    Icons: [
      <FaReact size={50} />,
      <FaNodeJs size={50} />,
      <SiPostgresql size={50} />,
      <SiMaterialui size={50} />,
    ],
    language: "TypeScript",
    title: "Travis Heights Wiffle Ball",
    subHeader:
      "TypeScript | React | PostgreSQL | Express | Node.js | REST API | Nodemailer | Material UI",
    img: "/../public/images/wiffle.png",
    repoUrl: "https://github.com/AlexanderOlivares/TravisHeightsWiffleballLeague",
    demo: "https://wiffle.herokuapp.com/",
    shortDescrip: "Website for a newly formed wiffle ball league in Austin, TX.",
    longDescrip: `A website for a local wiffle ball league to attract players and notifiy them of upcoming games. Uses the Google Maps API to help guide people to the field. Signup confirmation email (SMTP) sent using Nodemailer `,
  },
  {
    Icons: [
      <FaReact size={50} />,
      <FaNodeJs size={50} />,
      <SiPostgresql size={50} />,
      <SiBootstrap size={50} />,
    ],
    language: "Node",
    title: "Sidebar List",
    subHeader:
      "PostgreSQL | Express | React | Node.js | JWT | REST api | Bootstrap | EmailJS",
    img: "/../public/images/sidebar.png",
    repoUrl: "https://github.com/AlexanderOlivares/sidebar-list",
    demo: "https://sidebar-list.herokuapp.com/",
    shortDescrip:
      "Login with demo credentials username: janedoe@yahoo.com | password: password1234",
    longDescrip: `Create your own private list or invite a friend to a "sidebar list". Just as judges and lawyers have a sidebar for private conversations, you and your invited editor will have a private list. Only you and your editor will be authorized to create, edit and delete items from your shared-list. I made this project so that my girlfriend and I could add items to our grocery list independently. This app also works great for a list of "things to pack" for a vacation.`,
  },
  {
    Icons: [<FaReact size={50} />, <SiFirebase size={50} />],
    language: "React",
    title: "Virtual Bookshelf",
    subHeader: "React | Firebase | Styled Components",
    img: "/../public/images/vb.png",
    repoUrl: "https://github.com/AlexanderOlivares/Virtual-Bookshelf",
    demo: "https://alexanderolivares.github.io/Virtual-Bookshelf/",
    shortDescrip:
      "Login with demo credentials username: janedoe@yahoo.com | password: password1234",
    longDescrip:
      "Virtual bookshelf is place where you can visualize your collection of audiobooks or e-books on a single shelf. The book search is powered by the Google Books API. NYT Besteller List API shows you the most popular books on the homepage. EmailJS API allows you to email your shelf to friends. Login with username/password or sign-in with Google.",
  },
  {
    Icons: [<FaJsSquare size={50} />, <SiCss3 size={50} />],
    language: "JavaScript",
    title: "Widget Grid",
    subHeader: "Vanilla JavaScript | CSS",
    img: "/../public/images/wg.png",
    repoUrl: "https://github.com/AlexanderOlivares/Widget-Grid",
    demo: "https://alexanderolivares.github.io/Widget-Grid/",
    shortDescrip: "Four-in-one widget app built with CSS grid",
    longDescrip:
      "It's a weather app, notepad, calculator and an alarm clock/timer/pomodoro timer all wrapped into one project. I made this app as a helper for doing coding challenges. I set up the widget grid on my secondary monitor then I get on Codewars, set the timer and code away. The calculator comes in handy on math related challenges and the notepad is nice for jotting down things to lookup later. The weather app uses the OpenWeatherMap API and works for all U.S. cities",
  },
  {
    Icons: [<FaJsSquare size={50} />, <SiBootstrap size={50} />],
    language: "JavaScript",
    title: "TV Countdown Timer",
    subHeader: "Vanilla JavaScript | Bootstrap",
    img: "/../public/images/timer.png",
    repoUrl: "https://github.com/AlexanderOlivares/tvTimer",
    demo: "https://alexanderolivares.github.io/tvTimer/",
    shortDescrip:
      "A voiced countdown timer for TV news producers and directors that utilizes the ResponsiveVoice Text To Speech API",
    longDescrip:
      "A solution to a broken timer. Working in TV the seconds count. When our control room timer broke I put this app together to help us countdown our anchors and reporters. I built in functionality that allows you to accurately countdown field reporters who hear everything on a 2-7 second delay. This app is used daily at CBS Austin to time shows and recordings.",
  },
];

export default projectData;
