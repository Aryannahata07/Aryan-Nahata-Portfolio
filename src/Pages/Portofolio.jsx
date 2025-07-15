import React, { useEffect, useState, useCallback } from "react";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";

import CardProject from "../components/CardProject";
import TechStackIcon from "../components/TechStackIcon";
import Certificate from "../components/Certificate";
import { Code, Award, Boxes, Github } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

// Toggle button component
const ToggleButton = ({ onClick, isShowingMore }) => (
  <button
    onClick={onClick}
    className="px-3 py-1.5 text-slate-300 hover:text-white text-sm font-medium transition-all duration-300 ease-in-out flex items-center gap-2 bg-white/5 hover:bg-white/10 rounded-md border border-white/10 hover:border-white/20 backdrop-blur-sm group relative overflow-hidden"
  >
    <span className="relative z-10 flex items-center gap-2">
      {isShowingMore ? "See Less" : "See More"}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`transition-transform duration-300 ${
          isShowingMore ? "group-hover:-translate-y-0.5" : "group-hover:translate-y-0.5"
        }`}
      >
        <polyline points={isShowingMore ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}></polyline>
      </svg>
    </span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500/50 transition-all duration-300 group-hover:w-full"></span>
  </button>
);

// Tab panel
function TabPanel({ children, value, index, ...other }) {
  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && (
        <Box sx={{ p: { xs: 1, sm: 3 } }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

// Hardcoded Data
const projects = [
    {
      id: 1,
      Img: "/SnapSearch.png",
      Title: "SnapSearch – AI Image Search",
      Description: "Enables smart image search by extracting and embedding meaningful keywords from user-uploaded images.",
      Link: "https://github.com/Mokshshah2005/Snapsearch",
      Github: "https://github.com/Mokshshah2005/Snapsearch"
    },
    {
      id: 2,
      Img: "/TabStack.png", 
      Title: "TabStack – Smart Link Organizer",
      Description: "Organizes and saves browser tabs into categories for easy access and reduced clutter across devices.",
      Link: "https://tabstack-9eea3.web.app/",
      Github: "https://github.com/Aryannahata07/TabStack"
    },
    {
      id: 3,
      Img: "/To-Do-List.png", 
      Title: "To-Do List Web App",
      Description: "Helps users manage tasks efficiently with features to add, edit, and track daily to-dos.",
      Link: "https://aryannahata07.github.io/TO-DO-LIST/",
      Github: "https://github.com/Aryannahata07/TO-DO-LIST"
    },
    {
      id: 4,
      Img: "/Tic-Tac-Toe.png",
      Title: "Tic-Tac-Toe Game",
      Description: "A classic two-player game featuring interactive gameplay, win/draw detection, and a dynamic points scoreboard.",
      Link: "https://aryannahata07.github.io/TIC-TAC-TOE/",
      Github: "https://github.com/Aryannahata07/TIC-TAC-TOE"
    },
    {
      id: 5,
      Img: "/Job-Application.png",
      Title: "Job Application",
      Description: "A front‑end practice project featuring a responsive job application form with input fields and validation UI.",
      Link: "https://aryannahata07.github.io/JOB-APPLICATION-HTML-CSS/",
      Github: "https://github.com/Aryannahata07/JOB-APPLICATION-HTML-CSS"
    },
    {
      id: 6,
      Img: "/Swachhta-Saathi.png",
      Title: "Swachhta-saathi",
      Description: "Built a community-focused platform that incentivizes citizens to submit segregated waste through a digital point and reward system, encouraging cleaner surroundings.",
      Link: "https://aryannahata07.github.io/Swachhta-Saathi/",
      Github: "https://github.com/Aryannahata07/Swachhta-Saathi"
    },
  // Add more...
];

const certificates = [
  { id: 1, Img: "/frontend-Coursera-Meta.jpg" },
  { id: 2, Img: "/Python-Coursera-Google.jpg" },
  { id: 3, Img: "/Generative-AI-certificate.jpg" },
  { id: 4, Img: "/Computer-Vision-certificate.jpg" },
  // Add more...
];

const techStacks = [
  { icon: "/icons/html.svg", language: "HTML" },
  { icon: "/icons/css.svg", language: "CSS" },
  { icon: "/icons/javascript.svg", language: "JavaScript" },
  { icon: "/icons/tailwind.svg", language: "Tailwind CSS" },
  { icon: "/icons/reactjs.svg", language: "ReactJS" },
  { icon: "/icons/vite.svg", language: "Vite" },
  { icon: "/icons/nodejs.svg", language: "Node JS" },
  { icon: "/icons/bootstrap.svg", language: "Bootstrap" },
  { icon: "/icons/firebase.svg", language: "Firebase" },
  { icon: "/icons/MUI.svg", language: "Material UI" },
  { icon: "/icons/vercel.svg", language: "Vercel" },
  { icon: "/icons/SweetAlert.svg", language: "SweetAlert2" },
];


export default function Portfolio() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const isMobile = window.innerWidth < 768;
  const initialItems = isMobile ? 4 : 6;

  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);

  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  const handleChange = (event, newValue) => setValue(newValue);
  const toggleShowMore = useCallback((type) => {
    if (type === "projects") setShowAllProjects((prev) => !prev);
    else setShowAllCertificates((prev) => !prev);
  }, []);

  const displayedProjects = showAllProjects ? projects : projects.slice(0, initialItems);
  const displayedCertificates = showAllCertificates ? certificates : certificates.slice(0, initialItems);

  return (
    <div className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] bg-[#030014] overflow-hidden" id="Portofolio">
      {/* Header */}
      <div className="text-center pb-10" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          <span style={{
            color: '#6366f1',
            backgroundImage: 'linear-gradient(45deg, #6366f1 10%, #a855f7 93%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Portfolio Showcase
          </span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
          Explore my journey through projects, certifications, and technical expertise.
        </p>
      </div>

      {/* Tabs */}
      <Box sx={{ width: "100%" }}>
        <AppBar
          position="static"
          elevation={0}
          sx={{
            bgcolor: "transparent",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "20px",
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "linear-gradient(180deg, rgba(139, 92, 246, 0.03), rgba(59, 130, 246, 0.03))",
              backdropFilter: "blur(10px)",
              zIndex: 0,
            },
          }}
          className="md:px-4"
        >
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            variant="fullWidth"
            sx={{
              minHeight: "70px",
              "& .MuiTab-root": {
                fontSize: { xs: "0.9rem", md: "1rem" },
                fontWeight: "600",
                color: "#94a3b8",
                textTransform: "none",
              },
              "& .MuiTabs-indicator": { height: 0 },
            }}
          >
            <Tab icon={<Code className="mb-2 w-5 h-5" />} label="Projects" {...a11yProps(0)} />
            <Tab icon={<Award className="mb-2 w-5 h-5" />} label="Certificates" {...a11yProps(1)} />
            <Tab icon={<Boxes className="mb-2 w-5 h-5" />} label="Tech Stack" {...a11yProps(2)} />
          </Tabs>
        </AppBar>

        {/* Tab Content */}
        <TabPanel value={value} index={0} dir={theme.direction}>
          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5">
            {displayedProjects.map((project, index) => (
              <div key={project.id} data-aos="fade-up" data-aos-duration="1000">
                <CardProject {...project} />
              </div>
            ))}
          </div>
          {projects.length > initialItems && (
            <div className="mt-6 flex justify-start">
              <ToggleButton onClick={() => toggleShowMore("projects")} isShowingMore={showAllProjects} />
            </div>
          )}
        </TabPanel>

        <TabPanel value={value} index={1} dir={theme.direction}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {displayedCertificates.map((cert, index) => (
              <div key={cert.id} data-aos="fade-up" data-aos-duration="1000">
                <Certificate ImgSertif={cert.Img} />
              </div>
            ))}
          </div>
          {certificates.length > initialItems && (
            <div className="mt-6 flex justify-start">
              <ToggleButton onClick={() => toggleShowMore("certificates")} isShowingMore={showAllCertificates} />
            </div>
          )}
        </TabPanel>

        <TabPanel value={value} index={2} dir={theme.direction}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 pb-[5%]">
            {techStacks.map((stack, index) => (
              <div key={index} data-aos="fade-up" data-aos-duration="1000">
                <TechStackIcon {...stack} />
              </div>
            ))}
          </div>
        </TabPanel>
      </Box>
    </div>
  );
}
