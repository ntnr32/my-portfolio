
import useSWR, { Fetcher } from 'swr'
import axios from 'axios';
import { Comment } from 'common/models/comment'
import * as CONSTANTS from 'common/utils/constant'

const fetcher: Fetcher<Array<Comment>, any> = (url: string) => axios.get(url).then(res => res.data)

export function useComments(id: string) {
    const { data, error, isLoading } = useSWR(`${CONSTANTS.API.BASE_URL}/gists/${id}/comments`, fetcher)

    return {
        comments: data,
        isLoading,
        isError: error
    }
}
