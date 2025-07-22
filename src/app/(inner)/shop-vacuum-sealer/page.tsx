"use client"
import HeaderOne from "@/components/header/HeaderOne";
import { useState } from 'react';
import ShopMain from "./ShopMain";
import ShopMainList from "./ShopMainList";
import Product from '@/data/Product.json';


import FooterOne from "@/components/footer/FooterOne";


interface PostType {
  category?: string;
  slug: string;
  image: string;
  title?: string;
  author?: string;
  publishedDate?: string;
  price?: string;
}

export default function Home() {

  // product content
  const selectedPosts = Product.slice(1, 16);


  const postIndicesSection1 = [23, 24, 25, 26, 27, 28, 29, 30];
  const postIndicesSection2 = [5, 6, 4, 7, 8, 5, 8, 9];

  // Helper function to get posts from indices
  const getPostsByIndices = (indices: number[]): PostType[] =>
    indices.map(index => Product[index]).filter(Boolean);

  // Prepare post groups
  const postsSection1 = getPostsByIndices(postIndicesSection1);
  const postsSection2 = getPostsByIndices(postIndicesSection2);



  // tab
  const [activeTab, setActiveTab] = useState<string>('tab1');



  return (
    <div>
      <HeaderOne />

      <div className="rts-navigation-area-breadcrumb bg_light-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="navigator-breadcrumb-wrapper">
                <a href="/">Home</a>
                <i className="fa-regular fa-chevron-right" />
                <a className="current" href="#">
                  Vacuum Sealers
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-seperator bg_light-1">
        <div className="container">
          <hr className="section-seperator" />
        </div>
      </div>
      <>
        {/* shop[ grid sidebar wrapper */}
        <div className="shop-grid-sidebar-area rts-section-gap">
          <div className="container">
            <div className="row g-0">
              <div className="col-xl-12 col-lg-12">
                <div className="tab-content" id="myTabContent">
                  <div
                    className="product-area-wrapper-shopgrid-list mt--20 tab-pane fade show active">
                    {activeTab === 'tab1' &&
                      <div>
                        <div className="row g-4">
                          {postsSection1.map((post: PostType, index: number) => (
                            <div
                              key={index}
                              className="col-lg-20 col-lg-4 col-md-6 col-sm-6 col-12"
                            >
                              <div className="single-shopping-card-one">
                                <ShopMain
                                  Slug={post.slug}
                                  ProductImage={post.image}
                                  ProductTitle={post.title}
                                  Price={post.price}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* shop[ grid sidebar wrapper end */}
      </>
      <FooterOne />
    </div>
  );
}
