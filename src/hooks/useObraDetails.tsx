import { useEffect, useState } from 'react'
import apiDB from '../api/obrasDB';
import { ObraFull as ObraFull } from '../interfaces/obrasInterface';
import { CreditsResponse, Cast } from '../interfaces/creditsInterface';

interface ObraDetails {
    isLoading: boolean;
    obraFull?: ObraFull;
    cast: Cast[];
}


export const useObraDetails = ( obraId: number ) => {

    const [state, setState] = useState<ObraDetails>({
        isLoading: true,
        obraFull: undefined,
        cast: []
    });


    const getObraDetails = async() => {

        const obraDetailsPromise = apiDB.get<ObraFull>(`/${ obraId }`);
        const castPromise = apiDB.get<CreditsResponse>(`/${ obraId }/credits`);

        const [ obraDetailsResp, castPromiseResp ] = await Promise.all([ obraDetailsPromise, castPromise ]);

        setState({
            isLoading: false,
            obraFull: obraDetailsResp.data,
            cast: castPromiseResp.data.cast
        })
    }

    useEffect(() => {
        getObraDetails();
        
    }, []);


    return {
        ...state
    }
    
}
