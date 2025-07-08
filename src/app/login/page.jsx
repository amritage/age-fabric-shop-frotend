'use client';

import dynamic from 'next/dynamic';
import Footer from "@/layout/footers/footer";
import CommonBreadcrumb from "@/components/breadcrumb/common-breadcrumb";
import LoginArea from "@/components/login-register/login-area";

// Dynamically import Wrapper and HeaderTwo with SSR disabled
const Wrapper = dynamic(() => import('@/layout/wrapper'), { ssr: false });
const HeaderTwo = dynamic(() => import('@/layout/headers/header-2'), { ssr: false });

export default function LoginPage() {
  return (
    <Wrapper>
      <HeaderTwo style_2={true} />
      <CommonBreadcrumb title="Login" subtitle="Login" center={true} />
      <LoginArea/>
      <Footer primary_style={true} />
    </Wrapper>
  );
}
