import "./homepage.modules.css"
import { about, contact, education, experience, project, skills } from '../literals'
import Section from '../Sections/section'
import Contact from '../Sections/contact'
import Header from '../Sections/header'

const HomePage = () => {
  const experienceDetails= experience
  const educationDetails= education
  const projectDetails= project
  const skillDetails=skills
  const contactDetails=contact
  const aboutDetails=about

  return (
    <main className={`font-firago hyphens-manual dark:text-white dark:bg-black`}>
      <div className={`p-6 mx-auto page max-w-2xl print:max-w-letter md:max-w-letter md:h-executive xsm:p-8 sm:p-9 md:p-16 print:mt-16 print:bg-white text-left drop-shadow-md `}>
        <Header />
        <div className="md:col-count-2 print:col-count-2 col-gap-md md:h-letter print:h-letter col-fill-auto ">
          <Section title={'ABOUT ME'} details={aboutDetails} />
          <Section title={'EXPERIENCE'} details={experienceDetails} />
          <Section title={'EDUCATION'} details={educationDetails} />
          <Section title={'SKILLS'} details={skillDetails} />
          <Section title={'PROJECTS'} details={projectDetails} />
          <Contact title={'CONTACT'}  details={contactDetails}/>
        </div>
    </div>
  </main>
  )
}

export default HomePage