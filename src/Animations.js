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
		// x: 100,
		opacity: 0.3,
		// transformOrigin: " center center",
	},
	animate: {
		// x: 0,
		opacity: 1,
		// transformOrigin: " center center",
		transition: {
			duration: 1,
			ease: "backInOut",
		},
	},
	exit: {
		opacity: 0.3,
		// x: 100,

		// transformOrigin: " center center",
	},
};
// export const AnimatedLinks = {};
