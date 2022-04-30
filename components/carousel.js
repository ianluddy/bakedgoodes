import styled from 'styled-components';
import theme from '../themes/default';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import Image from './image';
import { Small as ProductTile } from './productTile';

const Wrapper = styled.div`
  text-align: center;
`;

export default ({ title, products, excludeId }) => {
  return (
    <Wrapper>
      <h2>{title}</h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={2}
        loop={true}
        autoplay={true}
        pagination={{ clickable: true }}
        breakpoints={{
          [theme.breakpoints.xs]: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          [theme.breakpoints.sm]: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          [theme.breakpoints.md]: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          [theme.breakpoints.lg]: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          [theme.breakpoints.xl]: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
      >
        {products
          .filter((product) => product.id != excludeId)
          .map((product) => (
            <SwiperSlide key={product.id}>
              <ProductTile
                key={product.id}
                path={product.meta.path}
                title={product.meta.title}
                src={product.meta.src}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </Wrapper>
  );
};
