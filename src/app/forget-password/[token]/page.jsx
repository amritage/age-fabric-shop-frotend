'use client';

import ForgotPasswordArea from "@/components/fortgot-password/forgot-password-area";

export default function ForgetPasswordPage({ params }) {
  return (
    <>
      <ForgotPasswordArea token={params.token} />
    </>
  );
}
