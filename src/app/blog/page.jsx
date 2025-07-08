'use client';

import dynamic from 'next/dynamic';
import BlogBreadcrumb from "@/components/breadcrumb/blog-breadcrumb";
import Footer from "@/layout/footers/footer";

// Dynamically import Wrapper, HeaderTwo, and BlogPostboxArea with SSR disabled
const Wrapper = dynamic(() => import('@/layout/wrapper'), { ssr: false });
const HeaderTwo = dynamic(() => import('@/layout/headers/header-2'), { ssr: false });
const BlogPostboxArea = dynamic(() => import('@/components/blog/blog-postox/blog-postbox-area'), { ssr: false });

export default function BlogPage() {
  return (
    <Wrapper>
      <HeaderTwo style_2={true} />
      <BlogBreadcrumb />
      <BlogPostboxArea />
      <Footer primary_style={true} />
    </Wrapper>
  );
}
