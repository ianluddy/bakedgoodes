import styled from 'styled-components';
import theme from '../themes/default';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

import Image from './image';
import ProductTile from './productTile';

export default ({ products, excludeId, productType }) => {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={10}
      slidesPerView={2}
      loop={true}
      pagination={{ clickable: true }}
      breakpoints={{
        [theme.breakpoints.xs]: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        [theme.breakpoints.sm]: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        [theme.breakpoints.md]: {
          slidesPerView: 3,
          spaceBetween: 10
        },
        [theme.breakpoints.lg]: {
          slidesPerView: 4,
          spaceBetween: 10
        },
        [theme.breakpoints.xl]: {
          slidesPerView: 4,
          spaceBetween: 10
        }
      }}
    >
    {
      products.filter(product =>
        product.id != excludeId
      ).map(product => (
        <SwiperSlide key={product.id}>
          <ProductTile 
            key={product.id}
            path={`/${productType}/${product.id}`}
            title={product.meta.title}
            caption={product.meta.caption}
            desc={product.meta.desc}
            src={product.meta.src}
            link={product.meta.link}
          />
        </SwiperSlide>
      ))
    }
    </Swiper>
  );
};
