
import useSWR, { Fetcher } from 'swr'
import axios from 'axios';
import { GistItem } from 'common/models/gistItem'
import * as CONSTANTS from 'common/utils/constant'

const fetcher: Fetcher<GistItem, any> = (url: string) => axios.get(url).then(res => res.data)

export function useGist(id: string) {
    const { data, error, isLoading } = useSWR(id ? `${CONSTANTS.API.BASE_URL}/gists/${id}` : null, fetcher)

    if (data) {
        const [fileName] = Object.keys(data.files);
        data.fileName = fileName;
    }

    return {
        gist: data,
        isLoading,
        isError: error
    }
}