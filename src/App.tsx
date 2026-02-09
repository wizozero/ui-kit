import Button from './components/Button/Button'
import Card from './components/Card/Card'
import Input from './components/Input/Input'
import utils from './styles/utilities.module.css'

function App() {
	return (
		<div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
			<h1 className={utils.mb8}>UI Kit</h1>

			{/* Buttons Section */}
			<section className={utils.mb8}>
				<h2 className={utils.mb4}>Buttons</h2>
				<div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
					<Button variant='primary'>Primary</Button>
					<Button variant='secondary'>Secondary</Button>
					<Button variant='danger'>Danger</Button>
					<Button variant='primary' size='sm'>
						Small
					</Button>
					<Button variant='primary' size='lg'>
						Large
					</Button>
					<Button variant='primary' disabled>
						Disabled
					</Button>
				</div>
			</section>

			{/* Cards Section */}
			<section className={utils.mb8}>
				<h2 className={utils.mb4}>Cards</h2>
				<div
					style={{
						display: 'grid',
						gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
						gap: '1.5rem',
					}}
				>
					<Card
						title='MacBook Pro'
						description='High-performance laptop for professionals'
						image='https://picsum.photos/400/200'
					/>
					<Card
						title='iPad Air'
						description='Powerful tablet for creative work'
						image='https://picsum.photos/400/201'
						featured
					/>
					<Card title='iPhone 15' description='Latest smartphone technology' />
				</div>
			</section>

			<section className={utils.mb8}>
				<h2 className={utils.mb4}>Inputs</h2>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '1.5rem',
						maxWidth: '400px',
					}}
				>
					<Input
						label='Email'
						placeholder='Enter your email'
						helperText="We'll never share your email"
					/>

					<Input
						label='Password'
						type='password'
						placeholder='Enter your password'
						error
						errorMessage='Password must be at least 8 characters'
					/>

					<Input label='Username' placeholder='Choose a username' disabled />
				</div>
			</section>
		</div>
	)
}

export default App
