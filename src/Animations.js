export const popInAnimation = {
	initial: {
		opacity: 0,
		y: 100,
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			ease: "backInOut",
			delay: 0.1,
			duration: 1,
		},
	},
};
export const pageAnimation = {
	initial: {
		scale: 0.8,
		opacity: 0,
		transformOrigin: " center center",
	},
	animate: {
		scale: 1,
		opacity: 1,
		transformOrigin: " center center",
		transition: {
			duration: 1,
			ease: "backInOut",
		},
	},
	exit: {
		opacity: 1,
		scale: 0.8,
		transformOrigin: " center center",
	},
};
// export const AnimatedLinks = {};
