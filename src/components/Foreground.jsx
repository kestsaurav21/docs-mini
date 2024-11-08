import React, { useRef } from 'react'
import Card from './Card'
import { IoMdAdd } from 'react-icons/io'


const Foreground = () => {

    const foregroundRef =  useRef()
    const data = [
        {
            description: 'This data is coming as a props.',
            filesize: ".9 mb",
            close: false,
            tag: {
                isOpen: true, 
                tagTitle: "Download Now",
                tagColor: "green"
            }
        },
        {
            description: 'This data is coming as a props.',
            filesize: ".9 mb",
            close: false,
            tag: {
                isOpen: true, 
                tagTitle: "Download Now",
                tagColor: "blue"
            }
        },
        {
            description: 'This data is coming as a props.',
            filesize: ".9 mb",
            close: false,
            tag: {
                isOpen: true, 
                tagTitle: "Download Now",
                tagColor: "green"
            }
        }
    ]
  return (
    <>
         <div ref={foregroundRef}  className='w-full h-full top-0 left-0 fixed z-[3] flex gap-5 flex-wrap p-10'>


            <IoMdAdd size="2.65em" className='absolute top-[5%] right-[5%] text-white cursor-pointer z-[10]' />


            {
                data.map((item, index) => (
                    <Card key={index} data={item} reference={foregroundRef} />
                ))
            }
        </div>
    </>

  )
}

export default Foreground