'use client';

import dynamic from 'next/dynamic';
import Footer from "@/layout/footers/footer";
import ShopBreadcrumb from "@/components/breadcrumb/shop-breadcrumb";

// Dynamically import Wrapper, HeaderTwo, and ShopCategoryArea with SSR disabled
const Wrapper = dynamic(() => import('@/layout/wrapper'), { ssr: false });
const HeaderTwo = dynamic(() => import('@/layout/headers/header-2'), { ssr: false });
const ShopCategoryArea = dynamic(() => import('@/components/categories/shop-category-area'), { ssr: false });

export default function CategoryPage() {
  return (
    <Wrapper>
      <HeaderTwo style_2={true} />
      <ShopBreadcrumb title="Only Categories" subtitle="Only Categories" />
      <ShopCategoryArea />
      <Footer primary_style={true} />
    </Wrapper>
  );
}
