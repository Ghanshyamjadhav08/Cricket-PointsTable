import React from "react";

export const PointsTable = () => {
  var iccTable = [
    {
      Team: "India",
      Matches: 9,
      Won: 9,
      Lost: 0,
      PTS: 18,
      NRR: "+2.570",
      Flag: "india.png",
      Recent: ["W", "W", "W", "W", "W"],
    },
    {
      Team: "South Africa",
      Matches: 9,
      Won: 7,
      Lost: 2,
      PTS: 14,
      NRR: "+1.261",
      Flag: "sf.png",
      Recent: ["W", "L", "W", "W", "W"],
    },
    {
      Team: "Australia",
      Matches: 9,
      Won: 7,
      Lost: 2,
      PTS: 14,
      NRR: "+0.841",
      Flag: "aust.png",
      Recent: ["W", "W", "W", "W", "W"],
    },
    {
      Team: "Newzealand",
      Matches: 9,
      Won: 5,
      Lost: 4,
      PTS: 10,
      NRR: "+0.743",
      Flag: "aust.png",
      Recent: ["W", "L", "L", "L", "L"],
    },
    {
      Team: "Pakistan",
      Matches: 9,
      Won: 4,
      Lost: 5,
      PTS: 8,
      NRR: "-0.199",
      Flag: "pak.png",
      Recent: ["L", "W", "W", "L", "L"],
    },
    {
      Team: "Afghanistan",
      Matches: 9,
      Won: 4,
      Lost: 5,
      PTS: 8,
      NRR: "-0.366",
      Flag: "afg.png",
      Recent: ["L", "L", "W", "W", "W"],
    },
    {
      Team: "England",
      Matches: 9,
      Won: 3,
      Lost: 6,
      PTS: 6,
      NRR: "-0.572",
      Flag: "eng.png",
      Recent: ["W", "W", "L", "L", "L"],
    },
    {
      Team: "Bangladesh",
      Matches: 9,
      Won: 3,
      Lost: 7,
      PTS: 4,
      NRR: "-1.087",
      Flag: "bng.png",
      Recent: ["L", "W", "L", "L", "L"],
    },
  ];

  return (
    <>
      <center>
        <h1 className="mt-4 me-4">
          <img src="icc-logo.png" alt="logo" width="130px" height="110px"  />
          Cricket World Cup Standings
        </h1>
        <table className="table w-50 table-hover table-striped mb-2">
          <thead>
            <tr>
              <th>Team</th>
              <th>Matches</th>
              <th>Won</th>
              <th>Lost</th>
              <th>PTS</th>
              <th>NRR</th>
              <th>Last-5</th>
            </tr>
          </thead>
          <tbody>
            {iccTable.map((country) => (
              <tr key={country.Team}>
                <td>
                  <img src={country.Flag} alt="" width="40" />
                  {country.Team}
                </td>
                <td>{country.Matches}</td>
                <td>{country.Won}</td>
                <td>{country.Lost}</td>
                <td>{country.PTS}</td>
                <td>{country.NRR}</td>
                <td>
                  {country.Recent.map((result, index) => (
                    <span key={index}>
                      {result === "W" ? (
                        <img src="win.svg" alt="Win" className="m-1" />
                      ) : (
                        <img
                          src="loss.svg"
                          alt="Loss"
                          className="m-1"
                        />
                      )}
                    </span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </center>
    
    </>
  );
};
