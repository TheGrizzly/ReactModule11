import React, { Component } from 'react';

import './Courses.css';
import Course from '../Course/Course';
import {Route} from 'react-router-dom';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    courseSelectedHandler = (id,title) =>{
        this.props.history.push({pathname:'/courses/' + id + title})
    }

    render () {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map( course => {
                            return <article className="Course" key={course.id} title={course.title} onClick={() => this.courseSelectedHandler(course.id, course.title)} >{course.title}</article>;
                        } )
                    }
                </section>
                <Route path={this.props.match.url + '/:id:title'} exact component={Course} />
            </div>
        );
    }
}

export default Courses;