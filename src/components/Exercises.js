import { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";

import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ exercises, setExercises, selectedBodyPart }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const exercisesPerPage = 9;

	const indexOfLastExercise = currentPage * exercisesPerPage;
	const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
	const currentExercises = exercises.slice(
		indexOfFirstExercise,
		indexOfLastExercise
	);

	useEffect(() => {
		const fetchingExercises = async () => {
			const selectedBodyPartExercises = await fetchData(
				`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${selectedBodyPart}`,
				exerciseOptions
			);
			setExercises(selectedBodyPartExercises);
		};
		fetchingExercises();
	}, [selectedBodyPart]);

	const paginate = (e, value) => {
		setCurrentPage(value);

		window.scrollTo({ top: 1200, behavior: "smooth" });
	};

	return (
		<Box
			id="exercises"
			sx={{
				mt: { lg: "110px" },
			}}
			mt="50px"
			p="20px"
		>
			<Typography variant="h4" mb="46px">
				Showing Results
			</Typography>
			<Stack
				direction="row"
				sx={{ gap: { lg: "110px", xs: "50px" } }}
				flexWrap="wrap"
				justifyContent="center"
			>
				{currentExercises.map((exercise, index) => {
					return <ExerciseCard key={index} exercise={exercise} />;
				})}
			</Stack>
			<Stack mt="100px" alignItems="center">
				{exercises.length > 9 && (
					<Pagination
						color="standard"
						shape="rounded"
						defaultPage={1}
						count={Math.ceil(exercises.length / exercisesPerPage)}
						page={currentPage}
						onChange={paginate}
						size="large"
					/>
				)}
			</Stack>
		</Box>
	);
};

export default Exercises;
