import React, { useState } from "react";

const BillForm = ({ deliveryData, totalPrice, onProceed }) => {
  // Local states for promo code, error, discount, and payment method
  const [promoCode, setPromoCode] = useState("");
  const [promoError, setPromoError] = useState("");
  const [discount, setDiscount] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("");

  // Calculate final amount = total price + handling charge - discount
  const grandTotal = (totalPrice + 20 - discount).toFixed(2);

  // Handle promo code application
  const handleApplyPromo = () => {
    if (promoCode === "DISCOUNT10") {
      // Apply 10% discount if correct promo code
      setDiscount(0.1 * totalPrice);
      setPromoError("");
    } else {
      // Show error if code is invalid
      setPromoError("Invalid promo code");
      setDiscount(0);
    }
  };

  // Handle proceed button (check if payment method is selected first)
  const handleProceed = () => {
    if (!paymentMethod) {
      alert("Please select a payment method!");
      return;
    }
    // Call parent callback with payment method and final total
    onProceed(paymentMethod, grandTotal);
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">Bill Details & Payment</h1>

      {/* Item Total */}
      <div className="flex justify-between mb-2">
        <span>Items Total</span>
        <span>₹ {totalPrice}</span>
      </div>

      {/* Handling charges */}
      <div className="flex justify-between mb-2">
        <span>Handling Charge</span>
        <span>₹ 20</span>
      </div>

      {/* Discount section (visible only if discount > 0) */}
      {discount > 0 && (
        <div className="flex justify-between mb-2 text-green-600">
          <span>Discount</span>
          <span>- ₹ {discount.toFixed(2)}</span>
        </div>
      )}

      {/* Final Total */}
      <div className="flex justify-between mb-4 font-bold">
        <span>Grand Total</span>
        <span>₹ {grandTotal}</span>
      </div>

      {/* Promo Code input */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter code"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
          className="p-2 border border-gray-300 rounded-md w-full"
        />
        <button
          onClick={handleApplyPromo}
          className="border border-gray-300 px-4 py-2 rounded-md"
        >
          Apply
        </button>
      </div>
      {/* Show promo error if invalid */}
      {promoError && <p className="text-red-500 mb-2">{promoError}</p>}

      {/* Payment Method section */}
      <div className="mb-4">
        <h2 className="font-semibold mb-2">Select Payment Method</h2>
        {["Credit Card", "UPI", "Cash on Delivery"].map((method) => (
          <label key={method} className="flex items-center gap-2 mb-1">
            <input
              type="radio"
              name="payment"
              value={method}
              checked={paymentMethod === method}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            {method}
          </label>
        ))}
      </div>

      {/* Checkout button */}
      <button
        onClick={handleProceed}
        className="bg-red-500 text-white px-4 py-2 rounded-md w-full"
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default BillForm;
