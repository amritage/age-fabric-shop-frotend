'use client';

import EmailVerifyArea from "@/components/email-verify/email-verify-area";

export default function EmailVerifyPage({ params }) {
  return (
    <>
      <EmailVerifyArea token={params.token} />
    </>
  );
}
