import { Info } from "./info";

export function CustomCardOne() {
    return (
        <>
            {Info.navProtocol.map((i) => (
                <div
                    key={i.key}
                    className="flex flex-row justify-center items-center w-[100%] lg:w-1/2 mt-14"
                >
                    <div className="card w-[100%] lg:w-[70%] h-[100%] bg-base-100 shadow-[0_0px_15px_-0px_rgba(0,0,0,0.3)] hover:shadow-[0_0px_30px_-0px_rgba(0,0,0,0.4)] hover:shadow-color-green-three transition-shadow duration-300 shadow-color-green-one border border-color-green-one rounded-lg">
                        <div className="card-body">
                            <h2 className="card-title text-color-green-one mt-5 text-xs md:text-base">
                                {i.title}
                            </h2>
                            <p className="text-[10px] md:text-sm">{i.text}</p>
                            <div className="card-actions justify-end">
                                <div>
                                    <p className="text-color-green-one text-[10px]">
                                        {i.key}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}



export function CustomCardTwo() {
    return (
        <>
            {Info.navRecomendations.map((i) => (
                <div
                    key={i.key}
                    className="flex flex-row justify-center items-center w-[100%] lg:w-1/3 mt-14"
                >
                    <div className="card w-[100%] lg:w-[90%] h-[100%] bg-base-100 shadow-[0_0px_15px_-0px_rgba(0,0,0,0.3)] hover:shadow-[0_0px_30px_-0px_rgba(0,0,0,0.4)] hover:shadow-color-green-three transition-shadow duration-300 shadow-color-green-one border border-color-green-one rounded-lg">
                        <div className="card-body">
                            <h2 className="card-title text-color-green-one mt-5 text-xs md:text-base">
                                {i.title}
                            </h2>
                            <p className="text-[10px] md:text-sm">{i.text}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}
