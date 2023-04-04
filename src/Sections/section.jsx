import React from 'react'
import List from './list'

 const Section = ({title, details}) => {
  return (
    <section class="mt-8 first:mt-0">

    <div class="break-inside-avoid">

    <h2 class="mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal">
      {title}
    </h2>
      {details.map((detail) => (
        <List detail={detail} />
      ))
      }

      </div>
    </section>
  )
}

export default Section