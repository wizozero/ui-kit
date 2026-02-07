import clsx from 'clsx'
import styles from './Button.module.css'
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'secondary' | 'danger'
	size?: 'sm' | 'md' | 'lg'
	children: React.ReactNode
}

function Button({
	variant = 'primary',
	size = 'md',
	children,
	className,
	...props
}: ButtonProps) {
	return (
		<button
			className={clsx(styles[variant], styles[size], className)}
			{...props}
		>
			{children}
		</button>
	)
}

export default Button
