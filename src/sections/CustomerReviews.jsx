import React from 'react'
import Title from '../components/Title'
import Flex from '../components/Flex'
import Container from '../components/Container'
import CustomerReviewsCard from '../components/CustomerReviewsCard'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import Schedule from '../components/Schedule'

const CustomerReviews = () => {
  return (
    <section className="bg-gray-white py-45 overflow-x-hidden">
      <Title text={`Our Satisfied Customer Feedback`} className={`w-560 leading-14 text-center mx-auto mb-45`}/>

      <Container>
        <Flex className={`justify-around`}>

          <IoIosArrowBack className='my-auto text-6xl text-black/70 cursor-pointer' />


          <CustomerReviewsCard name={`MD S joy`} proff={`Founder and CEO green`} des={`Working with Naiyoj Solutions was a great  experience. They understood my requirements  clearly and delivered a modern, user-friendly  website on time.  The communication was smooth, and the final  result exceeded my expectations. website on time.  The communication was smooth, and the final  result exceeded my expectations.`} />
          
          <CustomerReviewsCard name={`MD Sojib khan`} proff={`Founder and CEO green`} des={`Working with Naiyoj Solutions was a great  experience. They understood my requirements  clearly and delivered a modern, user-friendly  website on time.  The communication was smooth, and the final  result exceeded my expectations. website on time.  The communication was smooth, and the final  result exceeded my expectations.`} />
          
          <CustomerReviewsCard name={`MD rakib`} proff={`Founder and CEO green`} des={`Working with Naiyoj Solutions was a great  experience. They understood my requirements  clearly and delivered a modern, user-friendly  website on time.  The communication was smooth, and the final  result exceeded my expectations. website on time.  The communication was smooth, and the final  result exceeded my expectations.`} />

          <IoIosArrowForward className='my-auto text-6xl text-black/70 cursor-pointer' />
        </Flex>
        <Flex className={`justify-center mt-45`}>
          <Schedule text={`Learn More`} hover={true} className={`bg-deep-blue border border-serviceborder! hover:border-red-500! mx-auto text-center`}/>
        </Flex>
        
      </Container>
    </section>
  )
}

export default CustomerReviews