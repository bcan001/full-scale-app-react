import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { API } from '../../utils';
import CourseList from './courseList';

export default class index extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
  };

  state = {
    courses: [],
    authors: [],
    loading: false,
    error: false,
  };

  componentDidMount() {
    this.fetchAPI();
  }

  fetchAPI = async () => {
    this.setState({ loading: true });

    try {
      const coursesAPI = API({ uri: 'http://localhost:3004/courses' });
      const authorsAPI = API({ uri: 'http://localhost:3004/authors' });

      const data = await Promise.all([coursesAPI, authorsAPI]);
      this.setState({ courses: data[0], authors: data[1], loading: false });
    } catch (error) {
      this.setState({ loading: false, error: 'Oops! something went wrong' });
    }
  };

  renderAuthor = id => {
    const { authors } = this.state;
    const author = authors.find(x => x.id === id);
    if (author) {
      return `${author.firstName} ${author.lastName}`;
    }
    return '';
  };

  addTodo = () => {
    const { authors } = this.state;
    const { history } = this.props;
    history.push({
      pathname: '/about',
      state: { authors },
    });
  };

  render() {
    const { courses, loading, error } = this.state;
    if (loading) {
      return <h1>Loading...</h1>;
    }

    if (error) {
      return <h1>{error}</h1>;
    }

    return (
      <div>
        <button type="button" onClick={this.addTodo}>
          Add Todo
        </button>
        <CourseList courses={courses} renderAuthor={this.renderAuthor} />
      </div>
    );
  }
}
