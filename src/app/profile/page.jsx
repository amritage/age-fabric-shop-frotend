'use client';

import dynamic from 'next/dynamic';
import Footer from "@/layout/footers/footer";

// Dynamically import Wrapper, HeaderTwo, and ProfileArea with SSR disabled
const Wrapper = dynamic(() => import('@/layout/wrapper'), { ssr: false });
const HeaderTwo = dynamic(() => import('@/layout/headers/header-2'), { ssr: false });
const ProfileArea = dynamic(() => import('@/components/my-account/profile-area'), { ssr: false });

export default function ProfilePage() {
  return (
    <Wrapper>
      <HeaderTwo style_2={true} />
      <ProfileArea />
      <Footer style_2={true} />
    </Wrapper>
  );
}
