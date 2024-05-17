import { Breadcrumb, Container, Section } from "../../components/molecules";
import { Template } from "../../components/organisms";
import Eline from "../../images/Novia-Edeline-Wijaya.jpg";
import Arvin from "../../images/Valentino-Arvin-Leroy-Suryahardja -Arvin.jpg";
import Vino from "../../images/Avelino-Maschur-Bryan-Jr-Konterius-Vino.jpg";
import Troy from "../../images/Troy-Amadeo-Tania-Troy.jpg";
import CardAboutTeam from "../../components/molecules/CardAboutTeam";
import { useFetcherData } from "../../hooks";

export default function About() {
  const { data, dataLoading } = useFetcherData(`pages?slug=about`);
  const teams = [
    {
      name: "Novia Edeline Wijaya (Eline)",
      quote:
        "the one and only girl in this group between the three big guys here. the prettiest, kindest and cutest fact",
      image: Eline,
    },
    {
      name: "Valentino Arvin Leroy Suryahardja (Arvin)",
      quote:
        "Silent but deadly. Objectively the most goodlooking male in the group (fact)",
      image: Arvin,
    },
    {
      name: "Avelino Maschur Bryan Jr Konterius (Vino)",
      quote: "Whatever you are, be a better version",
      image: Vino,
    },
    {
      name: "Troy Amadeo Tania (Troy)",
      quote: "What Arvin said is a lie",
      image: Troy,
    },
  ];

  return (
    <Template title="Tentang">
      <Section id="headline" isTop={true}>
        <Container className="text-white-950">
          <Breadcrumb />
          <h1 className="text-4xl font-bold mb-8 leading-[1.2]">
            Tentang Kami
          </h1>
          {dataLoading ? (
            <p className="text-white-500 text-lg text-center pt-20">
              Sedang Memuat Berita Terbaru ...
            </p>
          ) : (
            <>
              <div
                className="mb-8"
                dangerouslySetInnerHTML={{
                  __html: data[0].content.rendered,
                }}
              ></div>
              <p className="mb-8">
                Kami mengembangkan website ini bertujuan untuk menghadirkan
                pengalaman digital yang mengenalkan kepada pengunjung mengenai
                destinasi wisata, budaya dan kuliner di Provinsi Banten, Berikut
                profil tim kami :
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                {teams.length !== 0
                  ? teams.map((team, index) => (
                      <CardAboutTeam
                        key={index}
                        name={team.name}
                        quote={team.quote}
                        image={team.image}
                      />
                    ))
                  : null}
              </div>
            </>
          )}
        </Container>
      </Section>
    </Template>
  );
}
