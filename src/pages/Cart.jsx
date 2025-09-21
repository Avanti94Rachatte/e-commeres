import React, { useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FaRegTrashAlt } from "react-icons/fa";
import DeliveriForm from "../components/DeliveriForm";
import BillForm from "../components/BillForm";
import CheckoutSummary from "../components/CheckoutSummary";

export const Cart = () => {
  const { cartItem, updateQuantity, deleteItem } = useCart();
  const navigate = useNavigate();

  const totalPrice = Number(
    cartItem.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)
  );

  const [currentStep, setCurrentStep] = useState("cart"); // cart, bill, checkout
  const [deliveryData, setDeliveryData] = useState({});
  const [paymentMethod, setPaymentMethod] = useState("");
  const [grandTotal, setGrandTotal] = useState(0);

  if (cartItem.length === 0) {
    return (
      <div className="flex flex-col gap-4 justify-center items-center min-h-[60vh] px-4 text-center">
        <h1 className="font-bold text-2xl text-red-500">Cart is empty</h1>
        <DotLottieReact
          src="https://lottie.host/3bdd20c2-3f0a-4ff2-baf7-b2e83e41cbff/2bQyP8jLAh.lottie"
          loop
          autoplay
        />
        <button
          onClick={() => navigate("/products")}
          className="bg-red-500 text-white px-4 py-2 rounded-md"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  // Step Navigation
  if (currentStep === "bill") {
    return (
      <BillForm
        deliveryData={deliveryData}
        totalPrice={totalPrice}
        onProceed={(selectedPayment, total) => {
          setPaymentMethod(selectedPayment);
          setGrandTotal(total);
          setCurrentStep("checkout");
        }}
      />
    );
  }

  if (currentStep === "checkout") {
    return (
      <CheckoutSummary
        deliveryData={deliveryData}
        paymentMethod={paymentMethod}
        totalAmount={grandTotal}
      />
    );
  }

  return (
    <div className="mt-10 max-w-6xl mx-auto px-4 mb-5">
      <h1 className="font-bold text-2xl mb-6">My Cart - {cartItem.length}</h1>

      {/* Cart Items Section */}
      <div className="space-y-4 mb-6">
  {cartItem.map((item, index) => (
    <div
      key={index}
      className="bg-gray-100 p-4 rounded-md flex justify-between items-center flex-wrap gap-4"
    >
      {/* Left: Image + Title + Price */}
      <div className="flex gap-4 items-center min-w-0 flex-1">
        <img
          src={item.images[0]}
          alt={item.title}
          className="w-20 h-20 rounded-md flex-shrink-0 object-cover"
        />
        <div className="min-w-0">
          <h1 className="line-clamp-2 text-base font-medium break-words">
            {item.title}
          </h1>
          <p className="text-red-500 font-semibold text-lg mt-1">
            ₹ {item.price}
          </p>
        </div>
      </div>

      {/* Right: Quantity + Delete */}
      <div className="flex items-center gap-4 flex-shrink-0">
        <div className="bg-red-500 text-white flex items-center gap-3 px-3 py-2 rounded-md font-bold text-lg">
          <button
            onClick={() =>
              updateQuantity(cartItem, item.id, "decrease")
            }
            className="cursor-pointer"
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button
            onClick={() =>
              updateQuantity(cartItem, item.id, "increase")
            }
            className="cursor-pointer"
          >
            +
          </button>
        </div>

        <span
          onClick={() => deleteItem(item.id)}
          className="hover:bg-white/60 transition-all p-2 rounded-full hover:shadow-md cursor-pointer"
        >
          <FaRegTrashAlt className="text-red-500 text-xl" />
        </span>
      </div>
    </div>
  ))}
</div>


      {/* Delivery Form */}
      <div className="w-full flex justify-center">
        <div className="w-full md:w-1/2 lg:w-1/3">
          <DeliveriForm
            onSubmit={(data) => {
              setDeliveryData(data);
              setCurrentStep("bill");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
