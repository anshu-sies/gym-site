import React from "react";
import "../../styles/personal.css";

export default function Personal() {
  const weeklyStats = [
    {
      label: "4+ Hours",
      description: "Intense Workout",
      color: "var(--intense)",
    },
    {
      label: "3-4 Hours",
      description: "High Intensity Workout",
      color: "var(--high)",
    },
    {
      label: "2-3 Hours",
      description: "Medium Workout",
      color: "var(--medium)",
    },
    {
      label: "1-2 Hours",
      description: "Low Intensity Workout",
      color: "var(--low)",
    },
    {
      label: "0.5-1 Hours",
      description: "Quick Workout",
      color: "var(--quick)",
    },
    {
      label: "0-0.5 Hours",
      description: "Minimal Workout",
      color: "var(--minimal)",
    },
  ];

  const weeklyActivity = [
    { day: "Monday, March 2", hours: 4, color: "#8B0000" },
    { day: "Tuesday, March 3", hours: 3.5, color: "#FF4500" },
    { day: "Wednesday, March 4", hours: 0, color: "#BEBEBE" },
    { day: "Thursday, March 5", hours: 1, color: "#32CD32" },
    { day: "Friday, March 6", hours: 2.4, color: "#FFD700" },
    { day: "Saturday, March 7", hours: 0.9, color: "#1E90FF" },
    { day: "Sunday, March 8", hours: 1.5, color: "#32CD32" },
  ];

  const findColour = (hours) => {
    if (hours <= 0.5 && hours >= 0) {
        return "var(--minimal)";
    }
    else if (hours >= 0.5 && hours < 1) {
        return "var(--quick)";
    }
    else if (hours >= 1 && hours < 2) {
        return "var(--low)";
    }
    else if (hours >= 2 && hours < 3) {
        return "var(--medium)";
    }
    else if (hours >= 3 && hours < 4) {
        return "var(--high)";
    }
    else if (hours >= 4) {
        return "var(--intense)";
    }
  }

  return (
    <div className="personal-leaderboard">
      <section className="weekly-stats">
        <p className="stats" style={{ fontWeight:"700" }} >Weekly Stats:</p>
        <div class="h_line"></div>
        <ul>
          {weeklyStats.map((stat, index) => (
            <li key={index} className="stat-item">
              <span
                className="color-indicator"
                style={{ backgroundColor: stat.color }}
              ></span>
              <div className="stat-info">
                <strong>{stat.label}</strong>
                <p>{stat.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="weekly-activity">
        <p className="stats" style={{ fontWeight:"700" }}>Weekly Stats:</p>
        {weeklyActivity.map((activity, key) => (
          <div key={key} className="activity-item" style={{ backgroundColor: findColour(activity.hours) }}>
            <p className="activity-day">{activity.day}</p>
            <p className="workout">Workout: {activity.hours} hours</p>
          </div>
        ))}
      </section>
    </div>
  );
}
