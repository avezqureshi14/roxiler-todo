import React from "react";
import { Card, Button } from "antd";
const AboutPage = () => {
  const resumeUrl = "https://drive.google.com/file/d/19NBC0Qnw8-RTdr8O4aBP8epVrWP0anz5/view?usp=share_link";
  const mail = "mailto:avezqureshi4785@gmail.com"
  const github = "https://github.com/avezqureshi14/roxiler-todo"

  return (
    <>
    
    <div className="cardContainer">
    <Card className="sha cardWIdth"  title="About Me">
      <p>
        My name is Mohammad Avez Qureshi and I am writing to introduce myself for consideration in your project. I am an individual with a strong interest in MERN stack development, as well as proficiency in HTML, CSS, and JavaScript. Currently pursuing a BE in Information Technology, I am always eager to expand my skillset and learn new technologies. I believe that my enthusiasm, curiosity, and willingness to learn would make me a valuable addition to your project.
      </p>
      <Button  style={{'margin':'1rem',"marginLeft":"0rem"}}  type="primary" href={resumeUrl} target="_blank" download>
        Download Resume
      </Button>
      <Button  style={{'margin':'1rem',"marginLeft":"0rem"}}  type="primary" href={mail} target="_blank" download>
        Mail Me
      </Button>
    </Card>
    </div>

    <div className="cardContainer">
    <Card className="sha cardWIdth" title="About Project">
    <p><strong>About Project:</strong> </p>
    <p><strong>TODO API Integration:</strong> Integrate an API to list the todos in a left-hand side table. The table should display columns for ID, Title, Status, and Action.</p>
    <p><strong>Ascending and Descending Sort:</strong> Implement a feature to sort the Todo ID column in ascending and descending order.</p>
    <p><strong>Search Functionality:</strong> Add search functionality that searches all fields of the table. If the search keyword matches any column, that row should be displayed in a list.</p>
    <p><strong>Clearing Search:</strong> On clearing the search keyword, the table should display in its initial state.</p>
    <p><strong>View User:</strong> EOn clicking the "View User" button, call the user detail API and display a right-hand side table that includes details such as Todo ID, Todo Title, User ID, User Name, and Email.</p>
    <Button  style={{'margin':'1rem',"marginLeft":"0rem"}}  type="primary" href={github} target="_blank" download>
        Github Link
      </Button>
    </Card>
    </div>

    </>
    );
  };

export default AboutPage;
