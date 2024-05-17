import { useEffect } from "react";
import { Breadcrumb, Container, Section } from "../../components/molecules";
import { Template } from "../../components/organisms";
import { useFetcherData } from "../../hooks";
import { useParams, useNavigate } from "react-router-dom";
import { removeImageSizeSuffix } from "../../utils/strings";

/*
 * Halaman yang berfunsi untuk menangani halaman single page
 */
export default function SinglePage({ path, pageError }) {
  const navigate = useNavigate();
  const { slug } = useParams();
  const { data, dataLoading } = useFetcherData(`${path}?slug=${slug}`);

  useEffect(() => {
    if (!dataLoading && data.length === 0) navigate(`/${pageError}`);
  }, [data, dataLoading]);

  const pageTitle = data.length > 0 ? data[0].title.rendered : "";

  return (
    <Template title={pageTitle}>
      <Section id="headline" isTop={true}>
        {dataLoading ? (
          <p className="text-white-500 text-lg text-center pt-20">
            Sedang Memuat ...
          </p>
        ) : data.length !== 0 ? (
          <Container className="text-white-950">
            <Breadcrumb />
            <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-[1.2]">
              {data[0].title.rendered}
            </h1>
            <div className="relative w-full h-[350px]">
              <img
                src={removeImageSizeSuffix(data[0].featured_media)}
                className="object-cover w-full h-full"
                alt={data[0].title.rendered}
              />
            </div>
            <div
              className="mt-5 text-md lg:text-lg space-y-5"
              dangerouslySetInnerHTML={{
                __html: data[0].content.rendered,
              }}
            ></div>
          </Container>
        ) : null}
      </Section>
    </Template>
  );
}
