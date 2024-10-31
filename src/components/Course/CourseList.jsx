// components/Course/CourseList.jsx
import { useEffect, useState } from 'react';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from '../../services/api';

function CourseList() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        axios.get('/courses').then((response) => {
            setCourses(response.data.Courses);
        });
    }, []);

    return (
        <Grid container spacing={4}>
            {courses.map((course) => (
                <Grid item xs={12} md={6} lg={4} key={course.ID}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5">{course.Title}</Typography>
                            <Typography variant="body2">{course.Description}</Typography>
                            <Button component={Link} to={`/courses/${course.ID}`} variant="contained" color="primary">
                                Подробнее
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

export default CourseList;