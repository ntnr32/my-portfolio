import React, { useEffect, useState } from 'react'
import useSWR, { Fetcher } from 'swr'
import axios from 'axios';
import { Gist } from 'common/models/gist'
import { formatDate } from 'utils/utility';
import { Card, Heading } from 'components'
import * as CONSTANTS from 'common/utils/constant'

const snippets = [
  {
    id: 1,
    imageUrl: "/images/snippets/1.png",
    title: "Title",
    body: "lorem ipsum dolor sit body lorem ipsum dolor sit bodylorem ipsum dolor sit bodylorem ipsum dolor sit bodylorem ipsum dolor sit bodylorem ipsum dolor sit bodylorem ipsum dolor sit bodylorem ipsum dolor sit body",
    footer: "2023-03-18"
  }, {
    id: 2,
    imageUrl: "/images/snippets/1.png",
    title: "Title",
    body: "lorem ipsum dolor sit body",
    footer: "2023-03-18"
  }, {
    id: 3,
    imageUrl: "/images/snippets/1.png",
    title: "Title",
    body: "lorem ipsum dolor sit body",
    footer: "2023-03-18"
  }, {
    id: 4,
    imageUrl: "/images/snippets/1.png",
    title: "Title",
    body: "lorem ipsum dolor sit body",
    footer: "2023-03-18"
  }, {
    id: 5,
    imageUrl: "/images/snippets/1.png",
    title: "Title",
    body: "lorem ipsum dolor sit body",
    footer: "2023-03-18"
  }, {
    id: 6,
    imageUrl: "/images/snippets/1.png",
    title: "Title",
    body: "lorem ipsum dolor sit body",
    footer: "2023-03-18"
  }, {
    id: 7,
    imageUrl: "/images/snippets/1.png",
    title: "Title",
    body: "lorem ipsum dolor sit body",
    footer: "2023-03-18"
  }, {
    id: 8,
    imageUrl: "/images/snippets/1.png",
    title: "Title",
    body: "lorem ipsum dolor sit body",
    footer: "2023-03-18"
  }, {
    id: 9,
    imageUrl: "/images/snippets/1.png",
    title: "Title",
    body: "lorem ipsum dolor sit body",
    footer: "2023-03-18"
  }, {
    id: 10,
    imageUrl: "/images/snippets/1.png",
    title: "Title",
    body: "lorem ipsum dolor sit body",
    footer: "2023-03-18"
  }, {
    id: 11,
    imageUrl: "/images/snippets/1.png",
    title: "Title",
    body: "lorem ipsum dolor sit body",
    footer: "2023-03-18"
  }, {
    id: 12,
    imageUrl: "/images/snippets/1.png",
    title: "Title",
    body: "lorem ipsum dolor sit body",
    footer: "2023-03-18"
  }, {
    id: 13,
    imageUrl: "/images/snippets/1.png",
    title: "Title",
    body: "lorem ipsum dolor sit body",
    footer: "2023-03-18"
  }, {
    id: 14,
    imageUrl: "/images/snippets/1.png",
    title: "Title",
    body: "lorem ipsum dolor sit body",
    footer: "2023-03-18"
  }, {
    id: 15,
    imageUrl: "/images/snippets/1.png",
    title: "Title",
    body: "lorem ipsum dolor sit body",
    footer: "2023-03-18"
  }, {
    id: 16,
    imageUrl: "/images/snippets/1.png",
    title: "Title",
    body: "lorem ipsum dolor sit body",
    footer: "2023-03-18"
  }, {
    id: 17,
    imageUrl: "/images/snippets/1.png",
    title: "Title",
    body: "lorem ipsum dolor sit body",
    footer: "2023-03-18"
  }, {
    id: 18,
    imageUrl: "/images/snippets/1.png",
    title: "Title",
    body: "lorem ipsum dolor sit body",
    footer: "2023-03-18"
  }, {
    id: 19,
    imageUrl: "/images/snippets/1.png",
    title: "Title",
    body: "lorem ipsum dolor sit body",
    footer: "2023-03-18"
  }, {
    id: 20,
    imageUrl: "/images/snippets/1.png",
    title: "Title",
    body: "lorem ipsum dolor sit body",
    footer: "2023-03-18"
  }
]

const imageUrl = '/images/snippets/1.png';

const fetcher: Fetcher<Array<Gist>, any> = (url: string) => axios.get(url).then(res => res.data)

const CodeSnippets = () => {

  const { data, error, isLoading } = useSWR(`${CONSTANTS.API.BASE_URL}/users/ntnr32/gists`, fetcher)

  return (
    <div className='mx-6 m-20 md:mx-20 grid gap-10 max-w-full'>
      <Heading className='text-xl md:text-4xl text-center h-min'>
        Code Snippets
      </Heading>
      {isLoading && <div>Loading....</div>}
      {error && <div>Error</div>}
      <div className='font-poppins grid-cards gap-6'>
        {
          data?.map(
            ({ id, description, created_at, html_url }) => (
              <Card
                key={id}
                id={id}
                imageUrl={imageUrl}
                title={description}
                link={html_url}
                footer={formatDate(created_at)}
              />
            )
          )
        }
      </div>
    </div >
  )
}

export default CodeSnippets

CodeSnippets.displayName = 'Code Snippets'