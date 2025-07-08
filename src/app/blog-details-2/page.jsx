'use client';

import dynamic from 'next/dynamic';
import blogData from "@/data/blog-data";
import BlogDetailsAreaTwo from "@/components/blog-details/blog-details-area-2";
import Footer from "@/layout/footers/footer";

export default function BlogDetailsPageTwo() {
  const Wrapper = dynamic(() => import('@/layout/wrapper'), { ssr: false });
  const HeaderTwo = dynamic(() => import('@/layout/headers/header-2'), { ssr: false });

  return (
    <Wrapper>
      <HeaderTwo style_2={true} />
      <BlogDetailsAreaTwo blog={blogData[4]} />
      <Footer primary_style={true} />
    </Wrapper>
  );
}