import React from 'react'
import List from './list'

 const Section = ({title, details}) => {
  return (
    <section className="mt-8 first:mt-0">
      <div className="break-inside-avoid">
        <h2 className="mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal dark:text-white">
          {title}
        </h2>
          {
            details.map((detail) => (
              <List key={details.indexOf(detail)} detail={detail} />
            ))
          }
        </div>
    </section>
  )
}

export default Section