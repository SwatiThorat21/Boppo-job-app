import { useEffect } from "react";
import "./searchbar.module.css";
import styles from "./searchbar.module.css";
import closeIcon from "../../images/close_icon.png";

export default function SearchBar({ skills, setSkills }) {
  useEffect(() => {
    const storedSkills = localStorage.getItem("skills");
    if (storedSkills) {
      setSkills(JSON.parse(storedSkills));
    }
  }, [setSkills]);

  function handleCloseSkill(index) {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  }

  function clearSkills() {
    localStorage.removeItem("skills");
    setSkills([]);
  }
  return (
    <>
      <div className={styles.searchBar_container}>
        {skills.length === 0 ? (
          <p>Please select skills..</p>
        ) : (
          <div className={styles.search_skills_container}>
            {skills.map((skill, index) => {
              return (
                <>
                  <div key={index} className={styles.skill}>
                    <p className={styles.skill_title}>
                      {skill}
                    </p>
                    <img
                      src={closeIcon}
                      alt="closeIcon"
                      className={styles.closeIcon}
                      onClick={() => handleCloseSkill(index)}
                    ></img>
                  </div>
                </>
              );
            })}
          </div>
        )}
        <p className={styles.clear_search} onClick={clearSkills}>
          Clear
        </p>
      </div>
    </>
  );
}
