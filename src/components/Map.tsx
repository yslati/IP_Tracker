import { GoogleMap, LoadScript } from "@react-google-maps/api";
	
const center = {
	lat: -3.745,
	lng: -38.523
};

const Map = () => {

	
	return (
		<div className="w-screen flex-grow bg-slate-300">
			<LoadScript googleMapsApiKey="AIzaSyBs_nAKVaSCYlg8S2SfCx9SgHAMOuxvRwI" >
				<GoogleMap center={center} zoom={10} mapContainerStyle={{width: '100%', height: '100%'}} >
					{ /* Child components, such as markers, info windows, etc. */ }
				</GoogleMap>
			</LoadScript>
		</div>
	);
};

export default Map;
