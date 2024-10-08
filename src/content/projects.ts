import aiello from "../assets/aiello.jpg";
import hello from "../assets/hello.jpg";
import peer from "../assets/peer.jpg";
import lango from "../assets/lango.jpg";
//import landing from "../assets/landing.jpg";
import gym from "../assets/gym.png";
import rickmorty from "../assets/rickmorty.png";
import expressions from "../assets/expressions.png";

const data = [

  {
    id: 2,
    name: "Hello Social Media",
    github: "https://github.com/sagar803/",
    live: "https://hello-social-media.netlify.app/",
    tech: "React.js - Node.js - Express.js - socket.io",
    about: "A social media application with features like user profiles, friend connections, messaging, content sharing (photos), user search, and account deactivation, providing a comprehensive and interactive platform for users to connect and engage",
    imageURL: hello,
  },
  {
    id: 3,
    name: "Peer",
    github: "https://github.com/sagar803/",
    live: "https://peer-client.vercel.app/",
    tech: "React.js - Node.js - Socket.io - Express.js - WebRtc",
    about: "Peer, a real-time video call app using the MERN stack and WebRTC. Leveraged Socket.IO for smooth signaling, ensuring seamless session establishment and enhancing the user experience",
    imageURL: peer,
  },
  {
    id: 4,
    name: "Lango Learn",
    github: "https://github.com/sagar803/",
    live: "https://github.com/sagar803/",
    tech: "React Native - Expo",
    about: "Lango, a React Native language learning app featuring speech recognition for pronunciation practice. The app includes interactive lessons, quizzes, and personalized user profiles, with backend deployment on Render and frontend on Netlify, backed by MongoDB Atlas for efficient data storage",
    imageURL: lango,
  },
  {
    id: 5,
    name: "Aiello",
    github: "https://github.com/sagar803/",
    live: "https://aiello.netlify.app/",
    tech: "React.js - Node JS - OpenAI",
    about: "Introducing Aiello, your AI buddy on a SaaS platform offering Natural Language Processing and creative capabilities. Engage in conversational Q&A and unleash personalized image or music generation with ease.",
    imageURL: aiello,
  },
  {
    id: 6,
    name: "Gym",
    github: "https://github.com/sagar803/https://github.com/sagar803/gym-ts-tailwind",
    live: "https://gym-ts-tailwind.netlify.app",
    tech: "React, TypeScript, Tailwind CSS",
    about: "Dynamic gym website crafted with React and TypeScript, ensuring a robust and type-safe codebase. Enhanced with sleek UI using Tailwind CSS for a modern and responsive user experience.",
    imageURL: gym,
  },
  {
    id: 7,
    name: "Rick-Morty Wiki",
    github: "https://github.com/sagar803/rick-and-morty",
    live: "https://rickmorty-neon.vercel.app/",
    tech: "React JS",
    about: "Dive into the dynamic world of React JS with my front-end project, showcasing an immersive Rick and Morty Wikipedia experience. Explore characters, episodes, and trivia seamlessly through a visually engaging and user-friendly interface.",
    imageURL: rickmorty,
  },
  {
    id: 8,
    name: "Expressions",
    github: "https://github.com/sagar803",
    live: "https://hume-expression.vercel.app/",
    tech: "Next JS - Hume API ",
    about: " app that analyzes audio or video inputs to detect and interpret emotional expressions in real-time, providing insights into mood and tone. Perfect for enhancing communication and understanding emotional cues.",
    imageURL: expressions,
  },
];

export default data;
/*
{
  id: 1,
  name: "Landing",
  github: "https://github.com/sagar803/",
  live: "https://hirequotient-task1.vercel.app/",
  tech: "React JS",
  about: "Introducing a captivating UI design. Navigate effortlessly and experience digital elegance. Your seamless journey begins here.",
  imageURL: landing,
},
*/