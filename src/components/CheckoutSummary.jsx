import React from "react";

const CheckoutSummary = ({ deliveryData, totalAmount, paymentMethod }) => {
  const handlePlaceOrder = () => {
    alert("Order placed successfully! 🎉");
    // Navigate to products page after order success
    window.location.href = "/products";
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">Checkout Summary</h1>

      <div className="mb-4">
        <h2 className="font-semibold">Delivery Information:</h2>
        <p>Name: {deliveryData.fullName}</p>
        <p>
          Address: {deliveryData.address}, {deliveryData.state},{" "}
          {deliveryData.postcode}
        </p>
        <p>Country: {deliveryData.country}</p>
        <p>Phone: {deliveryData.phone}</p>
      </div>

      <div className="mb-4">
        <h2 className="font-semibold">Payment Method:</h2>
        <p>{paymentMethod}</p>
      </div>

      <div className="mb-4">
        <h2 className="font-semibold">Order Total:</h2>
        <p className="text-lg font-bold">₹ {totalAmount}</p>
      </div>

      <button
        onClick={handlePlaceOrder}
        className="bg-green-500 text-white px-4 py-2 rounded-md w-full"
      >
        Place Order
      </button>
    </div>
  );
};

export default CheckoutSummary;
