import clsx from 'clsx'
import styles from './Card.module.css'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
	featured?: boolean
	image?: string
	title: string
	description: string
}

function Card({
	featured,
	image,
	title,
	description,
	className,
	...props
}: CardProps) {
	return (
		<article
			className={clsx(styles.card, featured && styles.featured, className)}
			{...props}
		>
			{image && <img className={styles.cardImage} src={image} alt={title} />}
			<div className={styles.cardBody}>
				<h3 className={styles.cardTitle}>{title}</h3>
				<p className={styles.cardDescription}>{description}</p>
			</div>
		</article>
	)
}

export default Card
