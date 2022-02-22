import { SliceSimulator } from "@prismicio/slice-simulator-react";
import SliceZone from "next-slicezone";
import state from "../.slicemachine/libraries-state.json";
import * as Slices from "../slices";

const resolver = ({ sliceName }) => Slices[sliceName];

const SliceSimulatorPage = () => (
    <SliceSimulator 
        sliceZone={(props) => <SliceZone {...props} 
        resolver={resolver} />} state={state} 
    />
);

export default SliceSimulatorPage;