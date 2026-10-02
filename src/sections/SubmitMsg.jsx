import React from 'react'
import Container from '../components/Container';
import Flex from '../components/Flex';
import SubmitP from '../components/SubmitP';

const SubmitMsg = () => {
  return (
    <section className="bg-seagreen py-60">
      <Container className="">
        <Flex className={` justify-between`}>
          <div className="w-1/2 bg-white px-9 py-7 rounded-2xl">
            <p
              size="text-3xl"
              textclr="text-black"
              fontw="font-semibold"
            >Submit message</p>

            <div className="mt-4">
              <SubmitP text={`Your Name`} />

              <input type='text' placeholder='Your name' className='w-full py-1 text-base font-medium border-2 border-gray-300 rounded-full' />
            </div>

            <div className="mt-4">
              <SubmitP text={`Service catagory`} />
              <Ptag
                size="text-xl"
                textclr="text-black"
                fontw="font-semibold"
                content="Service catagory *"
              />

              <Input
                type="text"
                width="w-full"
                py="py-1"
                textsize="text-base"
                placeholder="Services catagory ..."
                fontw="font-medium"
                border="border-2"
                borderclr="border-gray-300"
                round="rounded-full"
              />
            </div>

            <div className="mt-4 flex">
              <Ptag
                size="text-xl"
                textclr="text-black"
                fontw="font-semibold"
                content="Ubload img *"
              />

              <Input
                type="file"
                textsize="text-sx"
                pointer="cursor-pointer"
                round="rounded-full"
              />
            </div>

            <div className="mt-4">
              <Ptag
                size="text-xl"
                textclr="text-black"
                fontw="font-semibold"
                content="Description *"
              />

              <Descriptionbox
                placeholder="write something about  your need.........."
                width="w-full"
                height="h-40"
                round="rounded-md"
                border="border-2"
                borderclr="border-gray-300"
              />
            </div>

            <div className="flex justify-end">
              <Smallbtn
                bgcolor="bg-header-Clr"
                px="px-6"
                py="py-2"
                textcolor="text-white"
                textsize="text-2xl"
                hover="hover:border-red-500 duration-150"
                mt="mt-6"
                content="submit here"
              />
            </div>
          </div>

          <div className="w-2/5 bg-white px-9 py-7 rounded-35">
            <Ptag
              size="text-3xl"
              textclr="text-black"
              fontw="font-semibold"
              content="Feel free to Direct message or call to us."
            />

            {/* Phone */}
            <div className="flex items-start gap-3 my-6">
              <Iconsetup
                href="#"
                iconlink="fa-solid fa-phone-volume"
                textsize="text-2xl"
                textColor="text-gray-700"
              />

              <Ptag
                size="text-xl"
                textclr="text-gray-700"
                fontw="font-semibold"
                content="+8801887002276"
                ml="ml-2"
              />
            </div>

            {/* Email */}
            <div className="flex items-start gap-3 mb-3 my-6">
              <Iconsetup
                href="#"
                iconlink="fa-solid fa-envelope"
                textsize="text-2xl"
                textColor="text-gray-700"
              />

              <Ptag
                size="text-xl"
                textclr="text-gray-700"
                fontw="font-semibold"
                content="mdshavoahmadejoy@gmail.com"
                ml="ml-2"
              />
            </div>

            <div className="flex items-start gap-3 mb-3 my-6">
              <Iconsetup
                href="#"
                iconlink="fa-solid fa-location-dot"
                textsize="text-2xl"
                textColor="text-gray-700"
              />

              <Ptag
                size="text-xl"
                textclr="text-gray-700"
                fontw="font-semibold"
                content="House, (4th Floor ) Borogram Chairmanbari Mor, Kamranggirchor Dhaka, Dhaka, Bangladesh, 1211"
                ml="ml-2"
              />
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
}

export default SubmitMsg