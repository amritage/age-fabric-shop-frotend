'use client';
import Image from "next/image";
import { useState } from "react";

const DetailsThumbWrapper = ({
  imageURLs,
  handleImageActive,
  activeImg,
  imgWidth = 416,
  imgHeight = 480,
  videoId = false,
  status
}) => {
  const [isVideoActive, setIsVideoActive] = useState(false);

  // Log videoId and isVideoActive for debugging
  console.log('videoId in DetailsThumbWrapper:', videoId);
  console.log('isVideoActive:', isVideoActive);

  return (
    <>
      <div className="tp-product-details-thumb-wrapper tp-tab d-sm-flex">
        <nav>
          <div className="nav nav-tabs flex-sm-column">
            {imageURLs?.map((item, i) => {
              // Only use Next.js <Image /> for optimized images
              return item.type === "video" ? (
                <button
                  key={i}
                  className={`nav-link ${isVideoActive ? "active" : ""}`}
                  onClick={() => setIsVideoActive(true)}
                  type="button"
                >
                  <Image
                    src={item.img}
                    alt="video thumbnail"
                    width={80}
                    height={80}
                    style={{ width: "100%", height: "100%", objectFit: 'cover' }}
                  />
                  <span className="video-play-icon">
                    <i className="fas fa-play"></i>
                  </span>
                </button>
              ) : (
                <button
                  key={i}
                  className={`nav-link ${item.img === activeImg && !isVideoActive ? "active" : ""}`}
                  onClick={() => {
                    handleImageActive(item);
                    setIsVideoActive(false);
                  }}
                  type="button"
                >
                  <Image
                    src={item.img}
                    alt="image"
                    width={80}
                    height={80}
                    style={{ width: "100%", height: "100%", objectFit: 'cover' }}
                  />
                </button>
              );
            })}
          </div>
        </nav>
        <div className="tab-content m-img">
          <div className="tab-pane fade show active">
            <div className="tp-product-details-nav-main-thumb p-relative">
              {isVideoActive && videoId ? (
                <video
                  src={videoId}
                  controls
                  autoPlay
                  style={{ width: imgWidth, height: imgHeight, background: "#000" }}
                />
              ) : (
                <Image
                  src={activeImg}
                  alt="product img"
                  width={imgWidth}
                  height={imgHeight}
                />
              )}
              <div className="tp-product-badge">
                {status === 'out-of-stock' && <span className="product-hot">out-stock</span>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsThumbWrapper;