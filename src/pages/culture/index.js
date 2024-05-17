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

export default function Culture() {
  const { data, dataLoading } = useFetcherData("culture");
  const [isSearch, setIsSearch] = useState(false);
  const [dataSearch, setDataSearch] = useState([]);

  useEffect(() => {
    if (!isSearch && data) {
      setDataSearch(data);
    }
  }, [isSearch, data]);

  return (
    <Template title="Budaya">
      <Section id="headline" isTop={true}>
        <Container className="text-white-950">
          <Breadcrumb />
          <h1 className="text-4xl font-bold mb-5 leading-[1.2] mb-8">
            Ragam Budaya Tradisional Di Provinsi Banten
          </h1>
          <SearchBox
            data={data}
            placeholder="Masukkan Nama Budaya"
            result={(cultureData) => {
              setIsSearch(true);
              setDataSearch(cultureData);
            }}
          />
          {dataLoading ? (
            <p className="text-white-500 text-lg text-center pt-20">
              Sedang Memuat Destinasi Wisata ...
            </p>
          ) : dataSearch.length === 0 ? (
            <p className="text-white-500 text-lg text-center pt-20">
              Budaya yang anda cari tidak tersedia ...
            </p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
              {dataSearch.map((cultureData, index) => (
                <CardImage
                  key={index}
                  image={removeImageSizeSuffix(cultureData.featured_media)}
                  title={cultureData.title.rendered}
                  href={`/budaya/${cultureData.slug}`}
                  description={cultureData.content.rendered}
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
