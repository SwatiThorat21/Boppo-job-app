import Navbar from "../components/Navbar/Navbar";
import SearchBar from "../components/searchbar/SearchBar";
import Card from "../components/cards/Card";
import styles from "./homePage.module.css";

export default function HomePage({ jobsList, setSkills, skills }) {
  const filteredJobs = jobsList.filter((job) => {
    return job.skills.some((jobSkill) => skills.includes(jobSkill));
  });

  return (
    <>
      <div className={styles.home_container}>
        <Navbar />
        <div className={styles.search_and_cards_wrapper}>
          <SearchBar
            jobsList={jobsList}
            skills={skills}
            setSkills={setSkills}
          />
          <Card jobsList={jobsList} setSkills={setSkills} skills={skills} />
        </div>
      </div>
    </>
  );
}
