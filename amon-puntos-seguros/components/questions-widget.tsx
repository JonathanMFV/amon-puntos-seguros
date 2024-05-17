import { Info } from "./info";
import { title } from "@/components/primitives";

export default function Questions() {
    return (
        <>
            {Info.navQuestions.map((i) => (
                <div key={i.tema} className="flex flex-row w-full">
                    <div className="w-1/2">
                        <p
                            className={title({
                                size: "sm",
                            })}
                        >
                            {i.tema}
                        </p>
                    </div>
                    <div className="w-1/2">
                        {i.preguntas.map((j) => (
                            <div
                                key={j[0]}
                                className="collapse collapse-arrow bg-base-100"
                            >
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title text-lg font-medium border-b border-white">
                                    {j[1]}
                                </div>
                                <div className="collapse-content mt-2">
                                    <p className="text-color-gray-one text-base">
                                        {j[2]}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
}
