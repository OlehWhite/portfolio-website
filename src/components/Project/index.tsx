import { FC, useEffect, useRef } from "react";
import {
  Container,
  Wrapper,
  Title,
  Text,
  Image,
  LeftButton,
  RightButton,
  Box,
  StyledSlider,
} from "./style";
import IMGLeft from "../../assets/icons/left-arrow.png";
import IMGRight from "../../assets/icons/right-arrow.png";
import Slider from "react-slick";

interface ImgProject {
  title: string;
  img: string;
}

type TProject = {
  images: ImgProject[];
  title: string;
  text: string;
};

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  useTransform: false,
};

export const Project: FC<TProject> = ({ images, title, text }) => {
  const ref = useRef<Slider | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      onNext();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const onNext = (): void => {
    ref.current?.slickNext();
  };

  const onPrev = (): void => {
    ref.current?.slickPrev();
  };

  return (
    <Container>
      <Title>{title}</Title>
      <Text>{text}</Text>
      <Wrapper>
        <LeftButton
          src={IMGLeft}
          alt="Left Button"
          title="Left Button"
          onClick={onPrev}
        />
        <StyledSlider ref={ref} {...settings}>
          {images.map(({ title, img }) => (
            <Box key={title}>
              <Image src={img} title={title} alt={title} />
            </Box>
          ))}
        </StyledSlider>
        <RightButton
          src={IMGRight}
          alt="Right Button"
          title="Right Button"
          onClick={onNext}
        />
      </Wrapper>
    </Container>
  );
};
