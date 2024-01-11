import styles from "./card.module.css";

export default function Card({ jobsList, setSkills, skills}) {

    function handleAddSkills(skill) {
        setSkills((prevSkills) => {
          return [...prevSkills, skill];
        });
        localStorage.setItem("skills", JSON.stringify([...skills, skill]));
      }


  return (
    <>
      {jobsList.map((jobList) => {
        return (
          <div className={styles.card_wrapper} key={jobList._id.$oid}>
            <div className={styles.job_info_wrapper}>
              <img src={jobList.companyImage} alt="logo"></img>
              <div className={styles.job_title_wrapper}>
                <p
                  style={{
                    fontWeight: "600",
                    fontSize: "14px",
                    letterSpacing: "0.5px",
                  }}
                >
                  {jobList.company.companyName}
                </p>
                <p className={styles.job_title}>{jobList.jobTitle}</p>
                <p className={styles.address}>{jobList.formattedAddress}</p>
              </div>
            </div>
            <div className={styles.skills_wrapper}>
              {jobList.skills.map((skill, index) => {
                return (
                  <div
                    key={index}
                    className={styles.skill}
                    onClick={() => handleAddSkills(skill)}
                  >
                    {skill}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
}
