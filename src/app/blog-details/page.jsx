'use client';

import dynamic from 'next/dynamic';
import Footer from "@/layout/footers/footer";
import BlogDetailsArea from "@/components/blog-details/blog-details-area";
import blogData from "@/data/blog-data";


export default function BlogDetailsPage() {
  const Wrapper = dynamic(() => import('@/layout/wrapper'), { ssr: false });
  const HeaderTwo = dynamic(() => import('@/layout/headers/header-2'), { ssr: false });

  return (
    <Wrapper>
      <HeaderTwo style_2={true} />
      <BlogDetailsArea blog={blogData[4]} />
      <Footer primary_style={true} />
    </Wrapper>
  );
}
