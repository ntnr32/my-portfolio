
import useSWR, { Fetcher } from 'swr'
import axios from 'axios';
import { Gist } from 'common/models/gist'
import * as CONSTANTS from 'common/utils/constant'

const fetcher: Fetcher<Array<Gist>, any> = (url: string) => axios.get(url).then(res => res.data)

export function useGists() {
    const { data, error, isLoading } = useSWR(`${CONSTANTS.API.BASE_URL}/users/ntnr32/gists`, fetcher)

    return {
        gists: data,
        isLoading,
        isError: error
    }
}