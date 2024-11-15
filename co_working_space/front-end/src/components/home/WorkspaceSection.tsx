import { UserIcon } from "lucide-react";

const WorkspaceSection = () => {
  return (
    <section>
      <div className=" mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 pt-10 gap-8 text-center mb-[90px]">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-black">
              Plusieurs options{" "}
            </h3>
            <p className="text-gray-600">
              Nous proposons de nombreux espaces de travail uniques. Vous pouvez
              ainsi choisir autant d'espace de travail que vous le souhaitez
              selon vos souhaits.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-black">
              Meilleures installations{" "}
            </h3>
            <p className="text-gray-600">
              L’avantage de louer un espace de travail chez nous est qu’il vous
              offre un service confortable et des installations complètes.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-black">Prix ​​fiable</h3>
            <p className="text-gray-600">
              Vous pouvez obtenir un espace de travail de la plus haute qualité
              à un prix fiable tout en bénéficiant des installations disponibles
              uniquement ici.
            </p>
          </div>
        </div>

        {/* Middle Section with Image and Description */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative  ">
            <img
              src="https://leechambers.org/wp-content/uploads/2020/06/20.-Who-Uses-Coworking-Spaces-Here%E2%80%99s-Everything-to-Know.jpg"
              alt="Co-Work Space"
              className="w-full h-full object-cover rounded-md shadow-md  mt-10 ml-10  h-90"
            />
            <div className="absolute top-0 left-0  bg-slate-400 text-white p-4  md:p-8 max-w-xs">
              <h2 className="text-xl font-bold">Co-Work Space</h2>
              <p>
                Découvrez notre espace de travail collaboratif révolutionnaire,
                conçu pour vous permettre de façonner votre travail et créer la
                vie dont vous avez toujours rêvé.
              </p>
            </div>
          </div>
          <div className="ml-8">
            <h3 className="text-4xl font-bold text-black mb-4">
              Nous vous fournissons un espace de travail confortable{" "}
            </h3>
            <p className="text-gray-600 mb-6">
              Découvrez des espaces de travail d'exception, conçus pour inspirer
              et favoriser la productivité, tout en vous connectant à des
              activités enrichissantes et à une communauté solidaire. Un lieu où
              entreprises et particuliers trouvent l'inspiration et la
              collaboration nécessaires pour exceller.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-6">
              <div className="text-center p-4 border border-gray-300 rounded-lg shadow-sm bg-blue-50">
                <div className="flex items-center justify-center mb-2">
                  <UserIcon className="h-8 w-8 text-blue-500 mr-2" />
                  <h4 className="text-3xl font-bold text-blue-600">125</h4>
                </div>
                <p className="text-gray-600 text-sm">Daily Visitors</p>
              </div>
              <div className="text-center p-4 border border-gray-300 rounded-lg shadow-sm bg-green-50">
                <h4 className="text-3xl font-bold text-green-600">63</h4>
                <p className="text-gray-600 text-sm">Creative Studios</p>
              </div>
              <div className="text-center p-4 border border-gray-300 rounded-lg shadow-sm bg-yellow-50">
                <h4 className="text-3xl font-bold text-yellow-600">80</h4>
                <p className="text-gray-600 text-sm">Rooms Available</p>
              </div>
              <div className="text-center p-4 border border-gray-300 rounded-lg shadow-sm bg-red-50">
                <h4 className="text-3xl font-bold text-red-600">974</h4>
                <p className="text-gray-600 text-sm">Working Desks</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkspaceSection;
