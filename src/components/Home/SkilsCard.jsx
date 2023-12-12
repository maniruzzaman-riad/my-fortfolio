import { TiHtml5 } from "react-icons/ti";
import { FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import SectionTitle from "../Sheard/SectionTitle";

const SkilsCard = () => {
    return (
        <div>
            <SectionTitle title="my skils"></SectionTitle>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <TiHtml5 className="text-8xl text-blue-700" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="text-3xl font-bold">HTML</h2>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <SiTailwindcss className="text-8xl text-blue-500" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="text-3xl font-bold">Tailwind</h2>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <TbBrandJavascript className="text-8xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="text-3xl font-bold">Javascript</h2>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <FaReact className="text-8xl text-blue-400" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="text-3xl font-bold">React</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkilsCard;