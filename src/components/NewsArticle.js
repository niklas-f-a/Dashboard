


export default function NewsArticle({news}){

  return (
    <article>
      <h4>{news.title}</h4>
      <p>{news.description}</p>
      <small>{news.source_id}</small>
    </article>
  )
}