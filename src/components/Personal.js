import React, { Component } from "react";

class Personal extends Component {
  render() {
    const { fullName, phone, email, city, experience, skills } = this.props;

    return (
      <div>
        <h1>Персональная страница</h1>
        <p>ФИО: {fullName}</p>
        <p>Телефон: {phone}</p>
        <p>Email: {email}</p>
        <p>Город проживания: {city}</p>
        <p>Опыт работы: {experience}</p>
        <p>Навыки: {skills.join(", ")}</p>
      </div>
    );
  }
}

export default Personal;
