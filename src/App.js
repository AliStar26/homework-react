import React from "react";
import "./App.css";
import Personal from "./components/Personal";

class App extends React.Component {
  render() {
    const personalInfo = {
      fullName: "Алихан",
      phone: "707700707",
      email: "asdsad@gmail.com",
      city: "Astana",
      experience: "1.5",
      skills: [".Net Framework", "RabbitMq", "PostgreSQL"],
    };

    return (
      <div className="App">
        <Personal
          fullName={personalInfo.fullName}
          phone={personalInfo.phone}
          email={personalInfo.email}
          city={personalInfo.city}
          experience={personalInfo.experience}
          skills={personalInfo.skills}
        />
      </div>
    );
  }
}

export default App;
