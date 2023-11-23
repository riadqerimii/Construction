// projectData.js
import ourimg1 from "../Img/projects/remodeling-1.jpg";
import ourimg2 from "../Img/projects/remodeling-2.jpg";
import ourimg3 from "../Img/projects/remodeling-3.jpg";
import ourimg4 from "../Img/projects/repairs-1.jpg";
import ourimg5 from "../Img/projects/repairs-2.jpg";

const projectData = {
  1: {
    title: "All",
    images: [ourimg1, ourimg2, ourimg3, ourimg4, ourimg5],
  },
  2: {
    title: "Project 1",
    images: [ourimg3, ourimg1, ourimg4, ourimg3],
    link: "Projectone",
  },
  3: {
    title: "Project 2",
    images: [ourimg4, ourimg3, ourimg5],
    link: "Projecttwo",
  },
  4: {
    title: "Project 3",
    images: [ourimg1, ourimg2, ourimg3],
    link: "Projectthree",
  },
};

export default projectData;
