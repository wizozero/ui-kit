import clsx from 'clsx'
import styles from './Input.module.css'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string
	error?: boolean
	errorMessage?: string
	helperText?: string
}

function Input({
	label,
	error,
	errorMessage,
	helperText,
	className,
	...props
}: InputProps) {
	return (
		<div className={clsx(styles.inputWrapper, className)}>
			{label && <label className={styles.label}>{label}</label>}

			<input
				className={clsx(styles.input, error && styles.inputError)}
				{...props}
			/>

			{helperText && !error && (
				<span className={styles.helperText}>{helperText}</span>
			)}

			{error && errorMessage && (
				<span className={styles.errorText}>{errorMessage}</span>
			)}
		</div>
	)
}

export default Input
