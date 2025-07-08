'use client';

import dynamic from 'next/dynamic';
import Footer from "@/layout/footers/footer";
import CommonBreadcrumb from "@/components/breadcrumb/common-breadcrumb";
import ForgotArea from "@/components/login-register/forgot-area";

const Wrapper = dynamic(() => import('@/layout/wrapper'), { ssr: false });
const HeaderTwo = dynamic(() => import('@/layout/headers/header-2'), { ssr: false });

export default function ForgotPage() {
  return (
    <Wrapper>
      <HeaderTwo style_2={true} />
      <CommonBreadcrumb title="Forgot Password" subtitle="Reset Password" center={true} />
      <ForgotArea />
      <Footer primary_style={true} />
    </Wrapper>
  );
}
