import React from "react";
import "../../styles/community.css"; ;

export default function Community() {
  const communtiyLeaderboard = [
    { rank: 1, name: "Donald Trump", hours: 70, avatar: "👤", medal: "🥇" },
    { rank: 2, name: "Kamala Harris", hours: 69, avatar: "👩‍🦳", medal: "🥈" },
    { rank: 3, name: "JD Vance", hours: 68, avatar: "🧔", medal: "🥉" },
    { rank: 4, name: "Ron", hours: 65, avatar: "🧔", medal: "" },
    { rank: 5, name: "Barack Obama", hours: 63, avatar: "👱‍♂️", medal: "" },
    { rank: 6, name: "Wizard Snape", hours: 62, avatar: "🧙", medal: "" },
    { rank: 7, name: "Aditya Potter", hours: 60, avatar: "🎩", medal: "" },
    { rank: 8, name: "Gini W", hours: 59, avatar: "👩‍🎓", medal: "" },
  ];

const topRanker = (rank) => {
    if (rank === 1) {
        return "#CCAC43";
    }
    else if (rank === 2) {
        return "#9EA9B8";
    }
    else if (rank === 3) {
        return "#D54A38";
    }
}

  return (
    <div className="community">
      <section className="community-leaderboard">
        {
            communtiyLeaderboard.map((person,index) => ( 
                <div className="communityCapsule" key={index}>
                    {person.rank > 3 ? (
                    <span className="medal ranks">{person.rank}</span>
                    ) : (
                    <span className="medal">{person.medal}</span>
                    )}
                    <span className="avatar" >{person.avatar}</span>
                    <p className="names">{person.name}</p>
                    <span className="hours">
                        <p style={{color: topRanker(person.rank)}}>{person.hours}</p>
                        <p style={{color: topRanker(person.rank)}}>hours</p>
                    </span>
                </div>
            ))}
      </section>
    </div>
  );
}
