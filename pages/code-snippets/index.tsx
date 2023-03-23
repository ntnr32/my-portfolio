import React from 'react'
import { formatDate } from 'utils/utility';
import { Card, Heading } from 'components'
import { useGists } from 'hooks/api/useGists';


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

const CodeSnippets = () => {

  const { gists, isError, isLoading } = useGists();

  return (
    <div className='mx-6 m-20 md:mx-20 grid gap-10 max-w-full'>
      <Heading className='text-xl md:text-4xl text-center h-min'>
        Code Snippets
      </Heading>
      {isLoading && <div>Loading....</div>}
      {isError && <div>Error</div>}
      <div className='font-poppins grid-cards gap-6'>
        {
          gists?.map(
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