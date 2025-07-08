'use client';

import dynamic from 'next/dynamic';
import ContactBreadcrumb from "@/components/breadcrumb/contact-breadcrumb";
import ContactArea from "@/components/contact/contact-area";
import ContactMap from "@/components/contact/contact-map";
import Footer from "@/layout/footers/footer";

export default function ContactPage() {
  const Wrapper = dynamic(() => import('@/layout/wrapper'), { ssr: false });
  const HeaderTwo = dynamic(() => import('@/layout/headers/header-2'), { ssr: false });
  return (
    <Wrapper>
      <HeaderTwo style_2={true} />
      <ContactBreadcrumb />
      <ContactArea/>
      <ContactMap/>
      <Footer primary_style={true} />
    </Wrapper>
  );
}
