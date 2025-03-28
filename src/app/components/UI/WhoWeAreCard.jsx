import React from 'react'

export default function WhoWeAreCard({image,title,description,descriptionImg}) {
  return (
    <article className='bg-white h-96 rounded-lg shadow-[0px_10px_10px_0px_rgba(0,0,0,0.3)] p-4 text-center w-96 m-6 flex flex-col items-center justify-evenly'>
       <img src={image} alt={descriptionImg} />
           <h3 className='text-[#00376B] text-[30px] font-medium'>{title}</h3>
           <p className='text-[20px]'>{description}</p>
    </article>
  )
}
