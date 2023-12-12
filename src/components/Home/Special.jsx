import SectionTitle from "../Sheard/SectionTitle";


const Special = () => {
    return (
        <div>
            <SectionTitle title="Speciality"></SectionTitle>
            <div className="flex gap-3">
            <div className="w-1/2 flex items-center px-8">
                <h2 className="text-5xl font-bold">My Special Skill Field Here.</h2>
            </div>
            <div className="w-1/2 space-y-8">
                <div className="py-12 px-6 bg-sky-400 space-y-6 rounded-tl-[85px] rounded-br-[85px]">
                    <div className="text-2xl font-semibold flex justify-between">
                        <h4>Communication</h4>
                        <p>80 %</p>
                    </div>
                    <progress className="progress progress-primary" value="80" max="100"></progress>
                </div>
                <div className="py-12 px-6 bg-sky-400 space-y-6 rounded-tl-[85px] rounded-br-[85px]">
                    <div className="text-2xl font-semibold flex justify-between">
                        <h4>Leadership</h4>
                        <p>70 %</p>
                    </div>
                    <progress className="progress progress-primary" value="70" max="100"></progress>
                </div>
                <div className="py-12 px-6 bg-sky-400 space-y-6 rounded-tl-[85px] rounded-br-[85px]">
                    <div className="text-2xl font-semibold flex justify-between">
                        <h4>Teamwork</h4>
                        <p>95 %</p>
                    </div>
                    <progress className="progress progress-primary" value="95" max="100"></progress>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Special;