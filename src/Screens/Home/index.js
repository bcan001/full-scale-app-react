import React, { Component } from 'react';
import { API } from '../../utils';
// import PropTypes from 'prop-types';

export default class index extends Component {
  static propTypes = {};

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
        <h1>Home Page</h1>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Link</th>
              <th>Author</th>
              <th>Length</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {courses.map(course => (
              <tr key={course.id}>
                <td>{course.title}</td>
                <td>
                  <a href={course.watchHref}>Link</a>
                </td>
                <td>{this.renderAuthor(course.authorId)}</td>
                <td>{course.length}</td>
                <td>{course.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
