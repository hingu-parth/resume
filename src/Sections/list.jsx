import React from 'react'

const List = ({detail}) => {
  const name=detail.name
  const duration=detail.duration
  const position=detail.position
  const description=detail.description
  const degree=detail.degree
  const link=detail.link
  const technology=detail.technology
  const tools=detail.tools

  return (
    <section className="mb-4.5 break-inside-avoid">
      <header>
        <h3 className="text-lg font-semibold text-gray-700 leading-snugish dark:text-white">
          {!link?name:(
            <a href="lINK" className="group">
              {name}
              <span className="inline-block text-gray-550 print:text-black font-normal group-hover:text-gray-700 transition duration-100 ease-in">↗</span>
          </a>
          )}
        </h3>
        <p className="leading-normal text-md text-gray-650 dark:text-gray-5500">
          {!tools && (duration || position || degree || technology) ? 
          `${duration} | ${position ?position:""} ${degree?degree:""} ${technology?technology:""}`: ''}
        </p>
      </header>
      {
        description && description.length>1?( 
          <ul className="">
            { 
            description.map((point) => (
              <li key={description.indexOf(point)} className="mt-2.1 text-md text-gray-700 leading-normal dark:text-gray-550">
                <span className="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">›</span>
                {point}
              </li>
            ))
            }    
          </ul>): <p>{description}</p>
      }
      {tools?( 
        <div className="my-3.2 last:pb-1.5">
          <ul className="flex flex-wrap text-md leading-relaxed -mr-1.6 -mb-1.6">
            {tools.map((tool) => (
            <li key={tools.indexOf(tool)}
              className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 print:bg-white print:border-inset bg-gray-200 rounded-md hover:bg-gray-650 hover:text-white transition-all duration-100 ease-linear hover:scale-105">
              {tool}
            </li>)
            )}
          </ul>
        </div>):''
      }
    </section>
  )
}

export default List

 