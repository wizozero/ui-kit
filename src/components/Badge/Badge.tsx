import clsx from 'clsx'
import styles from './Badge.module.css'

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
	variant?: 'success' | 'warning' | 'error' | 'info'
	children: React.ReactNode
}

function Badge({
	variant = 'success',
	children,
	className,
	...props
}: BadgeProps) {
	return (
		<span className={clsx(styles[variant], className)} {...props}>
			{children}
		</span>
	)
}

export default Badge
