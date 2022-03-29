import { useEffect, useState } from 'react';
import apiDB from '../api/apiDB';
import { ObraDBResponse as ObraDBResponse } from '../interfaces/obraInterface';

interface obrassState {
    nowPlaying: obras[];
    popular: obras[];
    topRated: obras[];
    upcoming: obras[];
}

export const useobrass = () => {

    const [ isLoading, setIsLoading ] = useState(true);
    const [ obrassState, setobrassState ] = useState<ObrasState>({
        nowPlaying: [],
        popular: [],
        topRated: [],
        upcoming: [],
    })


    const getObras = async () => {
        
        const nowPlayingPromise = apiDB.get<ObraDBResponse>('/now_playing');
        const popularPromise    = apiDB.get<ObraDBResponse>('/popular');
        const topRatedPromise   = apiDB.get<ObraDBResponse>('/top_rated');
        const upcomingPromise   = apiDB.get<ObraDBResponse>('/upcoming');
        
        const resps = await Promise.all([ 
            nowPlayingPromise, 
            popularPromise, 
            topRatedPromise, 
            upcomingPromise 
        ]);

        setobrassState({
            nowPlaying: resps[0].data.results,
            popular: resps[1].data.results,
            topRated: resps[2].data.results,
            upcoming: resps[3].data.results,
        })

        setIsLoading( false );
    }

   
    useEffect(() => {
        // now_playing
        getObras();

    }, [])



    return {
        ...obrasState,
        isLoading
    }

}
