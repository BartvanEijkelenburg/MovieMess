import { motion } from 'framer-motion';

interface Movie {
  id: number;
  title: string;
  image: string;
}

interface Row {
  title: string;
  movies: Movie[];
}

const rows: Row[] = [
  {
    title: 'Popular',
    movies: [
      { id: 1, title: 'Movie 1', image: 'https://picsum.photos/120/500' },
      { id: 2, title: 'Movie 2', image: 'https://picsum.photos/999' },
      { id: 3, title: 'Movie 3', image: 'https://picsum.photos/150' },
      { id: 4, title: 'Movie 4', image: 'https://picsum.photos/500' },
      { id: 5, title: 'Movie 5', image: 'https://picsum.photos/600' },
      { id: 6, title: 'Movie 6', image: 'https://picsum.photos/601/200' },
      { id: 7, title: 'Movie 7', image: 'https://picsum.photos/120' },
      { id: 8, title: 'Movie 8', image: 'https://picsum.photos/830' },
    ],
  },
  {
    title: 'Top Rated',
    movies: [
      { id: 6, title: 'Movie 6', image: 'https://picsum.photos/600' },
      { id: 7, title: 'Movie 7', image: 'https://picsum.photos/230' },
      { id: 8, title: 'Movie 8', image: 'https://picsum.photos/1200' },
      { id: 9, title: 'Movie 9', image: 'https://picsum.photos/800/100' },
      { id: 10, title: 'Movie 10', image: 'https://picsum.photos/800/600' },
      { id: 11, title: 'Movie 11', image: 'https://picsum.photos/400/200' },
      { id: 12, title: 'Movie 12', image: 'https://picsum.photos/400/150' },
    ],
  },
];

export const MovieGridComponent = () => {
  return (
    <div className={'bg-black'}>
      {rows.map((row) => (
        <div key={row.title} className={'pl-4 py-2'}>
          <h2 className={'text-xl font-bold text-white mb-2'}>{row.title}</h2>
          <motion.div
            className={'flex overflow-x-auto flex-nowrap'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {row.movies.map((movie) => (
              <div
                key={movie.id}
                className={
                  'mx-1 border border-transparent hover:border hover:border-blue-500 cursor-pointer active:opacity-80 transition-opacity duration-200'
                }
              >
                <motion.div className={'relative rounded-lg w-48'}>
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className={
                      'aspect-video w-48 object-cover hover:opacity-80 transition-opacity duration-200'
                    }
                  />
                  <h3
                    className={
                      'absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-50 hover:bg-opacity-80 transition-colors duration-200 text-white text-center font-bold text-sm truncate'
                    }
                  >
                    {movie.title}
                  </h3>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      ))}
    </div>
  );
};
