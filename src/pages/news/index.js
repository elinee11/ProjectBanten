import { useEffect, useState } from "react";
import {
  Breadcrumb,
  CardFullWidth,
  Container,
  Section,
} from "../../components/molecules";
import { Template } from "../../components/organisms";
import { useFetcherData } from "../../hooks";
import { SearchBox } from "../../components/atoms";
import { removeImageSizeSuffix } from "../../utils/strings";
import WeatherApi from "../../components/WeatherApi";

export default function News() {
  const { data, dataLoading } = useFetcherData("posts");
  const [isSearch, setIsSearch] = useState(false);
  const [dataSearch, setDataSearch] = useState([]);

  useEffect(() => {
    if (!isSearch && data) {
      setDataSearch(data);
    }
  }, [isSearch, data]);

  return (
    <Template title="Berita">
      <Section id="headline" isTop={true}>
        <Container className="text-white-950">
          <Breadcrumb />
          <h1 className="text-4xl font-bold mb-5 leading-[1.2] mb-8">
            Berita Wisata dan Budaya Provinsi Banten
          </h1>
          <SearchBox
            data={data}
            placeholder="Masukkan Judul Berita"
            result={(newsData) => {
              setIsSearch(true);
              setDataSearch(newsData);
            }}
          />
          {dataLoading ? (
            <p className="text-white-500 text-lg text-center pt-20">
              Sedang Memuat Berita Terbaru ...
            </p>
          ) : dataSearch.length === 0 ? (
            <p className="text-white-500 text-lg text-center pt-20">
              Berita yang anda cari tidak tersedia
            </p>
          ) : (
            <div className="grid md:grid-cols-2 gap-10 mt-8">
              {dataSearch.map((newsData, index) => (
                <CardFullWidth
                  key={index}
                  title={newsData.title.rendered}
                  slug={`${newsData.slug}`}
                  description={newsData.content.rendered}
                  image={removeImageSizeSuffix(newsData.featured_media)}
                />
              ))}
            </div>
          )}
          <WeatherApi />
        </Container>
      </Section>
    </Template>
  );
}
