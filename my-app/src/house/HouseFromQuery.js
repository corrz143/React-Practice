import { useParams } from "react-router";
import House from "./housepage";
import { useContext } from "react";
import HousesContext from "../context/houseContext";


const HouseFromQuery = () => {
    const { id } = useParams();
    const allHouses = useContext(HousesContext);
    const house = allHouses.find((h) => h.id === parseInt(id));
    if(!house) return <div>House not found.</div>;
    return <House house={house}></House>;

};

export default HouseFromQuery;