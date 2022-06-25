import { Box, Stack, Typography } from "@mui/material";

const ExerciseVideos = ({ exerciseVideos, name }) => {
	// if (!exerciseVideos.length) return "Loading...";

	return (
		<Box sx={{ marginTop: { lg: "200px", xs: "20px" } }} p="20px">
			<Typography variant="h3" mb="33px">
				Watch{" "}
				<span style={{ color: "#ff2625", textTransform: "capitalize" }}>
					{name}
				</span>{" "}
				exercise Videos
			</Typography>
			<Stack
				justifyContent="center"
				flexWrap="wrap"
				alignItems="center"
				sx={{
					flexDirection: { lg: "row", xs: "column" },
					gap: { lg: "50px", xs: "40px" },
				}}
			>
				{exerciseVideos?.slice(0, 6).map((item, index) => (
					<a
						key={index}
						className="exercise-video"
						href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
						target="_blank"
						rel="noreferrer"
					>
						<img
							src={item.video.thumbnails[0].url}
							alt={item.video.title}
							style={{ borderRadius: "10px" }}
						/>
						<Box>
							<Typography variant="h5" color="#000">
								{item.video.title}
							</Typography>
							<Typography variant="h6" color="#000" mt="20px">
								{item.video.channelName}
							</Typography>
						</Box>
					</a>
				))}
			</Stack>
		</Box>
	);
};

export default ExerciseVideos;
