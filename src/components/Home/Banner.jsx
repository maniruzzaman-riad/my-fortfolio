import profile from '../../assets/profile.png'

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={profile} className="max-w-sm rounded-lg w-1/2" />
                    <div className='w-1/2'>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="px-8 py-3 font-semibold rounded-full text-white bg-gray-700 hover:bg-gray-600 dark:bg-gray-100 dark:text-gray-800 border-2">Get Resume</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;