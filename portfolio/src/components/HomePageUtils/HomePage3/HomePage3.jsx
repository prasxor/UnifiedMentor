import React, { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import "./HomePage3.css";
import MainTitle from "../../Atoms/MainTitle/MainTitle";

const HomePage3 = () => {
  const years = [2025, 2024, 2023, 2022];
  const [selectedYear, setSelectedYear] = useState(years[0]);
  const [dataCache, setDataCache] = useState({});

  useEffect(() => {
    const fetchData = async (year) => {
      const contributions = await fetchGitHubData(year);
      setDataCache((prev) => ({ ...prev, [year]: contributions }));
    };

    years.forEach((year) => fetchData(year));
  }, []);

  const API_BASE_URL = "https://portfolio-backend-uz32.onrender.com";

  
  const fetchGitHubData = async (year) => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/api/github-contributions?username=prasxor&year=${year}`
      );
      return await response.json();
    } catch (error) {
      console.error("Error fetching GitHub data:", error);
      return null;
    }
  };

  return (
    <div className="github-section container">
      <MainTitle
        content={"Contribution Graph"}
        para={
          "Every commit tells a story—of learning, building, and solving problems. From small experiments to full-scale projects, my contributions reflect my growth as a developer."
        }
      />

      <div className="GithubSectionMainContent">
        <div className="github-graph">
          {dataCache[selectedYear] ? (
            <GitHubCalendar username="prasxor" year={selectedYear} />
          ) : (
            <p>Loading...</p>
          )}
        </div>

        <div className="year-buttons">
          {years.map((year) => (
            <button
              key={year}
              className={`year-btn ${year === selectedYear ? "active" : ""}`}
              onClick={() => setSelectedYear(year)}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      <div className="githubbtn">
        <a
          href="https://github.com/prasxor"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          GITHUB ↗
        </a>
      </div>
    </div>
  );
};

export default HomePage3;
