import React from 'react'

const Contact = (props) => {
  const title=props.title
  const contactDetails=props.details

  return (
    <section className="mt-8 first:mt-0">
          <div className="break-inside-avoid">
            <h2 className="mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal dark:text-white">
              {title}
            </h2>
            <section className="mb-4.5 break-inside-avoid">
              <ul className="list-inside pr-7">
                {
                  contactDetails.map((detail) => (
                    <li key={contactDetails.indexOf(detail)} className="mt-1.5 leading-normal text-gray-700 text-md dark:text-gray-550">
                  <a href={Object.values(detail)} className="group">
                    {Object.values(detail)}
                    <span className="inline-block text-gray-550 print:text-black font-normal group-hover:text-gray-700 transition duration-100 ease-in">↗</span>
                  </a>
                </li>
                  ))
                }
              </ul>
            </section>
          </div>
        </section>
  )
}

export default Contact