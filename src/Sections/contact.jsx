import React from 'react'

const Contact = (props) => {
  const website=props.details.website
  const linkedIn=props.details.linkedIn
  const contact=props.details.contact
  const title=props.title
  const github=props.details.github

  return (
    <section class="mt-8 first:mt-0">
          <div class="break-inside-avoid">

            <h2 class="mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal dark:text-white">
              {title}
            </h2>

            <section class="mb-4.5 break-inside-avoid">
              <ul class="list-inside pr-7">
                {website?(<li class="mt-1.5 leading-normal text-gray-700 text-md dark:text-gray-550">
                  <a href={website} class="group">
                    {website}
                    <span class="inline-block text-gray-550 print:text-black font-normal group-hover:text-gray-700 transition duration-100 ease-in">↗</span>
                  </a>
                </li>):''}
                {linkedIn?(<li class="mt-1.5 leading-normal text-gray-700 text-md dark:text-gray-550">
                  <a href={linkedIn} class="group">
                    {linkedIn}
                    <span class="inline-block text-gray-550 print:text-black font-normal group-hover:text-gray-700 transition duration-100 ease-in">↗</span>
                  </a>
                </li>):''}
                {github?(<li class="mt-1.5 leading-normal text-gray-700 text-md dark:text-gray-550">
                  <a href={github} class="group">
                    {github}
                    <span class="inline-block text-gray-550 print:text-black font-normal group-hover:text-gray-700 transition duration-100 ease-in">↗</span>
                  </a>
                </li>):''}
                {contact?(<li class="mt-1.5 leading-normal text-gray-700 text-md dark:text-gray-550">
                    {contact}
                </li>):''}
                
              </ul>
            </section>

          </div>

        </section>
  )
}

export default Contact