import { MdCheckCircleOutline } from "react-icons/md";

const PopularRoutes = () => {
    return (
        <section className="w-full bg-white py-16 px-4 md:px-12">
            <div className="max-w-6xl mx-auto text-center mb-10">
                <h1 className="text-3xl md:text-4xl font-bold text-red-600">
                    Some Popular Routes:
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                {/* Left Column */}
                <ul className="space-y-4 text-lg">
                    {[
                        "Mount Abu Bus station to Ambaji temple.",
                        "Abu Road Railway station to Ambaji temple.",
                        "Mount Abu Bus station to Mount Abu Hill Station.",
                        "Abu Road Railway station to Mount Abu Hill Station.",
                        "Mount Abu Bus station to Dilwara Jain Temples.",
                        "Abu Road Railway station to Dilwara Jain Temples.",
                        "Abu Road / Mount Abu to Ajmer.",
                        "Abu Road / Mount Abu to Pushkar.",
                    ].map((route, index) => (
                        <li key={index} className="flex items-center space-x-3">
                            <MdCheckCircleOutline color="red" />
                            <span>{route}</span>
                        </li>
                    ))}
                </ul>

                {/* Right Column */}
                <ul className="space-y-4 text-lg">
                    {[
                        "Ambaji to Dilwara Jain Temples.",
                        "Ambaji to Mount Abu Hill Station.",
                        "Abu Road to Udaipur.",
                        "Abu Road to Ambaji.",
                        "Abu Road to Mount Abu.",
                        "Abu Road / Mount Abu to Jaipur.",
                        "Abu Road / Mount Abu to Jodhpur.",
                        "Abu Road / Mount Abu to Ranakpur.",
                    ].map((route, index) => (
                        <li key={index} className="flex items-center space-x-3">
                            <MdCheckCircleOutline color="red" />
                            <span>{route}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default PopularRoutes;
