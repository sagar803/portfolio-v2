import aiello from "../assets/aiello.jpg";
import hello from "../assets/hello.jpg";
import peer from "../assets/peer.jpg";
import lango from "../assets/lango.jpg";
import landing from "../assets/landing.jpg";

const data = [
  {
    id: 1,
    name: "Landing",
    github: "https://github.com/sagar803/",
    live: "https://hirequotient-task1.vercel.app/",
    tech: "React JS",
    about: "Introducing a captivating UI design. Navigate effortlessly and experience digital elegance. Your seamless journey begins here.",
    imageURL: landing,
  },
  {
    id: 2,
    name: "Hello Social Media",
    github: "https://github.com/sagar803/",
    live: "https://hello-social-media.netlify.app/",
    tech: "React.js - Node.js - Express.js",
    about: "Developed a dynamic social media app using React.js and Material UI, featuring user profiles, friend connections, and secure content sharing. Implemented JWT for robust user authentication, ensuring a seamless and secure experience.",
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
    live: "https://journeygenie.vercel.app/",
    tech: "React.js - Node JS - OpenAI",
    about: "Introducing Aiello, your AI buddy on a SaaS platform offering Natural Language Processing and creative capabilities. Engage in conversational Q&A and unleash personalized image or music generation with ease.",
    imageURL: aiello,
  },

];

export default data;
