
import React from 'react'
import { Transaction_Data } from '../../../constants/home/Transaction_Data'
import Cards_Component from './Cards_Component'

const Home_Transaction_Card_Child = () => {
  return (
    <div className='grid max-xlg:overflow-scroll  max-xlg:flex grid-cols-3 gap-6 py-10'>
        {Transaction_Data.map((card, index) => (
          <Cards_Component
            key={index}
            bgColor={`${card.bgColor}`}
            cardTitle={card.cardTitle}
            cardDescription={card.cardDescription}
            hasButton={card.hasButton}
            getStarted={card.getStarted}
            LabelTitle={
              <div className="flex items-center gap-1">
                <span>{React.createElement(card.labelIcon)}</span>
                <span>{card.cardLabelText}</span>
              </div>
            }
            LabelStyles={card.cardLabelStyle}
            cardImage={card.cardImage}
            descriptionStyle={card.descriptionStyle}
            headingStyle={card.headingStyle}
            cardImageStyle="w-full flex justify-center items-center"
          />
        ))}
    </div>
  )
}

export default Home_Transaction_Card_Child