"use client";

import { useEffect, useState } from "react";
import { StripeElementsOptions ,loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "@/components/CheckoutForm";

//Khởi tạo Stripe Promise dùng hàm loadStripe
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);


const PayPage = ({params}: {params: {id: string}}) => {
  //Dùng useState để lưu trữ client_secret của PaymentIntent
  const [clientSecret, setClientSecret] = useState("")
  const {id} = params

  //Cấu hình giao diện Stripe
  const options:StripeElementsOptions = {
    clientSecret,
    appearance: {
      theme: "stripe"
    },
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/create-intent/${id}`,{
          method: "POST"
        })
        const data = await res.json()
        setClientSecret(data.clientSecret)
      } catch (err) {
        console.log(err)
      }
    }

    makeRequest()
  },[id])

  console.log(clientSecret)

  return (
    //Render ra giao diện thanh toán
    <div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm id={id}/>
        </Elements>
      )}
    </div>
  )
};

export default PayPage;
