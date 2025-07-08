'use client';
import dynamic from 'next/dynamic';
import Footer from "@/layout/footers/footer";

// Dynamically import Wrapper, HeaderTwo, and ProductDetailsArea with SSR disabled
const Wrapper = dynamic(() => import('@/layout/wrapper'), { ssr: false });
const HeaderTwo = dynamic(() => import('@/layout/headers/header-2'), { ssr: false });
const ProductDetailsArea = dynamic(() => import('@/components/product-details/product-details-area'), { ssr: false });

export default function ProductVideoDetailsPage() {
  return (
    <Wrapper>
      <HeaderTwo style_2={true} />
      <ProductDetailsArea id="641e887d05f9ee1717e13496" />
      <Footer primary_style={true} />
    </Wrapper>
  );
}
