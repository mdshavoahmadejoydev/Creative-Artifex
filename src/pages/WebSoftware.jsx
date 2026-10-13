import React from "react";
import Flex from "../components/Flex";
import { Link } from "react-router-dom";

const WebSoftware = () => {
  return (
    <div>
      <div className="bg-seagreen py-2">
        <Flex
          className={`justify-center gap-x-6 gap-y-2 list-none text-white/70 font-poppins font-medium text-lg mt-4 px-10 flex-wrap`}
        >
          <Link>
            <li>Website Development</li>
          </Link>
          <Link>
            <li>Software Development</li>
          </Link>
          <Link>
            <li className="text-white">WordPress Development </li>
          </Link>
          <Link>
            <li>Shopify Store Design Development</li>
          </Link>
          <Link>
            <li>Mobile Application Development</li>
          </Link>
        </Flex>
      </div>
    </div>
  );
};

export default WebSoftware;
