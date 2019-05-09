import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { moviesSelector, genresSelector } from 'src/selectors/entities';
import { Link, Input } from 'src/components/Html';
import _ from 'lodash';
import { THUMBNAIL_URL } from 'src/consts/images';
import Pagination from 'src/components/Pagination';
import {
  screenActivate,
  screenDeactivate,
  searchMovies,
  setPage,
} from './actions';
import homeSelector from './selectors';

export const selector = createSelector(
  moviesSelector,
  genresSelector,
  homeSelector,
  (allMovies, allGenres, { search, page, total }) => {

    return {
      search,
      page,
      total,
      movies: _.map(allMovies, movie => ({
        id: movie.id,
        title: movie.title,
        img: `${THUMBNAIL_URL}${movie.poster_path}`,
        genres: !_.isEmpty(allGenres) ? _.map(movie.genre_ids, genreId => allGenres[genreId].name).join(', ') : '',
      })),
    }
  },
);

export class Home extends Component {
  static propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      genres: PropTypes.string,
    })),
    search: PropTypes.string,
    page: PropTypes.number,
    total: PropTypes.number,
  };

  static defaultProps = {
    movies: [],
  };

  componentWillMount() {
    this.props.screenActivate();
  }

  componentWillUnmount() {
    this.props.screenDeactivate();
  }

  render() {
    const { movies, search, page, total } = this.props;

    return (
      <div className="container">
        <Input
          className="mt-5 mb-4"
          value={search}
          onChange={(e) => this.props.searchMovies(e.target.value)}
        />
        <div className="row">
          {
            movies.map(movie => (
              <div key={movie.id} className="col-3 text-center mb-3">
                <div className="card px-4 py-3">
                  <Link to={`/movie/${movie.id}`} className="mb-2">
                    <img src={movie.img} alt={movie.title} />
                  </Link>
                  <div className="text-truncate text-primary font-weight-bold">{movie.title}</div>
                  <div className="text-truncate text-success">{movie.genres}</div>
                </div>
              </div>
            ))
          }
        </div>
        <Pagination
          page={page}
          changePage={this.props.setPage}
          total={total}
        />
      </div>
    );
  }
}

export default connect(selector,{
  screenActivate,
  screenDeactivate,
  searchMovies,
  setPage,
})(Home);

export { default as reducer } from './reducers';
export { default as saga } from './sagas';