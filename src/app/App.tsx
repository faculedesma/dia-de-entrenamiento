import { useState, useEffect } from 'react';
import axios from 'axios';
import { albumIds } from '../constants/albumIds';
import './app.scss';

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async (id: string) => {
    const album = await axios.get(`https://api.spotify.com/v1/albums/${id}`, {
      headers: {
        Authorization:
          'Bearer BQCgPrwqQzhdtpD2PUmeybCVwlOAlJOotxl9qAU2KQXrcisguK4BgKCNEuuQ4ihRLZFBiEOGvAYUKsm08qOFhpWUgsyzfd_GLT9FW4XQmYP17GtrXub-aJWKfd85np-5vLznw1qcnRoGNvd_Kh0GCU-vIgvgt1hzb_rSQBa-GnOyLY3w',
        'Content-Type': 'application/json -H'
      }
    });
    setData(album.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData(albumIds.dsotm.id);
  }, []);

  console.log(data);

  return (
    <>
      <div className="app">{isLoading ? 'Loading...' : <>Data</>}</div>
    </>
  );
}

export default App;
