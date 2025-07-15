import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';

const CardProject = ({ Img, Title, Description, Link: ProjectLink,Github, id }) => {
  // Handle kasus ketika ProjectLink kosong
  const handleLiveDemo = (e) => {
    if (!ProjectLink) {
      console.log("ProjectLink wrong");
      e.preventDefault();
      alert("Live demo link is not available");
    }
  };
  
  const handleDetails = (e) => {
    if (!id) {
      console.log("ID wrong");
      e.preventDefault();
      alert("Project details are not available");
    }
  };
  

  return (
    <div className="group relative w-full h-full">
  <div className="relative flex flex-col h-full overflow-hidden rounded-xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-300 hover:shadow-purple-500/20">
    
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>

    {/* Card Body */}
    <div className="relative p-5 z-10 flex flex-col h-full">
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={Img}
          alt={Title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="mt-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
          {Title}
        </h3>

        {/* Description area */}
        <p className="text-gray-300/80 text-sm leading-relaxed whitespace-normal break-words flex-grow">
          {Description}
        </p>

        {/* Actions */}
        <div className="pt-4 flex items-center justify-between mt-auto">
          {Github ? (
            <a
              href={Github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
            >
              <span className="text-sm font-medium">GitHub</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          ) : (
            <span className="text-gray-500 text-sm">Not Available</span>
          )}
          {ProjectLink ? (
            <a
              href={ProjectLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLiveDemo}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/90 transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
            >
              <span className="text-sm font-medium">Live Demo</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          ) : (
            <span className="text-gray-500 text-sm">Demo Not Available</span>
          )}
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default CardProject;