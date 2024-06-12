export default function Footer() {
    return (
        <div className="bg-black text-white">
            <div className="flex flex-row justify-start px-[50px] sm:px-[120px] lg:px-[60px] xl:px-[180px]">
                <div className="flex-col w-full">
                    <div className="flex flex-col lg:flex-row gap-20 md:gap-36">
                        <div>
                            <p className="text-md font-bold md:text-xl">
                                AmónPuntosSeguros
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-20 md:gap-36">
                            <div className="flex flex-col gap-y-4">
                                <p className="text-[14px] md:text-base font-bold">
                                    REDES SOCIALES
                                </p>
                                <div className="flex flex-row mt-3">
                                    <ul className="flex flex-row gap-x-3 items-center justify-center">
                                        <li className="flex w-10 h-10 items-center justify-center rounded-full border border-gray-400 hover:border-white">
                                            <a
                                                href="https://www.facebook.com/AmonCultural/"
                                                target="_blank"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className=" text-gray-400 hover:text-white feather feather-facebook"
                                                >
                                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                                </svg>
                                            </a>
                                        </li>
                                        <li className="flex w-10 h-10 items-center justify-center rounded-full border border-gray-400 hover:border-white">
                                            <a
                                                href="https://www.instagram.com/amon.cr/"
                                                target="_blank"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="text-gray-400 hover:text-white feather feather-instagram"
                                                >
                                                    <rect
                                                        x="2"
                                                        y="2"
                                                        width="20"
                                                        height="20"
                                                        rx="5"
                                                        ry="5"
                                                    ></rect>
                                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                                    <line
                                                        x1="17.5"
                                                        y1="6.5"
                                                        x2="17.51"
                                                        y2="6.5"
                                                    ></line>
                                                </svg>
                                            </a>
                                        </li>
                                        <li className="flex w-10 h-10 items-center justify-center rounded-full border border-gray-400 hover:border-white">
                                            <a
                                                href="https://www.youtube.com/channel/UCBmjpHiFTem5iwBpz6fe5Ug"
                                                target="_blank"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="27"
                                                    height="27"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="1.25"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="text-gray-400 hover:text-white feather feather-youtube"
                                                >
                                                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                                                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                                                </svg>
                                            </a>
                                        </li>
                                        <li className="flex w-10 h-10 items-center justify-center rounded-full border border-gray-400 hover:border-white">
                                            <a
                                                href="https://amon.cr/amon-cultural/"
                                                target="_blank"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className=" text-gray-400 hover:text-white feather feather-airplay"
                                                >
                                                    <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path>
                                                    <polygon points="12 15 17 21 7 21 12 15"></polygon>
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex flex-col gap-y-4">
                                <p className="text-[14px] md:text-base font-bold">
                                    CONTACTO
                                </p>
                                <p className="text-[11px] md:text-sm font-light">
                                    amoncultural@tec.ac.cr
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-[100%] h-10 border-t mt-32 items-center justify-center">
                        <p className="text-[10px] md:text-base">
                            Copyright © Amón Cultural
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
