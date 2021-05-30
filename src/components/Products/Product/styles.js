import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: '100%',
	},
	media: {
		height: 0,
		paddingTop: '56.25%', // 16:9
	},
	cardActions: {
		display: 'flex',
		justifyContent: 'center',
	},
	cardContent: {
		display: 'flex',
		justifyContent: 'space-between',
	},
}));

export { useStyles };
