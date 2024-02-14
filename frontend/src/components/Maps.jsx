import React from 'react'
import MapsCard from './MapsCard'
const Maps = () => {
    return (
        <div className="">
            <h1 className="text-4xl text-center mb-8">Maps</h1>
            <div className="flex flex-col space-y-4">
                <MapsCard id={"55f2d3fd4bdc2d5f408b4567"}
                    name={"Factory"}
                    link_2d={"https://tarkov.dev/map/factory-2d"}
                    link_3d={"https://tarkov.dev/map/factory-3d"} />
                <MapsCard id={"56f40101d2720b2a4d8b45d6"}
                    name={"Customs"}
                    link_2d={"https://tarkov.dev/map/customs-2d"}
                    link_3d={"https://tarkov.dev/map/customs-3d"} />
                <MapsCard id={"5704e3c2d2720bac5b8b4567"}
                    name={"Woods"}
                    link_2d={"https://tarkov.dev/map/woods-2d"}
                    link_3d={"https://tarkov.dev/map/woods-3d"} />
                <MapsCard id={"5704e4dad2720bb55b8b4567"}
                    name={"Lighthouse"}
                    link_2d={"https://tarkov.dev/map/lighthouse-2d-landscape"}
                    link_3d={"https://tarkov.dev/map/lighthouse-3d"} />
                <MapsCard id={"5704e554d2720bac5b8b456e"}
                    name={"Shoreline"}
                    link_2d={"https://tarkov.dev/map/shoreline-2d"}
                    link_3d={"https://tarkov.dev/map/shoreline-3d"} />
                <MapsCard id={"5704e5fad2720bc05b8b4567"}
                    name={"Reserve"}
                    link_2d={"https://tarkov.dev/map/reserve-2d"}
                    link_3d={"https://tarkov.dev/map/reserve-3d"} />
                <MapsCard id={"5714dbc024597771384a510d"}
                    name={"Interchange"}
                    link_2d={"https://tarkov.dev/map/interchange-2d"} />
                <MapsCard id={"5714dc692459777137212e12"}
                    name={"Streets of Tarkov"}
                    link_2d={"https://tarkov.dev/map/streets-2d"}
                    link_3d={"https://tarkov.dev/map/streets-3d"} />
                <MapsCard id={"5b0fc42d86f7744a585f9105"}
                    name={"The Lab"}
                    link_2d={"https://tarkov.dev/map/labs-2d"}
                />
                <MapsCard id={"653e6760052c01c1c805532f"}
                    name={"Ground Zero"}
                    link_2d={"https://tarkov.dev/map/ground-zero-2d"}
                    link_3d={"https://tarkov.dev/map/ground-zero-3d"} />
            </div>


        </div>
    )
}

export default Maps 