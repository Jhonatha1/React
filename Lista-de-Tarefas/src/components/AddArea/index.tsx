import * as C from './styles';
import { useState, KeyboardEvent } from 'react';
 
type Props = {
    onEnter: (taskName: string) => void
  }
export const AddArea = ({onEnter}:Props) => {

    const [inputText, setInputText] = useState('');

    const handleKeyUp = (e: React.KeyboardEvent) => {
        if(e.code === 'Enter'|| e.code ==='NumpadEnter' && inputText !== ''){
            onEnter(inputText);
            setInputText('');
        }
    }
    return( 
        <C.Container>
            <div className="image">➕</div>
            <input
                type="text"
                placeholder="Adicione uma tarefa"
                value={inputText}
                onChange={e=>setInputText(e.target.value)}
                onKeyUp= {handleKeyUp}
            />

        </C.Container>
    );
}