import React from 'react'
import "./homepage.modules.css"
import { contact, education, experience, project, skills } from '../literals'
import Section from '../Sections/section'
import Contact from '../Sections/contact'

const HomePage = () => {
  const experienceDetails= experience
  const educationDetails= education
  const projectDetails= project
  const skillDetails=skills
  const contactDetails=contact
  
  return (
    <main class="font-firago hyphens-manual">

    {/* <!-- Page --> */}
    <div className="p-6 mx-auto page max-w-2xl print:max-w-letter md:max-w-letter md:h-letter xsm:p-8 sm:p-9 md:p-16 bg-white text-left">

    {/* <!-- Name --> */}
      <header className="flex items-center mb-8 md:mb-11">
        <div   className="initials-container mr-5 text-base leading-none text-white bg-gray-700 font-medium print:bg-black px-3 headerName">
          <div className="initial text-center headerName_title">P</div>
          <div className="text-center initial">H</div>
        </div>
        <h1 className="text-2xl font-semibold text-gray-750 pb-px">
          Parth Hingu
        </h1>
      </header>

      {/* <!-- end Name --> */}

      {/* <!-- Column --> */}
      <div className="md:col-count-2 print:col-count-2 col-gap-md md:h-letter-col print:h-letter-col col-fill-auto">

        <section className="mt-8 first:mt-0">

          {/* <!-- To keep in the same column --> */}
          <div className="break-inside-avoid">

            <h2 className="mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal">
              ABOUT ME
            </h2>

            <section className="mb-4.5 break-inside-avoid">
              <p class="mt-2.1 text-md text-gray-700 leading-normal">
              Highly skilled and technically focused professional with 2 years’ experience in software engineer. 
              Motivated young professional with an aptitude for innovation and creative problem-solving.
              </p>
            </section>

          </div>

          <section class="mb-4.5 break-inside-avoid">
            <header>
              <h3 class="text-lg font-semibold text-gray-700 leading-snugish">
                Front-End Developer
              </h3>
              <p class="leading-normal text-md text-gray-650">
                Since 2013
              </p>
            </header>
            <p class="mt-2.1 text-md text-gray-700 leading-normal">
              “docs/index.html” is the main content file. By copying HTML: add pages, sec&shy;tions, subsection, and
              other parts.
            </p>
            <p class="mt-2.1 text-md text-gray-700 leading-normal">
              <span class="font-medium text-gray-600 print:text-black">Important:</span> Too much content on one page
              will break the page in the form of additional columns.
            </p>
          </section>

        </section>


        <Section title={'EXPERIENCE'} details={experienceDetails} />
        <Section title={'EDUCATION'} details={educationDetails} />
        <Section title={'PROJECTS'} details={projectDetails} />
        <Section title={'SKILLS'} details={skillDetails} />

        <Contact title={'CONTACT'}  details={contactDetails}/>

      </div>
      {/* <!-- end Column --> */}

    </div>
    {/* <!-- end Page --> */}


  </main>
  )
}

export default HomePage