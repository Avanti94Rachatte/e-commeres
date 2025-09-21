import React from 'react'
import { Truck, Lock, RotateCcw, Clock } from 'lucide-react'

// Array of feature objects with icon, title, and description
const features = [
  {icon: Truck, text: 'Free Shipping', subtext: 'On orders over $100'},
  {icon: Lock, text: 'Secure Payment', subtext: '100% protected payments'},
  {icon: RotateCcw, text: 'Easy Returns', subtext: '30-day return policy'},
  {icon: Clock, text: '24/7 Support', subtext: 'Dedicated customer service'},
]

const Features = () => {
  return (
    <div className='bg-gray-100 py-8 px-4 sm:px-6 lg:px-8'> {/* Background and padding */}
      <div className='max-w-7xl mx-auto'> {/* Container with max width and centering */}
        <div className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8'> {/* Responsive grid */}
          {features.map((feature, index) => {
            return (
              <div
                key={index}
                className='flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left' // Flex layout, responsive
              >
                {/* Feature icon */}
                <feature.icon
                  className='flex-shrink-0 h-8 w-8 sm:h-10 sm:w-10 text-gray-600'
                  aria-hidden="true"
                />
                <div className='mt-3 sm:mt-0 sm:ml-4'> {/* Text container */}
                  <p className='text-base font-medium text-gray-900'>{feature.text}</p> {/* Feature title */}
                  <p className='mt-1 text-sm text-gray-500'>{feature.subtext}</p> {/* Feature description */}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Features
