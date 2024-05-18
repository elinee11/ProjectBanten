import { Button } from "./components/atoms";
import {
  CardFullWidth,
  CardImage, 
  Container,
  Section,
} from "./components/molecules";
import { Template } from "./components/organisms";
import PantaiSawarma from "./images/pantai-sawarma.png";
import SukuBaduy from "./images/suku-baduy.jpg";
import TradisiDebus from "./images/tradisi-debus.jpg";
import { useFetcherData } from "./hooks";
import { removeImageSizeSuffix } from "./utils/strings";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Weather from "./components/weather";
import "./index.css"

function App() {
  const [cultureSelected, setCultureSelected] = useState(0);
  const { data: destinations, dataLoading: destinationsLoading } =
    useFetcherData("destinations");
  const { data: culture, dataLoading: cultureLoading } =
    useFetcherData("culture");
  const { data: culinary, dataLoading: culinaryLoading } =
    useFetcherData("culinary");
  const { data: news, dataLoading: newsLoading } = useFetcherData("posts");

  useEffect(() => {
    const intervalCultureSelected = setInterval(() => {
      if (culture.length !== 0) {
        setCultureSelected((prevState) =>
          prevState >= culture.length - 1 ? 0 : prevState + 1
        );
      }
    }, 7000);

    return () => clearInterval(intervalCultureSelected);
  }, [culture, cultureSelected]);

  return (
    <Template title="Beranda">
      <Section id="headline" isTop={true}>
        <Container className="text-white-950">
          <div className="gap-6">

          <Weather />

          <h1 className="text-4xl md:text-5xl font-bold md:max-w-2xl mb-5 leading-[1.2]">
            Jelajah Wisata & Budaya Di Provinsi Banten
          </h1>
          </div>
          <p className="text-lg md:text-xl md:max-w-3xl mb-10">
            Temukan keindahan alam dan kekayaan budaya di Provinsi Banten dalam
            petualangan wisata yang menakjubkan.
          </p>
          <div className="relative w-full h-[290px]">
            <img
              src={PantaiSawarma}
              className="object-cover w-full h-full"
              alt="pantai-sawarma"
            />
          </div>
        </Container>
      </Section>
      <Section id="destinasi" className="bg-big-stone-950">
        <Container>
          <div className="flex justify-between items-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-medium leading-[1.2] text-white-50">
              Kunjungi Wisata Terpopuler
            </h2>
            <Button href="/wisata" className="hidden md:block" color="primary">
              Lihat Lebih Banyak
            </Button>
          </div>
          {destinationsLoading ? (
            <p className="text-white-500 text-lg text-center pt-20">
              Sedang Memuat Destinasi Wisata ...
            </p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destinations.map((destination, index) => {
                if (index < 3) {
                  return (
                    <CardImage
                      key={index}
                      image={removeImageSizeSuffix(destination.featured_media)}
                      title={destination.title.rendered}
                      href={`wisata/${destination.slug}`}
                      description={destination.content.rendered}
                    />
                  );
                }
              })}
              <Button
                href="/wisata"
                className="md:hidden text-center"
                color="primary"
              >
                Lihat Lebih Banyak
              </Button>
            </div>
          )}
        </Container>
      </Section>
      <Section id="budaya">
        <Container>
          <div className="flex justify-between items-center mb-16">
            <h2 className="text-3xl lg:text-4xl max-w-lg font-medium leading-[1.3]">
              Ragam Budaya Tradisional Di Provinsi Banten
            </h2>
            <Button href="/budaya" className="hidden md:block" color="primary">
              Lihat Lebih Banyak
            </Button>
          </div>
          {cultureLoading ? (
            <p className="text-white-500 text-lg text-center pt-20">
              Sedang Memuat Budaya ...
            </p>
          ) : (
            <div className="flex flex-row md:space-x-8">
              <div className="md:flex-none relative w-2/12 h-[350px] hidden md:block">
                <img
                  src={SukuBaduy}
                  alt="suku-baduy"
                  className="w-full h-full object-cover"
                />
              </div>
  
              <div className="md:grow relative w-full h-[350px]">
                <a href={`/budaya/${culture[cultureSelected].slug}`}>
                <img
                  src={removeImageSizeSuffix(
                    culture[cultureSelected].featured_media
                  )}
                  alt={culture[cultureSelected].title.rendered}
                  className="md:w-full h-full object-cover"
                />
                <div className="absolute top-0 w-full h-full bg-gradient-to-t from-big-stone-950 from-0% to-700%"></div>
                
                <div className="absolute top-0 w-full h-full z-10 text-white-50 p-5 flex flex-col justify-end">
                  <Link
                    to={`/budaya/${culture[cultureSelected].slug}`}
                    className="font-bold text-3xl mb-2"
                  >
                    {culture[cultureSelected].title.rendered}
                  </Link>
                  <div
                    className="text-white-300"
                    dangerouslySetInnerHTML={{
                      __html:
                        culture[cultureSelected].content.rendered.slice(
                          0,
                          170
                        ) + " ...",
                    }}
                  ></div>
                </div>            
                </a>  
              </div>
              <div className="flex-none relative w-2/12 h-[350px] hidden md:block">
                <img
                  src={TradisiDebus}
                  alt="tradisi-debus"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
        </Container>
      </Section>
      <Section id="kuliner" className="bg-big-stone-950">
        <Container>
          <div className="flex justify-between items-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-medium leading-[1.2] text-white-50">
              Eksplorasi Kuliner Provinsi Banten
            </h2>
            <Button href="/kuliner" className="hidden md:block" color="primary">
              Lihat Lebih Banyak
            </Button>
          </div>
          {culinaryLoading ? (
            <p className="text-white-500 text-lg text-center pt-20">
              Sedang Memuat Kuliner ...
            </p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {culinary.map((culinar, index) => {
                if (index < 3) {
                  return (
                    <CardImage
                      key={index}
                      image={removeImageSizeSuffix(culinar.featured_media)}
                      title={culinar.title.rendered}
                      href={`kuliner/${culinar.slug}`}
                      description={culinar.content.rendered}
                      bgTransparent
                      noPadding
                    />
                  );
                }
              })}
              <Button
                href="/kuliner"
                className="md:hidden text-center"
                color="primary"
              >
                Lihat Lebih Banyak
              </Button>
            </div>
          )}
        </Container>
      </Section>
      <Section id="berita">
        <Container>
          <div className="flex justify-around items-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-medium leading-[1.2]">
              Berita Wisata dan Budaya Provinsi Banten
            </h2>
            <Button href="/berita" 
            className="hidden md:block" 
            color="primary"
            >
            Lihat Lebih Banyak
            </Button>
          </div>  
          {newsLoading ? (
            <p className="text-white-500 text-lg text-center pt-20">
              Sedang Memuat Berita ...
            </p>
          ) : (
            <div className="grid md:grid-cols-2 gap-10 mt-8">
              {news.map((newsData, index) => {
                if (index < 2)
                  return (
                    <CardFullWidth
                      key={index}
                      title={newsData.title.rendered}
                      slug={`/berita/${newsData.slug}`}
                      description={newsData.content.rendered}
                      image={removeImageSizeSuffix(newsData.featured_media)}
                    />
                  );
              })}
              <Button
                href="/berita"
                className="md:hidden text-center"
                color="primary"
              >
                Lihat Lebih Banyak
              </Button>
            </div>
          )}
        </Container>
      </Section>
    </Template>
  );
}

export default App;
