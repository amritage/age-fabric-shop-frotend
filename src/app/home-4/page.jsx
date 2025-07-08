'use client';

import dynamic from 'next/dynamic';
import JewelryBanner from '@/components/banner/jewelry-banner';
import JewelryShopBanner from '@/components/shop-banner/jewelry-shop-banner';
import JewelryAbout from '@/components/about/jewelry-about';
import PopularProducts from '@/components/products/jewelry/popular-products';
import ProductArea from '@/components/products/jewelry/product-area';
import JewelryCollectionBanner from '@/components/shop-banner/jewelry-collection-banner';
import BestSellerPrd from '@/components/products/jewelry/best-seller-prd';
import JewelryBrands from '@/components/brand/jewelry-brands';
import InstagramAreaFour from '@/components/instagram/instagram-area-4';
import FeatureAreaThree from '@/components/features/feature-area-3';
import FooterTwo from '@/layout/footers/footer-2';

const Wrapper = dynamic(() => import('@/layout/wrapper'), { ssr: false });
const HeaderFour = dynamic(() => import('@/layout/headers/header-4'), { ssr: false });

export default function HomePageFour() {
  return (
    <Wrapper>
      <HeaderFour/>
      <JewelryBanner/>
      <FeatureAreaThree />
      <JewelryShopBanner/>
      <JewelryAbout/>
      <PopularProducts/>
      <ProductArea/>
      <JewelryCollectionBanner/>
      <BestSellerPrd/>
      <JewelryBrands/>
      <InstagramAreaFour/>
      <FooterTwo/>
    </Wrapper>
  );
}
