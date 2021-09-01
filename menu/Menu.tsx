import { useState } from 'react';
import Pong from '../game/Pong';

type Props = {
	text: string
}

const Menu: React.FC<Props> = () => {
	const [text, setText] = useState('Click here to Start');

	function startGame() {
		let menu = document.querySelector('div.menu') as HTMLDivElement;
		menu.hidden = true;
		Pong();
	}
	
	return (
		<div className='menu' onClick={startGame}>
			{text}
		</div>	
	)
}

export default Menu;
