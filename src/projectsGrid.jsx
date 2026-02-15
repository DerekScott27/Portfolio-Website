import React, {useState} from 'react';
import ProjectCard from './projectCard';



const projectData = [
        {
            id: 1,
            title: 'Fighter Tracker Full Stack Application',
            link: 'https://fighter-tracker.vercel.app/',
            description: 'Full stack application that allows you to track and analyze your favorite combat sports athletes.',
            languages: ['HTML', 'JS', 'SQL', 'CSS']
        },

        {
          id: 2,
          title: 'BoyToy Product Website',
          link: 'https://github.com/DerekScott27/BoyToyWebSite/tree/Main',
          description: 'Product website for BoyToy brand.',
          languages: ['HTML', 'JS', 'React', 'CSS']

        },

        {
          id: 3,
          title: 'CRUD (Create, Read, Update, Delete) App',
          link: 'https://github.com/DerekScott27/PersonnelInfo',
          description: 'The application allows users to create, read existing, update, and delete staff members from the database.',
          languages: ['C#']
        },

        {
          id: 4,
          title: 'Scary World',
          link: 'https://gamejolt.com/games/ScaryWorld/982573',
          description: '2d side scroller where you battle the most fearsome creatures your little self has ever seen! #horror #action #adventure #platformer',
          languages: ['C#']
        }

    ];

function ProjectsGrid(){
    /*
        const colors = ["Black", "Blue", "Red", "Green", "Yellow", "Purple"];

    const [color, setColor] = useState(colors[0]);

    const [index, setIndex] = useState(0);

    const onHover = () => {

        const nextColor = (index + 1) % colors.length;

        setIndex(nextColor);

        setColor(colors[nextColor])
    }
*/

    const colorArray = ["Black", "Blue", "Red", "Green", "Orange", "Purple"];


    const [colorItem, setColorItem] = useState(colorArray[0]);

    const [index, setIndex] = useState(0);

    const onMouse = () => {

        const nextIndex = (index + 1) % colorArray.length;

        setIndex(nextIndex);

        setColorItem(colorArray[nextIndex]);

    }
 
  
    return (
        <>

        <h2 className="h2-projects" onMouseOver={onMouse} style={{ color: colorItem }}>
            Projects
        </h2>
    <div className="projects-grid">

        {/*Maps the projectData array and in the new array returns the ProjectCard component
    
         and assigns the projectItem attribute with the value of project (the projectData object /element)*/}

    {projectData.map((project)=>{
        return <ProjectCard projectItem={project} key={project.id} />
    })}
        
    </div>


        
    </>
    
    )
}
export default ProjectsGrid;




