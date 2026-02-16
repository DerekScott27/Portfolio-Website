import React from 'react';

//Creates the ProjectCard component with a paramter named projectItem
function ProjectCard({projectItem}){

  const { link, title, description, languages = [] } = projectItem;

  //Creates the projectItem object with the same named properties as in the ProjectData array from the projectsGrid component. 



    //getLanguageClass helps match the language to the associated css language class so styling applies properly.

    const getLanguageClass = (language) => {
    switch (language.toLowerCase()) {
        case 'html': return 'html'; 
        case 'css': return 'css';   
        case 'javascript':
        case 'js': return 'js-class'; 
        case 'react': return 'react-class'; 
        case 'sql': return 'sql-class'; 
        case 'c#': return 'csharp-class'; 
        case 'dotnet': 
        case '.net': return 'net-class'; 
        case 'entity framework': return 'entity-framework'; 
        case 'unity': return 'unity-class';
        case 'python': return 'python-class'; 
        case 'php': return 'php-class'; 
        case 'node.js': return 'nodejs-class'; 
        default: return ''; 
    }
};

    return (



<div className="project-child">
  {/* The div; link and p elements which contain the project cards */}
  <br />
  <a href={link}>{title}</a>

 
  <p className={"project-p"}>{description}</p>

  {/* The languages will be rendered within this div */}
  <div className="languages-grid">
    {/* Individual language tags will be generated here */}
    {languages.map((language, index) => ( 
    <p 
        key={index} 
        className={`languages ${getLanguageClass(language)}`}
    >
        {language}
    </p>
))
    }
    
  </div>
</div>
    )
}
export default ProjectCard;


