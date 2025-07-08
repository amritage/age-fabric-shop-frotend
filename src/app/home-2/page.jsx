'use client';

import dynamic from 'next/dynamic';
import Footer from "@/layout/footers/footer";
import Home2PrdLoader from "@/components/loader/home-2/home-2-prd-loder";

// Dynamically import Wrapper and HeaderTwo with SSR disabled
const Wrapper = dynamic(() => import('@/layout/wrapper'), { ssr: false });
const HeaderTwo = dynamic(() => import('@/layout/headers/header-2'), { ssr: false });

// Remove dynamic import and use Home2PrdLoader directly
export default function Home2Page() {
  return (
    <Wrapper>
      <HeaderTwo style_2={true} />
      <Home2PrdLoader />
      <Footer primary_style={true} />
    </Wrapper>
  );
}
