import cov from "../img/aprop.png";

export default function Apropos() {
  return (
    <div className="relative max-w-screen h-[97vh]">
      <div
        style={{
          backgroundImage: `url(${cov})`,
          backgroundSize: '65vw auto', // Width of the background image set to 60vw
          backgroundPosition: 'left bottom', // Position the background image to the left
          backgroundRepeat: 'no-repeat'
        }}
        className="bg-cover h-full -z-20"
      >
        <h1 className="uppercase pt-12 pl-12 font-bold text-5xl text-[#A95834]">
          à propos
        </h1>
        <div className="mt-14">
          <p
            className="ml-auto sm:h-[30vw]  sm:max-w-[60vw] p-16  max-w-[80vw]  sm:text-2xl rounded-l-xl bg-[#f1cb964a]"
            style={{ boxShadow: '0px 4px 18.9px 0px #000000A1' }}
          >
            COGEB International CGI est une société à responsabilité limitée
            totalement exportatrice non résidente créée en 2002 conformément à
            la loi n° 94-42 du 07/03/1994 telle que modifiée et complétée par la
            loi n° 96-59 du 06/07/1996 et la loi n° 98-102 du 30/11/1998.{' '}
            <br /> <br />
            Au capital de 250 milles dinars, COGEB International est spécialisée
            dans le domaine de négoce international soit l’exportation et
            l’importation de marchandises et produits ainsi que dans tout genre
            d’opérations de négoce international et de courtage.
          </p>
        </div>
      </div>
    </div>
  );
}
