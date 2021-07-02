import css from './input.style.scss'

interface IInput{
    placeholder?: string;
    type?: string;
    nameInput?: string;
    classe?: string;
    change?: any;
    errorValidation?: string;
    value?: any;
    IdInput?: string
}

const Input: React.FC<IInput> = ({ 
    placeholder, 
    type, 
    nameInput, 
    classe, 
    change, 
    errorValidation, 
    value, 
    IdInput 
}) => {
    return(
        <div className={css.container_input}>
            <input 
                type = {type} 
                name = {nameInput} 
                placeholder = {placeholder} 
                id = {classe} 
                className = {css.input} 
                ref = {change} 
                defaultValue = {value}
                required
            /> <br/>
            <p className={css.span_input} id={IdInput}> {errorValidation} </p>
        </div>
    )
}

export default Input