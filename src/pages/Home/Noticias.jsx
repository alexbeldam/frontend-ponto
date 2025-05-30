import { useWidth } from "../../hooks/utils";
import { Carousel } from "react-responsive-carousel";
import { NoticiasContainer, ImagemContainer } from "./Styles";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const imagens = [
  {
    src: "https://firebasestorage.googleapis.com/v0/b/ponto-cpe.appspot.com/o/Public%2F1673641111333%2F1681150218555Canal%20de%20Reclamac%CC%A7o%CC%83es.jpg?alt=media",
    alt: "Canal de Reclamações",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/ponto-cpe.appspot.com/o/Public%2F1736775971047%2F1736776152354Repasses.jpg?alt=media",
    alt: "Sugestões Marketing Digital",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/ponto-cpe.appspot.com/o/Public%2F1689966683417%2F1689966824383Canal%20de%20Ouvidoria%20(2).png?alt=media",
    alt: "Canal de ouvidoria",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/ponto-cpe.appspot.com/o/Public%2F1673884732380%2F1681150135479Justificar%20Falta.jpg?alt=media",
    alt: "Justifique sua falta",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/ponto-cpe.appspot.com/o/Public%2F1674741138940%2F1681150062825Sistema%20de%20Adverte%CC%82ncia.jpg?alt=media",
    alt: "Sistema de advertência",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/ponto-cpe.appspot.com/o/Public%2F1707328763693%2F1707328828134Transpar%C3%AAncia.jpg?alt=media",
    alt: "Transparência",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/ponto-cpe.appspot.com/o/Public%2F1739394824987%2F1739395000694REQUISI%C3%87%C3%83O%20DE%20CAPACITA%C3%87%C3%95ES%20E%20PARCERIAS.jpg?alt=media",
    alt: "Requisição de capacitação e parcerias",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/ponto-cpe.appspot.com/o/Public%2F1739395102405%2F1739395205749REQUISI%C3%87%C3%83O%20DE%20CAPACITA%C3%87%C3%95ES%20E%20PARCERIAS%20(1).jpg?alt=media",
    alt: "Segestões para RAD",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/ponto-cpe.appspot.com/o/Public%2F1739295381649%2F1739309686026Reconhecimentos%20carrossel%20(1).png?alt=media",
    alt: "Reconhecimentos",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/ponto-cpe.appspot.com/o/Public%2F1736776258992%2F1742225666618zezin.jpeg?alt=media",
    alt: "Sugestões para o ponto",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/ponto-cpe.appspot.com/o/Public%2F1729614062427%2F1729614080402ft%20du.jpeg?alt=media",
    alt: "Canal de Solicitação de Reinvestimentos",
  },
  {
    src: "/minion.jpg",
    alt: "Minion de skate",
  },
];

export default function Noticias() {
  const newsPerSlide = useWidth() > 1400 ? 2 : 1;

  const slides = [];

  for (let i = 0; i < imagens.length; i += newsPerSlide) {
    const grupo = [];

    for (let j = 0; j < newsPerSlide; j++) {
      const el = imagens[j + i];

      if (el)
        grupo[j] = (
          <ImagemContainer key={`ni-${i + j}`}>
            <img src={el.src} alt={el.alt} />
          </ImagemContainer>
        );
    }

    slides.push(
      <div key={`n-${i}`} className='row'>
        {grupo}
      </div>
    );
  }

  return (
    <NoticiasContainer>
      <Carousel infiniteLoop showStatus={false} showThumbs={false} autoPlay interval={7000}>
        {slides}
      </Carousel>
    </NoticiasContainer>
  );
}
