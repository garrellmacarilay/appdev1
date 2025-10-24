import React from 'react'
import { getImageUrl } from '../utils/utils.js'

function ProfileCard () {
  return (
    <>
        <Card>
            <div className="flex flex-col items-center gap-3">
                <Avatar
                size={100}
                person={{
                    name: 'Katsuko Saruhashi',
                    imageId: 'YfeOqp2'
                }}
                />
                <p className="text-center font-semibold text-gray-700">Katsuko Saruhashi</p>
            </div>
        </Card>
    </>
  )
}

function Avatar({person, size}) {
  return (
    <>  
        <img
            className="rounded-full object-cover border-2 border-purple-300 shadow-lg"
            src={getImageUrl(person)}
            alt={person.name}
            width={size}
            height={size}
         />
    
    </>
  )
}

function Card({children}) {
  return (
    <>
        <div className="bg-linear-to-br from-purple-50 to-pink-50 rounded-lg p-4 sm:p-6 shadow-md border border-purple-200">
            {children}
        </div>
    </>
  )
}



export default ProfileCard
