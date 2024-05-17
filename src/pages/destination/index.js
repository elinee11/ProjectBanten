import { useEffect, useState } from "react";
import { SearchBox } from "../../components/atoms";
import {
  Breadcrumb,
  CardImage,
  Container,
  Section,
} from "../../components/molecules";
import { Template } from "../../components/organisms";
import { useFetcherData } from "../../hooks";
import { removeImageSizeSuffix } from "../../utils/strings";

export default function Destination() {
  const { data, dataLoading } = useFetcherData("destinations");
  const [isSearch, setIsSearch] = useState(false);
  const [dataSearch, setDataSearch] = useState([]);

  useEffect(() => {
    if (!isSearch && data) {
      setDataSearch(data);
    }
  }, [isSearch, data]);

  return (
    <Template title="Destinasi">
      <Section id="headline" isTop={true}>
        <Container className="text-white-950">
          <Breadcrumb />
          <h1 className="text-4xl font-bold mb-5 leading-[1.2] mb-8">
            Kunjungi Wisata Terpopuler
          </h1>
          <SearchBox
            data={data}
            placeholder="Masukkan Nama Wisata"
            result={(destination) => {
              setIsSearch(true);
              setDataSearch(destination);
            }}
          />
          {dataLoading ? (
            <p className="text-white-500 text-lg text-center pt-20">
              Sedang Memuat Destinasi Wisata ...
            </p>
          ) : dataSearch.length === 0 ? (
            <p className="text-white-500 text-lg text-center pt-20">
              Destinasi wisata yang anda cari tidak tersedia
            </p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
              {dataSearch.map((destination, index) => (
                <CardImage
                  key={index}
                  image={removeImageSizeSuffix(destination.featured_media)}
                  title={destination.title.rendered}
                  href={`/wisata/${destination.slug}`}
                  description={destination.content.rendered}
                  noPadding
                  shadow
                />
              ))}
            </div>
          )}
        </Container>
      </Section>
    </Template>
  );
}
