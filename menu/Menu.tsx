import Pong from '../game/Pong';

export default function Menu() {
	return (
		<div className='menu'>
			<ul>
				<li id='1' onClick={() => {
					let menu = document.querySelector('.menu') as HTMLElement;
					menu.hidden = true;
					Pong()
				}}>Start</li>
				<li id='2'>Settings</li>
				<li id='3'>Exit</li>
			</ul>
		</div>
		
	)
}