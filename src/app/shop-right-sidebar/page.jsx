'use client';

import dynamic from 'next/dynamic';
import Footer from "@/layout/footers/footer";
import ShopBreadcrumb from "@/components/breadcrumb/shop-breadcrumb";
import ShopArea from "@/components/shop/shop-area";

export default function ShopRightSidebarPage() {
  const Wrapper = dynamic(() => import('@/layout/wrapper'), { ssr: false });
  const HeaderTwo = dynamic(() => import('@/layout/headers/header-2'), { ssr: false });

  return (
    <Wrapper>
      <HeaderTwo style_2={true} />
      <ShopBreadcrumb title="Shop Grid" subtitle="Shop Grid" />
      <ShopArea shop_right={true}/>
      <Footer primary_style={true} />
    </Wrapper>
  );
}
