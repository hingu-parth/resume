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
    <div className="p-6 mx-auto page max-w-2xl print:max-w-letter md:max-w-letter md:h-executive xsm:p-8 sm:p-9 md:p-16 print:mt-16 print:bg-white text-left drop-shadow-md ">

    {/* <!-- Name --> */}
      <header className="flex items-center mb-8 md:mb-11">
        <div   className="initials-container mr-5 text-base leading-none text-white bg-gray-700 font-medium print:bg-black px-3 headerName">
          <div className="initial text-center headerName_title">P</div>
          <div className="text-center initial">H</div>
        </div>
        {/* <img className="w-20 h-20 rounded-full" src="https://avatars.githubusercontent.com/u/38912107?s=400&u=622cedb7b85b49944e968ccc5193cc919b6fdafa&v=4" alt=""></img> */}
        <h1 className="text-2xl font-semibold text-gray-750 pb-px">
          Parth Hingu
        </h1>
      </header>

      {/* <!-- end Name --> */}

      {/* <!-- Column --> */}
      <div className="md:col-count-2 print:col-count-2 col-gap-md md:h-letter print:h-letter col-fill-auto">

        <section className="mt-8 first:mt-0">

          {/* <!-- To keep in the same column --> */}
          <div className="break-inside-avoid">

            <h2 className="mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal">
              ABOUT ME
            </h2>

            <section className="mb-4.5 break-inside-avoid">
              {/* <p class="mt-2.1 text-md text-gray-700 leading-normal"> */}
              <ul class="">
              
              
              <li class="mt-2.1 text-md text-gray-700 leading-normal">
                <span class="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">›</span>
                Developer with 2+ years of experience in designing, developing, and managing complex websites and internal frameworks specialized in web applications and user experience using React, TypeScript, Node.JS, MongoDB, Material UI and TailWindCSS.
              </li>
              <li class="mt-2.1 text-md text-gray-700 leading-normal">
                <span class="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">›</span>
                Exclusively used React-Hooks to handle application life-cycle processes and created various custom hooks that helped ease the reuse of the application logic.              
                </li>
              <li class="mt-2.1 text-md text-gray-700 leading-normal">
                <span class="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">›</span>
                Strong understanding of working with GIT as code repository and version control tools.
                </li>
              <li class="mt-2.1 text-md text-gray-700 leading-normal">
                <span class="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">›</span>
                Strong analytical and dynamic troubleshooting skills coupled with excellent communication skills.                </li>
              
              
              
            </ul>
              {/* </p> */}
            </section>

          </div>

          

        </section>


        <Section title={'EXPERIENCE'} details={experienceDetails} />
        <Section title={'EDUCATION'} details={educationDetails} />
        <Section title={'SKILLS'} details={skillDetails} />
        <Section title={'PROJECTS'} details={projectDetails} />

        <Contact title={'CONTACT'}  details={contactDetails}/>

      </div>
      {/* <!-- end Column --> */}

    </div>
    {/* <!-- end Page --> */}


  </main>
  )
}

export default HomePage