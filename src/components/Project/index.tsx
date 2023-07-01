import {
  Text,
  Image,
  Button,
  StyledSlider,
  Wrapper,
  BoxButton,
  Container,
  Link,
} from "./style";
import IMGRight from "../../assets/icons/right-arrow.png";
import IMGLeft from "../../assets/icons/left-arrow.png";
import { FC, useEffect, useRef } from "react";
import Slider from "react-slick";

interface ImgProject {
  title: string;
  img: string;
}

type TProject = {
  images: ImgProject[];
  title: string;
  text: string;
  link: string;
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

export const Project: FC<TProject> = ({ images, title, text, link }) => {
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
      <Link href={link} target="_blank">
        {title}
      </Link>
      <Text>{text}</Text>
      <div>
        <StyledSlider ref={ref} {...settings}>
          {images.map(({ title, img }) => (
            <div key={title}>
              <Image src={img} title={title} alt={title} />
            </div>
          ))}
        </StyledSlider>
        <BoxButton>
          <Wrapper onClick={onPrev}>
            <Button src={IMGLeft} alt="Left Button" title="Left Button" />
          </Wrapper>
          <Wrapper onClick={onNext}>
            <Button src={IMGRight} alt="Right Button" title="Right Button" />
          </Wrapper>
        </BoxButton>
      </div>
    </Container>
  );
};
