import React from 'react'
import FactoryImage from '../Images/maps/factory-img.png'
import GroundZeroImage from '../Images/maps/ground-zero-img.png'
import TheLabImage from '../Images/maps/the-lab-img.png'
import CustomImage from '../Images/maps/custom-img.png'
import StreetsImage from '../Images/maps/streets-img.png'
import InterchangeImage from '../Images/maps/interchange-img.png'
import ReserveImage from '../Images/maps/reserve-img.png'
import ShorelineImage from '../Images/maps/shoreline-img.png'
import LighthouseImage from '../Images/maps/lighthouse-img.png'
import WoodsImage from '../Images/maps/woods-img.png'
import Card from './Card'
import { useEffect } from 'react'
const Maps = () => {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "scroll"
        };
    }, []);
    const mapsData = [
        {
            id: "55fa2d3fd4bdc2d5f408b4567",
            name: "Factory",
            link_3d: "https://tarkov.dev/map/factory-3d",
            link_interactive: "https://tarkov.dev/map/factory",
            description: "The industrial estate and facilities of Chemical Plant No. 16 were rented out illegally to the TerraGroup corporation. During the advent of the Contract Wars, the plant became the scene of numerous firefights between BEAR and USEC that ultimately determined control over the industrial district of Tarkov.\n\nLater on, in the wake of the chaos, the plant facilities became a shelter for the remaining civilians, Scavs, and military operatives, including the scattered remains of the BEAR and USEC contingents.",
            imgSrc: FactoryImage
        },
        {
            id: "56f40101d2720b2a4d8b45d6",
            name: "Customs",
            link_2d: "https://tarkov.dev/map/customs-2d",
            link_3d: "https://tarkov.dev/map/customs-3d",
            link_interactive: "https://tarkov.dev/map/customs",
            description: "The industrial estate and facilities of Chemical Plant No. 16 were rented out illegally to the TerraGroup corporation. During the advent of the Contract Wars, the plant became the scene of numerous firefights between BEAR and USEC that ultimately determined control over the industrial district of Tarkov.\n\nLater on, in the wake of the chaos, the plant facilities became a shelter for the remaining civilians, Scavs, and military operatives, including the scattered remains of the BEAR and USEC contingents.",
            imgSrc: CustomImage
        },
        {
            id: "5704e3c2d2720bac5b8b4567",
            name: "Woods",
            link_2d: "https://tarkov.dev/map/woods-2d",
            link_3d: "https://tarkov.dev/map/woods-3d",
            link_interactive: "https://tarkov.dev/map/woods",
            description: "The Priozersk Natural Reserve recently became part of the state-protected wildlife reserves of the North-Western Federal District.",
            imgSrc: WoodsImage
        },
        {
            id: "5704e4dad2720bb55b8b4567",
            name: "Lighthouse",
            link_2d: "https://tarkov.dev/map/lighthouse-2d-landscape",
            link_3d: "https://tarkov.dev/map/lighthouse-3d",
            link_interactive: "https://tarkov.dev/map/lighthouse",
            description: "The lighthouse at Cape Dalniy was an important strategic object on the way to Tarkov. During Contract Wars, it was the main entry point for USEC units and served as their base of operations. After the conflict, Scavs took a fancy to this place, until the old owners returned, who decided to stay in Tarkov and establish their own order.",
            imgSrc: LighthouseImage
        },
        {
            id: "5704e554d2720bac5b8b456e",
            name: "Shoreline",
            link_2d: "https://tarkov.dev/map/shoreline-2d",
            link_3d: "https://tarkov.dev/map/shoreline-3d",
            link_interactive: "https://tarkov.dev/map/shoreline",
            description: "The Shoreline area makes up a large part of the outskirts of Tarkov and is located next to the Port.\n\nThe area houses a partially abandoned village, modern private housing, agricultural fields, long stretches of beach, a boating facility, gas station, weather station, and a cellular tower as well as other commercial facilities. Shoreline's main point of interest is the \"Azure Coast\" health resort which consists of several luxurious buildings and facilities. The resort is exclusively powered by a nearby hydroelectric power plant. The resort had previously been used as temporary accommodation for members of TerraGroup and the corporation's associated divisions in preparation for the evacuation of the Tarkov Port.",
            imgSrc: ShorelineImage
        },
        {
            id: "5704e5fad2720bc05b8b4567",
            name: "Reserve",
            link_2d: "https://tarkov.dev/map/reserve-2d",
            link_3d: "https://tarkov.dev/map/reserve-3d",
            link_interactive: "https://tarkov.dev/map/reserve",
            description: "The secret Federal State Reserve Agency base that, according to urban legends, contains enough supplies to last for years: food, medications, and other resources, enough to survive an all-out nuclear war.",
            imgSrc: ReserveImage
        },
        {
            id: "5714dbc024597771384a510d",
            name: "Interchange",
            link_2d: "https://tarkov.dev/map/interchange-2d",
            link_interactive: "https://tarkov.dev/map/interchange",
            description: "The South Interchange is a key transport location for the city. This strategic area connects the port and harbor with the industrial outskirts of Tarkov. Located in the center of the interchange is a huge ULTRA shopping mall which was used as the main base of operation for the EMERCOM evacuation.",
            imgSrc: InterchangeImage
        },
        {
            id: "5714dc692459777137212e12",
            name: "Streets of Tarkov",
            link_2d: "https://tarkov.dev/map/streets-2d",
            link_3d: "https://tarkov.dev/map/streets-3d",
            link_interactive: "https://tarkov.dev/map/streets-of-tarkov",
            description: "Downtown Tarkov houses banks, malls, and hotels, as well as all the other amenities a thriving metropolis could have needed.",
            imgSrc: StreetsImage
        },
        {
            id: "5b0fc42d86f7744a585f9105",
            name: "The Lab",
            link_2d: "https://tarkov.dev/map/labs-2d",
            link_interactive: "https://tarkov.dev/map/the-lab",
            description: "Secret underground TerraGroup Labs facility hidden right under the center of Tarkov. Officially, this research center does not exist and, based on data scraps, is engaged in research and development as well as testing and simulation of projects in chemistry, physics, biology, and other high technology.",
            imgSrc: TheLabImage
        },
        {
            id: "653e6760052c01c1c805532f",
            name: "Ground Zero",
            link_2d: "https://tarkov.dev/map/ground-zero-2d",
            link_3d: "https://tarkov.dev/map/ground-zero-3d",
            link_interactive: "https://tarkov.dev/map/ground-zero",
            description: "The business center of Tarkov. This is where TerraGroup was headquartered. This is where it all began.",
            imgSrc: GroundZeroImage
        }
    ];

    return (

        <div className=" py-10 px-10 rounded-xl shadow-xl mt-10 flex justify-center items-center flex-col backdrop-saturate-200 "
            style={{
                background:
                    "linear-gradient(to top right, rgba(125,125,125,.01), rgba(6,13,12,.95))",
            }}>
            < div className='text-white justify-center items-center flex flex-col' >
                <h1 className='text-5xl '> Tarkov Tools </h1>
                <div className="flex items-center py-4 rounded-lg bg-customBlue relative overflow-hidden mt-10">
                    <div className="absolute left-0 top-0 bottom-0 w-3 bg-grayweird"></div>
                    <div className=' ml-28'>
                        <h2 className="text-xl font-semibold mb-2">Titolo della sezione</h2>
                        <p className="">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel turpis
                            vitae ante cursus pulvinar. Cras euismod metus eu orci scelerisque, sit amet
                            feugiat lectus volutpat. Donec euismod massa eu urna faucibus, vel cursus
                            nulla blandit. Nunc nec diam nec orci rutrum lobortis vel ac dolor.
                        </p>
                    </div>
                </div>
                <span className='text-4xl mt-16'>MAPS</span>
            </div >







            <div className="flex flex-wrap justify-center items-center mt-4">
                {mapsData.map(map => (
                    <Card
                        key={map.id}
                        name={map.name}
                        link_2d={map.link_2d}
                        link_3d={map.link_3d}
                        link_interactive={map.link_interactive}
                        imgSrc={map.imgSrc}
                    />
                ))}
            </div>
        </div >
    )
}

export default Maps 