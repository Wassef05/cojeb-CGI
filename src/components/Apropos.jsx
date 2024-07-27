import cov from "../img/aprop.png";

export default function Apropos() {
  return (
    <div className="relative  max-w-screen   h-[97vh]">
      <div
         style={{ 
          backgroundImage: `url(${cov})`,
          
        }}
        className="bg-cover  bg-center bg-no-repeat h-full  -z-20"
      >
        <h1 className="uppercase pt-12 pl-12 font-bold text-5xl text-[#A95834]">
          à propos
        </h1>
        <div className="mt-14">
          <p className="ml-auto sm:max-w-[50vw] max-w-[80vw] p-10 sm:text-2xl rounded-l-xl bg-[#EEDFCA]/70 ">
          COGEB International CGI est une société à responsabilité limitée totalement expotatrice non résidente crée en 2002 conformément à la loi n° 94-42 du 07/03/1994 telle que modifiée et complétée par la loi n° 96-59 du 06/07/1996 et la loi n° 98-102 du 30/11/1998. <br/> <br/>

Au capital de 250 milles dinars, cogeb international est spécialisée dans le domaine de négoce international soit l’exportation et l,importation de marchandises et produits ainsi que dans tout genre d’opérations de négoce international et de courtage. 
          </p>
        </div>
      </div>
    </div>
  );
}
