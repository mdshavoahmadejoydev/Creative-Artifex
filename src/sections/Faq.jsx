
import React, { useState } from 'react'
import Title from '../components/Title'
import P from '../components/P'
import FaqTemplate from '../components/FaqTemplate'
import Container from '../components/Container'

const Faq = () => {
  const [activeFaq, setActiveFaq] = useState(null)

  const faqData = [
    {
      qua: 'What services do you offer?',
      ans: 'We offer a wide range of design services including web design, graphic design, branding, and UI/UX design solutions. Our focus is on creating user-centered, innovative designs that help businesses grow.'
    },
    {
      qua: 'How long does a project take?',
      ans: 'Project duration depends on the requirements, complexity, and scope of the work.'
    },
    {
      qua: 'How much do your services cost?',
      ans: 'Pricing depends on your project requirements and the services you need.'
    },
    {
      qua: 'Can I request revisions?',
      ans: 'Yes, revisions depend on the scope and agreement of your project.'
    },
    {
      qua: 'How can I contact you?',
      ans: 'You can contact us through our website to discuss your project.'
    }
  ]

  return (
    <section className='bg-faqbg py-45 overflow-x-hidden px-37.5'>
      <Title
        text={`Frequently asked question`}
        className={`text-center`}
      />

      <P
        text={`Everything you need to know before starting your branding, website, and digital experience journey with us.`}
        className={`text-center w-602 mx-auto mt-4 mb-45`}
      />

      <Container>
        {faqData.map((item, index) => (
          <FaqTemplate
            key={index}
            qua={item.qua}
            ans={item.ans}
            showans={activeFaq === index}
            handleshows={() => {
              setActiveFaq(
                activeFaq === index ? null : index
              )
            }}
          />
        ))}
      </Container>
    </section>
  )
}

export default Faq
