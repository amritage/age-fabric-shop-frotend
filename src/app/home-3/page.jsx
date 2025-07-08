'use client';

import dynamic from 'next/dynamic';
import Footer from "@/layout/footers/footer";
import BeautyPrdLoader from "@/components/loader/home-3/beauty-prd-loader";

// Dynamically import Wrapper and HeaderTwo with SSR disabled
const Wrapper = dynamic(() => import('@/layout/wrapper'), { ssr: false });
const HeaderTwo = dynamic(() => import('@/layout/headers/header-2'), { ssr: false });

// Remove dynamic import and use BeautyPrdLoader directly
export default function Home3Page() {
  return (
    <Wrapper>
      <HeaderTwo style_2={true} />
      <BeautyPrdLoader />
      <Footer primary_style={true} />
    </Wrapper>
  );
}
