'use client';

import dynamic from 'next/dynamic';
import Footer from "@/layout/footers/footer";
import CommonBreadcrumb from "@/components/breadcrumb/common-breadcrumb";
import CartArea from "@/components/cart-wishlist/cart-area";

export default function CartPage() {
  const Wrapper = dynamic(() => import('@/layout/wrapper'), { ssr: false });
  const HeaderTwo = dynamic(() => import('@/layout/headers/header-2'), { ssr: false });

  return (
    <Wrapper>
      <HeaderTwo style_2={true} />
      <CommonBreadcrumb title="Shopping Cart" subtitle="Shopping Cart" />
      <CartArea />
      <Footer primary_style={true} />
    </Wrapper>
  );
}
