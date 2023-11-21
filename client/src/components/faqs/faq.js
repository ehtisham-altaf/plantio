import React from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
export default function Faq() {
  return (
    <div className=" flex-[100%] flex-col px-5 md:px-10 lg:px-20 border-b">
      {/* ---------------heading area--------------------- */}
      <div className="flex flex-col w-[100%] mt-[20px] lg:mt-[100px] items-center gap-3 mb-10 lg:gap-5">
        <AiOutlineQuestionCircle className="text-3xl lg:text-5xl text-gray-700 " />
        <h1 className="font-libre text-2xl lg:text-5xl">
          Frequently Asked <i className="text-green-800">Questions</i>
        </h1>
      </div>
      {/* -------------------------questions section------------------------- */}

      <div className="grid grid-cols-1 md:grid-cols-2 my-10 gap-5 md:gap-10">
        {/* --------------------1st question ------------------- */}
        <div className="flex flex-col w-[100%]">
          {/* --------------title---------------------- */}
          <h1 className="font-libre text-2xl lg:text-3xl border-b-2 border-green-800 w-max max-w-[100%] py-2">
            The order
          </h1>
          {/* ----------------------------------1.1------------------ */}
          <div className=" flex flex-col my-5 lg:my-7 font-poppins  gap-2">
            <h2 className=" text-gray-700 font-semibold text-sm lg:text-base">
              When do I recieve my order?
            </h2>
            <p className="text-gray-500 leading-normal  text-xs lg:text-base">
              When placing the order, a day of shipment is indicated. After the
              order has been placed, the same delivery time will also be stated
              on the order confirmation. It is therefore never possible that
              during the order, the shipping day on the website, is different
              than on the order confirmation.
            </p>
          </div>

          {/* ----------------------------------1.2------------------ */}
          <div className=" flex flex-col my-5 lg:my-7 font-poppins  gap-2">
            <h2 className=" text-gray-700 font-semibold text-sm lg:text-base">
              I now see the longer delivery time of (a part of) my order. How
              can I cancel it?
            </h2>
            <p className="text-gray-500 leading-normal  text-xs lg:text-base">
              If the order has a longer delivery time than you had previously
              seen, it is of course possible to cancel (a part of) the order.
              For this you can contact our customer service. They will cancel
              the order for you. The purchase amount will be back on your bank
              account within two working days. When an order has already been
              shipped, it can no longer be cancelled.
            </p>
          </div>

          {/* ----------------------------------1.3------------------ */}
          <div className=" flex flex-col my-5 lg:my-7 font-poppins  gap-2">
            <h2 className=" text-gray-700 font-semibold text-sm lg:text-base">
              When will I receive the invoice for my order?
            </h2>
            <p className="text-gray-500 leading-normal  text-xs lg:text-base">
              When you have paid for the order, you will not automatically
              receive an invoice for your order. If you wish to receive an
              invoice, this can be done in two ways.The first way is through
              your account at our store. When you log in to your account you can
              see your orders and download the invoice.
            </p>
          </div>
        </div>

        {/* --------------------2nd question ------------------- */}
        <div id='shipping' className="flex flex-col w-[100%]">
          {/* --------------title---------------------- */}
          <h1 className="font-libre text-2xl lg:text-3xl border-b-2 border-green-800 w-max max-w-[100%] py-2">
            Shipment
          </h1>
          {/* ----------------------------------2.1------------------ */}
          <div className=" flex flex-col my-5 lg:my-7 font-poppins  gap-2">
            <h2 className=" text-gray-700 font-semibold text-sm lg:text-base">
              When do I recieve my order?
            </h2>
            <p className="text-gray-500 leading-normal  text-xs lg:text-base">
              When placing the order, a day of shipment is indicated. After the
              order has been placed, the same delivery time will also be stated
              on the order confirmation. It is therefore never possible that
              during the order, the shipping day on the website, is different
              than on the order confirmation.
            </p>
          </div>

          {/* ----------------------------------2.2------------------ */}
          <div className=" flex flex-col my-5 lg:my-7 font-poppins  gap-2">
            <h2 className=" text-gray-700 font-semibold text-sm lg:text-base">
              I now see the longer delivery time of (a part of) my order. How
              can I cancel it?
            </h2>
            <p className="text-gray-500 leading-normal  text-xs lg:text-base">
              If the order has a longer delivery time than you had previously
              seen, it is of course possible to cancel (a part of) the order.
              For this you can contact our customer service. They will cancel
              the order for you. The purchase amount will be back on your bank
              account within two working days. When an order has already been
              shipped, it can no longer be cancelled.
            </p>
          </div>

          {/* ----------------------------------2.3------------------ */}
          <div className=" flex flex-col my-5 lg:my-7 font-poppins  gap-2">
            <h2 className=" text-gray-700 font-semibold text-sm lg:text-base">
              When will I receive the invoice for my order?
            </h2>
            <p className="text-gray-500 leading-normal  text-xs lg:text-base">
              When you have paid for the order, you will not automatically
              receive an invoice for your order. If you wish to receive an
              invoice, this can be done in two ways.The first way is through
              your account at our store. When you log in to your account you can
              see your orders and download the invoice.
            </p>
          </div>
        </div>

        {/* --------------------3rd question ------------------- */}

        <div className="flex flex-col w-[100%]">
          {/* --------------title---------------------- */}
          <h1 className="font-libre text-2xl lg:text-3xl border-b-2 border-green-800 w-max max-w-[100%] py-2">
            The order
          </h1>
          {/* ----------------------------------3.1------------------ */}
          <div className=" flex flex-col my-5 lg:my-7 font-poppins  gap-2">
            <h2 className=" text-gray-700 font-semibold text-sm lg:text-base">
              When do I recieve my order?
            </h2>
            <p className="text-gray-500 leading-normal  text-xs lg:text-base">
              When placing the order, a day of shipment is indicated. After the
              order has been placed, the same delivery time will also be stated
              on the order confirmation. It is therefore never possible that
              during the order, the shipping day on the website, is different
              than on the order confirmation.
            </p>
          </div>

          {/* ----------------------------------3.2------------------ */}
          <div className=" flex flex-col my-5 lg:my-7 font-poppins  gap-2">
            <h2 className=" text-gray-700 font-semibold text-sm lg:text-base">
              I now see the longer delivery time of (a part of) my order. How
              can I cancel it?
            </h2>
            <p className="text-gray-500 leading-normal  text-xs lg:text-base">
              If the order has a longer delivery time than you had previously
              seen, it is of course possible to cancel (a part of) the order.
              For this you can contact our customer service. They will cancel
              the order for you. The purchase amount will be back on your bank
              account within two working days. When an order has already been
              shipped, it can no longer be cancelled.
            </p>
          </div>

          {/* ----------------------------------3.3------------------ */}
          <div className=" flex flex-col my-5 lg:my-7 font-poppins  gap-2">
            <h2 className=" text-gray-700 font-semibold text-sm lg:text-base">
              When will I receive the invoice for my order?
            </h2>
            <p className="text-gray-500 leading-normal  text-xs lg:text-base">
              When you have paid for the order, you will not automatically
              receive an invoice for your order. If you wish to receive an
              invoice, this can be done in two ways.The first way is through
              your account at our store. When you log in to your account you can
              see your orders and download the invoice.
            </p>
          </div>
        </div>

        {/* --------------------4th question ------------------- */}
        <div id='returns' className="flex flex-col w-[100%]">
          {/* --------------title---------------------- */}
          <h1 className="font-libre text-2xl lg:text-3xl border-b-2 border-green-800 w-max max-w-[100%] py-2">
            Returns, exchanges and complaints
          </h1>
          {/* ----------------------------------4.1------------------ */}
          <div className=" flex flex-col my-5 lg:my-7 font-poppins  gap-2">
            <h2 className=" text-gray-700 font-semibold text-sm lg:text-base">
              When do I recieve my order?
            </h2>
            <p className="text-gray-500 leading-normal  text-xs lg:text-base">
              When placing the order, a day of shipment is indicated. After the
              order has been placed, the same delivery time will also be stated
              on the order confirmation. It is therefore never possible that
              during the order, the shipping day on the website, is different
              than on the order confirmation.
            </p>
          </div>

          {/* ----------------------------------4.2------------------ */}
          <div className=" flex flex-col my-5 lg:my-7 font-poppins  gap-2">
            <h2 className=" text-gray-700 font-semibold text-sm lg:text-base">
              I now see the longer delivery time of (a part of) my order. How
              can I cancel it?
            </h2>
            <p className="text-gray-500 leading-normal  text-xs lg:text-base">
              If the order has a longer delivery time than you had previously
              seen, it is of course possible to cancel (a part of) the order.
              For this you can contact our customer service. They will cancel
              the order for you. The purchase amount will be back on your bank
              account within two working days. When an order has already been
              shipped, it can no longer be cancelled.
            </p>
          </div>

          {/* ----------------------------------4.3------------------ */}
          <div className=" flex flex-col my-5 lg:my-7 font-poppins  gap-2">
            <h2 className=" text-gray-700 font-semibold text-sm lg:text-base">
              When will I receive the invoice for my order?
            </h2>
            <p className="text-gray-500 leading-normal  text-xs lg:text-base">
              When you have paid for the order, you will not automatically
              receive an invoice for your order. If you wish to receive an
              invoice, this can be done in two ways.The first way is through
              your account at our store. When you log in to your account you can
              see your orders and download the invoice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
