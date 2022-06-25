import { Box, Stack, Typography } from "@mui/material";
import HorizontalScrollBar from "./HorizontalScrollBar";
import Loader from "./Loader";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
	return (
		<Box sx={{ mt: { lg: "100px", xs: "0" } }}>
			{/* Exercises That Target The Same Muscle Group */}
			<Typography variant="h4" margin="80px 0 30px 40px">
				Exercises that target the same{" "}
				<span style={{ color: "#ff2625", textTransform: "capitalize" }}>
					Muscle Group
				</span>
			</Typography>
			<Stack direction="row" sx={{ p: "2", position: "relative" }}>
				{targetMuscleExercises.length ? (
					<HorizontalScrollBar data={targetMuscleExercises} />
				) : (
					<Loader />
				)}
			</Stack>

			{/* Exercises That Use The Same Equipment */}
			<Typography variant="h4" margin="80px 0 30px 40px">
				Exercises that uses the{" "}
				<span style={{ color: "#ff2625", textTransform: "capitalize" }}>
					Same Equipment
				</span>
			</Typography>
			<Stack direction="row" sx={{ p: "2", position: "relative" }}>
				{equipmentExercises.length ? (
					<HorizontalScrollBar data={equipmentExercises} />
				) : (
					<Loader />
				)}
			</Stack>
		</Box>
	);
};

export default SimilarExercises;
