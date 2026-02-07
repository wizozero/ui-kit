// App.tsx
import Button from './components/Button/Button'
import utils from './styles/utilities.module.css'

function App() {
	return (
		<div style={{ padding: '2rem' }}>
			<h1>UI Kit</h1>

			<section style={{ marginTop: '2rem' }}>
				<h2>Buttons</h2>
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
					<Button variant='primary' className={utils.mt4}>
						With utility
					</Button>
				</div>
			</section>
		</div>
	)
}

export default App
