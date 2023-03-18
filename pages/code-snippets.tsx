import React from 'react'
import { Card, Heading } from 'components'

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
  }
]

const CodeSnippets = () => {
  return (
    <div className='mx-6 m-20 md:mx-20 grid gap-10 h-screen max-w-screen-2xl'>
      <Heading className='text-xl md:text-4xl text-center h-min'>
        Code Snippets
      </Heading>
      <div className='font-poppins grid-cards gap-6'>
        {
          snippets.map(
            ({ id, imageUrl, title, body, footer }) => (
              <Card key={id}
                imageUrl={imageUrl}
                title={title}
                body={body}
                footer={footer}
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