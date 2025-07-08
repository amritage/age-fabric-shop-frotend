'use client';

import dynamic from 'next/dynamic';
import CommonBreadcrumb from "@/components/breadcrumb/common-breadcrumb";
import Footer from "@/layout/footers/footer";

// Dynamically import Wrapper, HeaderTwo, and SearchArea with SSR disabled
const Wrapper = dynamic(() => import('@/layout/wrapper'), { ssr: false });
const HeaderTwo = dynamic(() => import('@/layout/headers/header-2'), { ssr: false });
const SearchArea = dynamic(() => import('@/components/search/search-area'), { ssr: false });

export default function SearchPage() {
  return (
    <Wrapper>
      <HeaderTwo style_2={true} />
      <CommonBreadcrumb title="Search Products" subtitle="Search Products" />
      <SearchArea />
      <Footer primary_style={true} />
    </Wrapper>
  );
}
