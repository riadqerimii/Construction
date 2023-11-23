// projectData.js
import ourimg1 from "../Img/projects/remodeling-1.jpg";
import ourimg2 from "../Img/projects/remodeling-2.jpg";
import ourimg3 from "../Img/projects/remodeling-3.jpg";
import ourimg4 from "../Img/projects/repairs-1.jpg";
import ourimg5 from "../Img/projects/repairs-2.jpg";

const projectData = {
  1: {
    title: "All",
    images: [
      ourimg1,
      ourimg2,
      ourimg3,
      ourimg4,
      ourimg5,
      ourimg1,
      ourimg2,
      ourimg1,
      ourimg2,
      ourimg3,
      ourimg4,
      ourimg5,
      ourimg1,
    ],
  },
  2: {
    title: "Project 1",
    images: [ourimg3, ourimg1, ourimg4, ourimg3, ourimg1, ourimg4],
  },
  3: {
    title: "Project 2",

    images: [ourimg3, ourimg3, ourimg1, ourimg3, ourimg3, ourimg1],
  },
  4: {
    title: "Project 3",

    images: [ourimg4, ourimg5, ourimg3, ourimg1, ourimg4, ourimg5],
  },
  5: {
    title: "Project 4",

    images: [ourimg5, ourimg2, ourimg3, ourimg1, ourimg4, ourimg5],
  },
};

export default projectData;
