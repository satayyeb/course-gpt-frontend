import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import { Stack } from "@mui/material";
import ScheduleIcon from "@mui/icons-material/Schedule";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import ArticleIcon from "@mui/icons-material/Article";

const CoursePage = ({ courseId }) => {
  const [course, setCourse] = useState(null);
  const [courseRate, setCourseRate] = useState(null);
  const [isEnrolled, setIsEnrolled] = useState(false); // Set this based on user's enrollment status

  useEffect(() => {
    const fetchCourseDetails = async () => {
      const data = await fetch(`/courses/${courseId}`).then((res) =>
        res.json()
      );
      setCourse(data);
    };
    fetchCourseDetails();
  }, [courseId]);

  const handleEnrollClick = () => {
    // Handle the enrollment logic here
    // You may want to make an API call to enroll the user in the course
    // Update isEnrolled state accordingly
  };

  useEffect(() => {
    const fetchCourseRate = async () => {
      const data = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/course-rate/${courseId}`
      ).then((res) => res.json());
      setCourseRate(data);
    };
    fetchCourseRate();
  }, [courseId]);

  console.log(courseRate);
  if (!course || !courseRate) return null;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
      }}
    >
      {course && (
        <Card sx={{ maxWidth: 600 }}>
          <CardMedia
            component="div"
            sx={{
              // 16:9
              pt: "56.25%",
            }}
            image={`https://picsum.photos/seed/foobar${course.name}/200`}
          />
          <CardContent>
            <Typography
              variant="h5"
              component="div"
              align="center"
              gutterBottom
            >
              {course.name}
            </Typography>
            <Stack direction={"row"} spacing={0.5}>
              <ArticleIcon fontSize="small" color="info"></ArticleIcon>
              <Typography color="text.secondary">
                {course.description}
              </Typography>
            </Stack>
            <Stack>
              <Stack direction={"row"} spacing={0.5}>
                <StarIcon color="info" fontSize="small" />
                <Typography color="text.secondary">
                  Rating: {courseRate.rate}
                </Typography>
              </Stack>
              <Typography mt={-0.5} variant="caption" color="text.secondary">
                ({courseRate.count} reviews)
              </Typography>
            </Stack>
            <Stack direction={"row"} spacing={0.5}>
              <ReportProblemIcon color="info" fontSize="small" />
              <Typography color="text.secondary">
                Course Difficulty: {course.difficulty}
              </Typography>
            </Stack>

            <Stack direction={"row"} spacing={0.5}>
              <ScheduleIcon color="info" fontSize="small" />
              <Typography color="text.secondary">
                Approx. {course.estimate_days} days to complete
              </Typography>
            </Stack>
          </CardContent>
          <CardActions sx={{ justifyContent: "center" }}>
            {isEnrolled ? (
              <Button variant="contained" size="medium">
                Go to Course
              </Button>
            ) : (
              <Button
                variant="contained"
                size="medium"
                onClick={handleEnrollClick}
              >
                Enroll Now for {course.price} Tomans
              </Button>
            )}
          </CardActions>
        </Card>
      )}
    </Box>
  );
};

export default CoursePage;
