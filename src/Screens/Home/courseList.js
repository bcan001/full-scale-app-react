import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class courseList extends Component {
  //   static propTypes = {
  //     prop: PropTypes,
  //   };
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { courses, renderAuthor } = this.props;
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
                <td>{renderAuthor(course.authorId)}</td>
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

courseList.propTypes = {
  courses: PropTypes.array.isRequired,
  renderAuthor: PropTypes.func.isRequired,
};
