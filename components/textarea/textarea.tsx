import css from './textarea.style.scss'

interface IaText{
    placeholder?: string;
    nameText?: string;
    change?: any;
    errorValidation?: string;
    value?: string
}

const Textarea: React.FC<IaText> = ({ 
    placeholder, 
    nameText, 
    change, 
    errorValidation,
    value
}) => {
    return(
        <div className={css.container_textarea}>
            <textarea 
                defaultValue={value} 
                name={nameText} 
                cols={30} 
                rows={10} 
                placeholder={placeholder} 
                ref={change}
                required
            ></textarea>
            <span className={css.error_textarea}> {errorValidation} </span>
        </div>
    )
}

export default Textarea