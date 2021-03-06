import React, { useState } from "react";

const Dashboard = (props) => {
  const team = props.team;
  const initialName = () => {
    return team.map((item) => item.name);
  };
  const [teamPlaying, setTeamPlaying] = useState(1);
  const [teamName, setTeamName] = useState(initialName);
  const [timerCheck, setTimerCheck] = useState(false);
  const [timer, setTimer] = useState(0);

  const teamOption = team.map((item, index) => (
    <span key={item.id}>
      <input
        type="radio"
        id={`team${item.id}`}
        name="Team"
        value={index + 1}
        defaultChecked={index + 1 === teamPlaying ? true : false}
        onChange={updateTeamPlaying}
        readOnly
      />
      <label htmlFor={`team${item.id}`}>{index + 1}</label>
    </span>
  ));
  function updateTeamPlaying(event) {
    setTeamPlaying(event.target.value);
  }
  function updateTeamName(event) {
    const tmpTeam = [...teamName];
    const index = event.target.id.replace(/^\D+/g, "") || 1;
    tmpTeam[index - 1] = event.target.value;
    setTeamName(tmpTeam);
  }

  const teamInput = team.map((item, index) =>
    item.id <= teamPlaying ? (
      <div key={item.id} className={`input-group team${item.id}`}>
        <span>{item.unicode}</span>
        <input
          className="form-control"
          id={`teamName${item.id}`}
          value={teamName[index]}
          onChange={updateTeamName}
        ></input>
      </div>
    ) : null
  );
  const helpModal = () => {};
  return (
    <div className="teamMsg">
      <h2>Teams playing : </h2>
      <div className="teamSelect">{teamOption}</div>
      <div id="teamName">
        {teamInput}
        <div id="startGameBtn">
          <button
            className="btn btn-primary"
            onClick={() => props.history.push("/game")}
          >
            Start Game
          </button>
        </div>
        <div id="timeBased">
          <input
            type="checkbox"
            id="timer"
            name="timer"
            onChange={(event) => {
              setTimerCheck(!timerCheck);
            }}
          />
          <label htmlFor="timer">Time Based</label>
          <div
            id="timerInput"
            style={{ display: timerCheck ? "block" : "none" }}
          >
            <input
              type="text"
              id="timerVal"
              className="form-control"
              placeholder="00:00"
              value="01:00"
              title="minute : second"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
