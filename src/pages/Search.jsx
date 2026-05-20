import { useSearchParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch'
import { useTitle } from '../hooks/useTitle'
import { Card } from '../components/Card'

export const Search = ({apiPath}) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get('q');

  const { data: movies } = useFetch(apiPath, queryTerm);

  const pageTitle = useTitle(`Search result for ${queryTerm}`);

  return (
    <main>
      <section className='py-7'>
        <p className='text-3xl text-gray-700 dark:text-white'>{movies.length === 0 ? `No results found for '${queryTerm}'` : `Result for '${queryTerm}'`}</p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex flex-wrap justify-start">
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
