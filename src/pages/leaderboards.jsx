import React from "react";
import "../styles/leaderboard.css";
import LeaderboardHead from "../components/leaderboards/leaderboardHead";
import Community from "../components/leaderboards/community";
import Personal from "../components/leaderboards/personal";

export default function Home() {
  const [activeBut, setactiveBut] = React.useState("personal");
  return (
    <>
      <header className="leaderboard">
        <LeaderboardHead />
        <div className="capsule">
         
          <button className={`tab ${activeBut === "personal" ? "activee" : ""}`} onClick={() => setactiveBut("personal")}>Personal</button>
          <button className={`tab ${activeBut === "community" ? "activee" : ""}`} onClick={() => setactiveBut("community")}>Community</button>
        </div>
      </header>
    
    <section className="leaderboardBody">
      {activeBut === "personal" ? <Personal /> : <Community />}
    </section>
    </>
  );
}
