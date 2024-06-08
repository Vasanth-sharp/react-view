import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const token = JSON.parse(sessionStorage.getItem("token"));
  const [orderId, setOrderId] = useState("");
  const product = location.state?.product; //location.state =null if it not pass
  useEffect(() => {
    if (product === undefined) {
      navigate("/login");
      sessionStorage.removeItem("token");
    } else {
      fetch("https://v-cart.onrender.com/api/coi", {
        method: "POST",
        body: JSON.stringify({
          price: product.price,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          token: token,
        },
      })
        .then((res) => res.json())
        .then((res) => {
          //   console.log(res);
          setOrderId(res.id);
        })
        .catch((err) => console.error(err));
    }
  }, [navigate, product, token]);
  //   console.log(orderId);

  const displayRazorpay = async () => {
    const options = {
      key: "rzp_test_zJV6XVc4LISPdU",
      amount: product.price * 100, // Amount is in paise, so this is 50 INR
      currency: "INR",
      name: "ECommerce",
      description: "Pay & Checkout this product",
      order_id: orderId,
      handler: (response) => {
        fetch("https://v-cart.onrender.com/api/vo", {
          method: "POST",
          body: JSON.stringify({
            product: product.title,
            price: product.price,
            sign: response.razorpay_signature,
            orderId: response.razorpay_order_id,
            paymentId: response.razorpay_payment_id,
            paymentMethod: "Net Banking",
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            token: token,
          },
        })
          .then((res) => {
            if (res.status === 200) {
              toast.success("You'll get confirmation mail");
            } else {
              toast.error("Signature problem");
            }
          })
          .catch((err) => console.error(err));
      },
      prefill: {
        name: "Vasanth",
        email: "vasanth98@gmail.com",
        contact: "9842359811",
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div class="flex flex-col items-center justify-center h-screen bg-gray-100">
  <h1 class="text-4xl font-bold text-center text-gray-800 mb-8">Welcome to V-cart Payment</h1>
  <div class="flex flex-row justify-center space-x-4">
    <button
      class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      onClick={() => displayRazorpay()}
    >
      Pay Bill
    </button>
    <button
      class="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      onClick={() => navigate('/home')}
    >
      Home
    </button>
    <button
      class="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      onClick={() => navigate('/user')}
    >
      User
    </button>
  </div>
</div>

  );
}
