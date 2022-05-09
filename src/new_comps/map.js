import React , {useRef,useEffect,useState} from 'react';
import { MapContainer, TileLayer , Marker } from 'react-leaflet';
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import { useNavigate, useSearchParams } from 'react-router-dom';
import LoadingScreen from '../misc_comps/loadingScreen';

function Map(props) {
  const [pos,setPos] = useState([32.328180, 34.85845])
  const [map,setMap] = useState({});
  const [loading,setLoading] = useState(false)

  const inpRef = useRef();
  const nav = useNavigate();
  const [query] = useSearchParams();

  const onSearchClick = () => {
    let inp_val = inpRef.current.value;
    nav("/map?s="+inp_val);
  }

  useEffect(() => {
    doSearchApi();
   

  },[query,map])

  const doSearchApi = async() => {
    setLoading(true);
    let searchQ = query.get("s") || "new york";
    const provider = new OpenStreetMapProvider();
    let result = await provider.search({ query: searchQ });
    console.log(result);
    if(result.length > 0){
      setPos([result[0].y,result[0].x])
      if(map.setView){
        map.setView([result[0].y,result[0].x]);
      }
    }
    setLoading(false)
  }


  return (
    <div className="container p-3">
      {loading && <LoadingScreen />}
      <div className='search d-flex col-md-4 mb-3'>
        <input ref={inpRef} placeholder='search for address also in hebrew' className='form-control'/>
        <button onClick={onSearchClick} className='btn btn-warning'>Search</button>
      </div>
      <MapContainer whenCreated={setMap} center={pos} zoom={15} scrollWheelZoom={false}>
        <Marker position={pos} />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </div>
  )
}

export default Map