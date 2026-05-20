import { useFetch } from '../hooks/useFetch'
import { useTitle } from '../hooks/useTitle'
import { Card } from '../components'

export const MovieList = ({apiPath, title}) => {
  const { data: movies } = useFetch(apiPath);
  
  const pageTitle = useTitle(title);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex flex-wrap justify-start other:justify-evenly">
          {
            movies.map((movie) => (
              <Card movie={movie} key={movie.id}/>
            ))
          }
        </div>
      </section>
    </main>
  )
}
