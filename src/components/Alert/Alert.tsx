import clsx from 'clsx'
import styles from './Alert.module.css'

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
	variant?: 'success' | 'warning' | 'error' | 'info'
	title: string
	description: string
}

function Alert({
	variant = 'success',
	title,
	description,
	className,
	...props
}: AlertProps) {
	return (
		<div className={clsx(styles.alert, styles[variant], className)} {...props}>
			<h2 className={styles.alertTitle}>{title}</h2>
			<p className={styles.alertDescription}>{description}</p>
		</div>
	)
}

export default Alert
