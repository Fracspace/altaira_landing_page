import React from 'react'
import { MoveRight } from "lucide-react"
import luxuryResortResidences from "../../assets/PrivateResidences/luxuryResortResidences.png"
import optionalRental from "../../assets/PrivateResidences/optionalRental.png"
import lifeStyleOwnership from "../../assets/PrivateResidences/lifeStyleOwnership.png"
import privateTourismLocation from "../../assets/PrivateResidences/privateTourismLocation.png"
import residence from "../../assets/PrivateResidences/residence.png"
const PrivateResidences = () => {
    return (
        <div id="residences">
            <div className='py-10'>
                <div className="ml-10 mr-10">
                <div className='max-w-7xl text-white mx-auto'>
                    <div className="flex flex-col gap-5 items-center">
                        <h2 className='text-2xl md:text-3xl font-semibold font-montserrat text-center'>Private Residences at Altaira Resort</h2>
                        <p className='text-center font-poppins text-lg md:text-xl'>Selected investors may have the opportunity to own private villas or residences within the Altaira resort community.</p>
                        <hr className="border-[#D4AF37]/60 border-1 w-full max-w-md" />
                    </div>
                    <div className='flex flex-col items-center'>
                    <div className="grid grid-cols-1 mx-auto gap-5 max-w-5xl space-y-10 mt-15 md:grid-cols-2">
                        <div className="flex max-w-md flex-col gap-2">
                            <div className="flex flex-row items-center gap-4">
                                <img src={luxuryResortResidences} alt="Luxury Resort Residences" className="w-9 h-9" />
                                <h2 className="font-semibold text-xl font-poppins text-[#D4AF37]">Luxury Resort Residences</h2>
                            </div>
                            <div>
                                <p className="font-poppins text-base">Own a thoughtfully designed villa or residence within the Altaira resort environment.</p>
                            </div>
                        </div>
                        <div className="flex max-w-md flex-col gap-2">
                            <div className="flex flex-row items-center gap-4">
                                <img src={optionalRental} alt="Optional Rental" className="w-9 h-9" />
                                <h2 className="font-semibold text-xl font-poppins text-[#D4AF37]">Optional Rental Potential</h2>
                            </div>
                            <div>
                                <p className="font-poppins text-base">Owners may offer their residence for guest stays through resort management.</p>
                            </div>
                        </div>

                        <div className="flex max-w-md flex-col gap-2">
                            <div className="flex flex-row items-center gap-4">
                                <img src={lifeStyleOwnership} alt="Life Style Ownership" className="w-9 h-9" />
                                <h2 className="font-semibold text-xl font-poppins text-[#D4AF37]">Lifestyle Ownership</h2>
                            </div>
                            <div>
                                <p className="font-poppins text-base">Enjoy a luxury resort lifestyle while owning a premium property.</p>
                            </div>
                        </div>

                        <div className="flex max-w-md flex-col gap-2">
                            <div className="flex flex-row items-center gap-4">
                                <img src={privateTourismLocation} alt="Private Tourism Location" className="w-9 h-9" />
                                <h2 className="font-semibold text-xl font-poppins text-[#D4AF37]">Private Tourism Location</h2>
                            </div>
                            <div>
                                <p className="font-poppins text-base">Located in one of Sri Lanka’s emerging tourism destinations.</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-10 md:mt-10'>
                        <div className='relative'>
                            <img src={residence} alt="Residence" className='object-cover h-[40vh] md:h-[40vh] lg:h-auto w-full' />
                            <div className="absolute inset-0 flex flex-col gap-10 items-center justify-center text-center p-4">
                                <h3 className="font-medium text-xl md:text-2xl font-poppins text-white">A Rare Opportunity to Own a Residence at Altaira</h3>
                                <button onClick={() => document.getElementById("herosection")?.scrollIntoView({ behavior: "smooth" })} className="bg-[#D4AF37] text-base font-montserrat cursor-pointer text-white py-2 px-4 rounded-md hover:scale-105 transition-transform duration-300">Know More <MoveRight className="inline ml-1" /></button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default PrivateResidences