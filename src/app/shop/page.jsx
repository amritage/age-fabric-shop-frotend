'use client';

import dynamic from 'next/dynamic';
import Footer from "@/layout/footers/footer";
import ShopBreadcrumb from "@/components/breadcrumb/shop-breadcrumb";

// Dynamically import Wrapper, HeaderTwo, and ShopArea with SSR disabled
const Wrapper = dynamic(() => import('@/layout/wrapper'), { ssr: false });
const HeaderTwo = dynamic(() => import('@/layout/headers/header-2'), { ssr: false });
const ShopArea = dynamic(() => import('@/components/shop/shop-area'), { ssr: false });

export default function ShopPage() {
  return (
    <Wrapper>
      <HeaderTwo style_2={true} />
      <ShopBreadcrumb title="Shop" subtitle="Shop" />
      <ShopArea />
      <Footer primary_style={true} />
    </Wrapper>
  );
}
