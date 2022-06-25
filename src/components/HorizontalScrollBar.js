import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

import BodyPart from "./BodyPart";
import ExerciseCard from "./ExerciseCard";
import LeftArrowIcon from "../assets/icons/left-arrow.png";
import RightArrowIcon from "../assets/icons/right-arrow.png";

const LeftArrow = () => {
	const { scrollPrev } = useContext(VisibilityContext);

	return (
		<Typography onClick={() => scrollPrev()} className="right-arrow">
			<img src={LeftArrowIcon} alt="left-arrow" />
		</Typography>
	);
};

const RightArrow = () => {
	const { scrollNext } = useContext(VisibilityContext);

	return (
		<Typography onClick={() => scrollNext()} className="left-arrow">
			<img src={RightArrowIcon} alt="right-arrow" />
		</Typography>
	);
};

const HorizontalScrollBar = ({
	data,
	selectedBodyPart,
	setSelectedBodyPart,
	isBodyParts,
}) => {
	return (
		<ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
			{data.map((item) => {
				return (
					<Box
						key={item.id || item}
						itemId={item.id || item}
						title={item.id || item}
						m="0 40px"
					>
						{isBodyParts ? (
							<BodyPart
								item={item}
								selectedBodyPart={selectedBodyPart}
								setSelectedBodyPart={setSelectedBodyPart}
							/>
						) : (
							<ExerciseCard exercise={item} />
						)}
					</Box>
				);
			})}
		</ScrollMenu>
	);
};

export default HorizontalScrollBar;
