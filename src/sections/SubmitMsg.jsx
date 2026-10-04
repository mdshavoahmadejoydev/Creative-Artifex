import React from 'react'
import Container from '../components/Container';
import Flex from '../components/Flex';
import Schedule from '../components/Schedule';
import SubmitP from '../components/SubmitP';
import Input from '../components/Input';
import { FaPhoneVolume } from 'react-icons/fa';
import { MdAddCall, MdEmail, MdLocationOn } from 'react-icons/md';

const SubmitMsg = () => {
  return (
    <section className="bg-seagreen py-60">
      <Container className="">
        <Flex className={`justify-between`}>
          <div className="w-[57%] bg-white px-9 py-7 rounded-2xl">
            <SubmitP
              text={`Submit message`}
              className={`text-3xl! font-bold!`}
            />

            <div className="mt-4">
              <SubmitP text={`Your Name`} requerment={true} />

              <Input placeholder={`Enter Your Full Name ...`} />
            </div>

            <div className="mt-4">
              <SubmitP text={`Phone number`} requerment={true} />

              <Input
                placeholder={`Enter Your Phone Number with Country Code ...`}
              />
            </div>

            <div className="mt-4">
              <SubmitP text={`Service catagory`} requerment={false} />

              <Input placeholder={`Enter Service Catagory ...`} />
            </div>

            <div className="mt-4">
              <SubmitP text={`Ubload Images`} requerment={false} />
            </div>

            <div className="mt-4">
              <SubmitP text={`Description`} requerment={false} />

              <textarea
                type="text"
                placeholder="Write about your project"
                className="w-full py-1 text-base font-medium border-2 border-gray-300 rounded-2xl outline-none font-poppins italic h-32 px-4 mt-2"
              />
            </div>

            <div className="flex justify-end">
              <Schedule
                text="submit here"
                className={`bg-seagreen mt-6 hover:shadow-[0px_0px_10px_1px_rgba(0,0,0,0.5)]`}
              />
            </div>
          </div>

          <div className="w-[40%] bg-white px-9 py-7 rounded-2xl">
            <SubmitP
              text={`Feel free to Direct message or call to us.`}
              className={`text-3xl! font-bold!`}
            />

            {/* Phone */}
            <div className="flex items-center gap-3 my-6 text-black/70">
              <MdAddCall className='text-2xl '/>

              <SubmitP text={`+8801602282313`}  className={`text-black/70`}/>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 mb-3 my-6 text-black/70">
              <MdEmail  className='text-2xl'/>

              <SubmitP text={`mdshavoahmadejoy@gmail.com`}  className={`text-black/70`}/>
            </div>

            <div className="flex items-center gap-3 mb-3 my-6 text-black/70">
              <MdLocationOn className='text-3xl shrink-0 mt-1'/>

              <SubmitP text={`House #417, (4th Floor ) Borogram Chairmanbari Mor, Kamranggirchor Dhaka, Dhaka, Bangladesh, 1211 `} className="text-black/70" />
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
}

export default SubmitMsg