import cov from "../img/aprop.png";

export default function Apropos() {
  return (
    <div
      style={{ backgroundImage: `url(${cov})` }}
      className="bg-cover bg-center bg-no-repeat h-[97vh] w-[70vw] -z-20"
    >
      <h1 className="uppercase pt-12 pl-12 font-bold text-5xl text-[#A95834] ">
        à propos{" "}
      </h1>
      <div className="ml-auto -pr-32 ">
        <p className="p-14 w-[90vw] pr-32  text-2xl bg-[#EEDFCA]/80">
          COGEB International CGI est une société à responsabilité limitée
          totalement expotatrice non résidente crée en 2002 conformément à la
          loi n° 94-42 du 07/03/1994 telle que modifiée et complétée par la loi
          n° 96-59 du 06/07/1996 et la loi n° 98-102 du 30/11/1998. Au capital
          de 250 milles dinars, cogeb international est spécialisée dans le
          domaine de négoce international soit l’exportation et l,importation de
          marchandises et produits ainsi que dans tout genre d’opérations de
          négoce international et de courtage.
        </p>
      </div>
    </div>
  );
}
