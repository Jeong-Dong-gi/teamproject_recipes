import styled from 'styled-components';
import Slider from 'react-slick';

export const SliderContainer = styled(Slider)`
  width: 80%;
  margin: 20px auto;

  img {
    width: 90%;
    max-height: 150px;
    height: 100%;
    border-radius: 10px;
  }
`;

export const RecommendWrapper = styled.div`
  padding: 20px;
`;

export const SectionTitle = styled.h2`
  margin-bottom: 20px;
`;

export const SubTitle = styled.h3`
  margin-top: 50px;
  margin-left: 150px;
`;
