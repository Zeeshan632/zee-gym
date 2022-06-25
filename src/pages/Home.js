import { useState } from "react";
import { Box } from "@mui/material";

import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";

const Home = () => {
	const [exercises, setExercises] = useState([]);
	const [selectedBodyPart, setSelectedBodyPart] = useState("back");

	return (
		<Box>
			<HeroBanner />
			<SearchExercises
				setExercises={setExercises}
				selectedBodyPart={selectedBodyPart}
				setSelectedBodyPart={setSelectedBodyPart}
			/>
			<Exercises
				setExercises={setExercises}
				selectedBodyPart={selectedBodyPart}
				exercises={exercises}
			/>
		</Box>
	);
};

export default Home;
